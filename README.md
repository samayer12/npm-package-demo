# Package Publishing Fundamentals I

## Objectives

* Examine a basic shared component.
* Practice consuming specified versions of an existing component.
* Outline how to publish a component to the `npm` package registry.

## Motivation

Package registries streamline software development by serving as a one-stop-shop for libraries.
They simplify dependency management, enabling developers to easily share code.

While you are not expected to maintain your own packages, this lesson provides an overview for how package managers like `npm` work.
This lesson can serve as a starting point for a discussion about creating a shared component library or other common code used in your organization.

## Notes

We will use [@samayer12/npm-package-demo](https://www.npmjs.com/package/@samayer12/npm-package-demo) for this exercise.

## Instructions

There are three parts to this exercise:
1. Examining the implementation of a basic shared component.
2. Consuming different versions of that component in a separate project.
3. Outlining how to publish to a package registry.

### Examine the basic shared component

1. Run `git clone https://github.com/samayer12/npm-package-consumer`.
2. Find references to `ImportedComponent` in the file `src/App.jsx`.
3. Run `npm list` to see the dependencies. Observe that `@samayer12/npm-package-demo@X.Y.Z` is in the output.
4. Run `npm run dev` and open a browser to the URL specified in your terminal.
5. Observe the text "Imported Component" on the screen.

### Consume a different version of an imported component

1. Modify `package.json` to use a different version of `@samayer12/npm-package-demo` (e.g., `0.0.8`).
2. Run `npm install`.
3. Restart the application.
4. Observe that the `<ImportedComponent>` renders differently.

### Outline of publishing a component to a package registry

Given an account with your package registry, regardless of if it's self-hosted or public, there are some key concepts to publish an `npm` package:

1. Configure `package.json`.
This file contains project metadata and information about its dependencies.
There are three key fields:
   1. `name`: The name of your package, unique on the npm registry.
   2. `version`: The version number of your package following [Semantic Versioning](http://semver.org).
   3. `main`: This field points to the entry point of your package, typically `index.js`.
2. Configure `.npmrc`.
To avoid entering your credentials when you publish a package, store your authentication token in the `.npmrc` file.
`npm` automatically does this when you run `npm login`.
Read [the docs](https://docs.npmjs.com/cli/v10/configuring-npm/npmrc) for more details.
   *  **NOTE**: Since the authentication token is a secret value, do NOT store it in version control.
3. Publish to the package registry.
   1. Create an account with the package registry.
   2. Run `npm login` in your terminal.
   3. When you have a version of your package ready for release, run `npm publish`.
      * **NOTE**: Releasing a package involves updating the `version` field in `package.json` and should be part of an automated process that uses the project's `git` history.

## Troubleshooting

Common errors during the `npm publish` process include:

1. **Authentication Issues**:
If you encounter authentication errors during `npm publish` process, ensure that your credentials are correctly set up.
Double-check the `.npmrc` file and run `npm login` to reauthenticate if necessary.
2. **Versioning Conflicts**:
In case of versioning conflicts or unexpected behavior after updating dependencies, review your `package.json` file to verify the compatibility of versions.
Ensure that you follow [SemVer](http://semver.org) principles when updating versions.
3. **Registry Connection Problems**:
Check your network settings and ensure that `npm` is configured to use the correct registry URL.
You can adjust registry settings in the `.npmrc` file.

## Further Reading

* [.npmrc docs](https://docs.npmjs.com/cli/v10/configuring-npm/npmrc)
* [npm login docs](https://docs.npmjs.com/cli/v9/commands/npm-login)
* [Creating a simple node.js module](https://docs.npmjs.com/creating-node-js-modules)
* [Updating packages downloaded from the npm registry](https://docs.npmjs.com/updating-packages-downloaded-from-the-registry)
* [Semantic Release](https://github.com/semantic-release/semantic-release)

## Summary

This lesson showed you how to consume different versions of a project dependency by modifying `package.json`.
By using different versions of shared code, you gained different functionality or appearance changes without much effort.

Finally, you were provided with an outline of how to publish your own software packages.
You were also provided with detailed resources in case you want to dig deeper.
