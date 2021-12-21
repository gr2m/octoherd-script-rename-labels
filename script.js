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
export async function script(octokit, repository, { find, replace }) {}
