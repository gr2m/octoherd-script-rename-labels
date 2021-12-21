// @ts-check

/**
 * Rename a multiple labels in a repository using find & replace
 *
 * @param {import('@octoherd/cli').Octokit} octokit
 * @param {import('@octoherd/cli').Repository} repository
 * @param {object} options
 * @param {string} options.find string to replace in existing label names
 * @param {string} options.replace replacement for the find string in existing labels
 */
export async function script(octokit, repository, { find, replace }) {
  if (!find || !replace) {
    octokit.log.error("Both --find and --replace are required");
    process.exit(1);
  }
  for await (const { data: labels } of octokit.paginate.iterator(
    "GET /repos/{owner}/{repo}/labels",
    {
      owner: repository.owner.login,
      repo: repository.name,
    }
  )) {
    const labelNames = labels.map((label) => label.name);
    octokit.log.info(`Labels found: ${labelNames.join(", ")}`);
    for (const label of labels) {
      if (!label.name.includes(find)) continue;

      await octokit.request("PATCH /repos/{owner}/{repo}/labels/{name}", {
        owner: repository.owner.login,
        repo: repository.name,
        name: label.name,
        new_name: label.name.replace(find, replace),
      });
    }
  }
}
