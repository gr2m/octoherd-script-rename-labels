# octoherd-script-rename-labels

> Rename a multiple labels in a repository using find & replace

[![@latest](https://img.shields.io/npm/v/octoherd-script-rename-labels.svg)](https://www.npmjs.com/package/octoherd-script-rename-labels)
[![Build Status](https://github.com/gr2m/octoherd-script-rename-labels/workflows/Test/badge.svg)](https://github.com/gr2m/octoherd-script-rename-labels/actions?query=workflow%3ATest+branch%3Amain)

## Usage

Minimal usage

```js
npx octoherd-script-rename-labels \
  --find type: \
  --replace category:
```

Pass all options as CLI flags to avoid user prompts

```js
npx octoherd-script-rename-labels \
  -T ghp_0123456789abcdefghjklmnopqrstuvwxyzA \
  -R "gr2m/*" \
  --find type: \
  --replace category:
```

## Options

| option                       | type             | description                                                                                                                                                                                                                                 |
| ---------------------------- | ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `--find`                     | string           | **Required.** string to replace in existing label names                                                                                                                                                                                     |
| `--replace`                  | string           | **Required.** replacement for the find string in existing labels                                                                                                                                                                            |
| `--octoherd-token`, `-T`     | string           | A personal access token ([create](https://github.com/settings/tokens/new?scopes=repo)). Script will create one if option is not set                                                                                                         |
| `--octoherd-repos`, `-R`     | array of strings | One or multiple space-separated repositories in the form of `repo-owner/repo-name`. `repo-owner/*` will find all repositories for one owner. `*` will find all repositories the user has access to. Will prompt for repositories if not set |
| `--octoherd-bypass-confirms` | boolean          | Bypass prompts to confirm mutating requests                                                                                                                                                                                                 |

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md)

## About Octoherd

[@octoherd](https://github.com/octoherd/) is project to help you keep your GitHub repositories in line.

## License

[ISC](LICENSE.md)
