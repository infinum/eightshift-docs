Hi there! Thanks for helping out in improving our Eightshift Docs.

## Reporting an issue

If you are not sure how something works be sure to read our [documentation](https://eightshift.com/). If you found a bug in the code, please [open an issue](https://github.com/infinum/eightshift-docs/issues) and follow the instructions in the issue template.

## Contributing patches and new features

If you found a bug and want to fix it, or you want to add some new and cool feature, [fork](https://github.com/infinum/eightshift-docs) our repository, then create a `feature` branch from the `main` branch. For instance `feature/some-bug-fix` or `feature/some-cool-new-feature`.

Once you've coded things up, be sure you check that your code is following our [coding standards](https://github.com/infinum/eightshift-coding-standards). Also test that your code isn't breaking anything :)

Then submit a pull request to `develop` branch. Once we check everything we'll merge the changes into `main` with correct version correction (noted by the milestone flag and `future release` tag).

## Checking documentation changes

Use Node.js 24 LTS and Bun 1.4.4. From `website`, run `bun install --frozen-lockfile`, then `bun run build`. Preview with `bun run serve` to check links, Pagefind search, and interactive demos. Preserve existing public routes and heading links when moving content. Keep React state and callbacks inside imported island components rather than passing functions from MDX.

See the [README](../README.md) for content locations and deployment details. Pull requests run the static build without publishing; deployment happens after changes reach `main`.

## Integration testing

If you want to create integration tests for your code that would be great. We will add some in due time, and they are not necessary for a PR.
