# Package Publishing Fundamentals I

## Objectives

* Examine a basic shared component
* Publish an existing component
* Consume an existing component

## Motivation

Stuff

## Notes

For public registry, gotta be a user on npm
I turned on 2FA with google authenticator
Then `npm adduser`

`npm list`
`npm outdated`
`npm update`
Edit `package.json`

## Instructions

1. Run `npm init --scope=@samayer12`
2. Run `npm publish --access public` # could also make it private if you want to restrict access
3. Make a consumer project `mkdir npm-package-consumer`
4. Run `npm install @samayer12/npm-package-demo`
5. Create a file that uses the dependency `touch test.js`

## Further Reading

https://docs.npmjs.com/creating-node-js-modules
https://docs.npmjs.com/updating-packages-downloaded-from-the-registry

## Summary

