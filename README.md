# Package Publishing Fundamentals I

## Objectives

* Examine a basic shared component
* Practice consuming specified versions of an existing component 
* Outline how to publish a component to the `npm` package registry

## Motivation

Package registries streamline software development by serving as a one-stop-shop for libraries.
They simplify dependency management, enabling developers to easily share code.

While you are not expected to maintain your own packages, this lesson provides an overview for how package managers like `npm` work by including the minimum amount of code necessary.
This lesson could serve as a starting point for a discussion about creating a shared component library or other common code used within your organization.

## Notes

We will use [@samayer12/npm-package-demo](https://www.npmjs.com/package/@samayer12/npm-package-demo) for this exercise.

## Instructions

There are three parts to this exercise:
1. Examining the implementation of a basic shared component.
2. Consuming different versions of that component in a separate project.

### Examine the basic shared component

1. Run `git clone https://github.com/samayer12/npm-package-consumer`
2. Find references to `ImportedComponent` in the file `src/App.jsx`.
3. Run `npm list` to see the dependencies. Observe that `@samayer12/npm-package-demo@X.Y.Z` is in the output.
4. Run `npm run dev` and open a browser to the URL specified in your terminal.
5. Observe the text "Imported Component" on the screen.

### Consume a different version of an imported component

1. Modify `package.json` to use a different version of `@samayer12/npm-package-demo` (e.g., `0.0.8`).
2. Run `npm install`.
3. Restart the application.
4. Observe that the `<ImportedComponent>` renders differently.

### Outline of publishing a component to a package regsitry

Add some stuff about how to do what I did with `npm-package-demo`

There are key files, `package.json`, `index.js`

For public registry, gotta be a user on npm
I turned on 2FA with google authenticator
Then `npm adduser`

* `npm list`
* `npm outdated`
* `npm update`
* Edit `package.json`

1. Run `npm init --scope=@samayer12`
2. Run `npm publish --access public` # could also make it private if you want to restrict access
3. Make a consumer project `mkdir npm-package-consumer`
4. Run `npm install @samayer12/npm-package-demo`
5. Create a file that uses the dependency `touch test.js`

7. Talk to your instructor to go over what you just did.

## Further Reading

* [Creating a simple node.js module](https://docs.npmjs.com/creating-node-js-modules)
* [Updating packages downloaded from the npm registry](https://docs.npmjs.com/updating-packages-downloaded-from-the-registry)
* When publishing a package to a package registry, you must update the `version` field in the `package.json`.
How might you automate this process?

## Summary

This lesson showed you how to consume different versions of a project dependency by modifying `package.json`.
By using different versions of shared code, you gained different functionality or appearance changes without much effort.

Finally, you were provided with a loose outline of how to publish your own software packages and provided with detailed resources in case you want to dig deeper.
