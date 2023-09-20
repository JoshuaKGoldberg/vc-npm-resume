# Virtual Coffee npm Resume

A workshop showing making your own `npx`-runnable npm package. 🎁

We'll cover:

1. _(topic: node/npm)_ How to set up a very straightforward npm package (just a single .js file)
2. _(topic: core JS)_ Logging some things in the file
3. _(topic: node/npm)_ Adding a dependency on chalk to get nice colors
4. _(topic: core JS)_ Wrapping those logs with | etc. characters to make a table
5. _(delighter)_ Using arbitrary math to make a gradient with chalk

https://www.npmjs.com/package/vc-npm-resume

## Steps we took

1. Create an `index.js` file
2. Add a `console.log` to that file
3. `node index.js`: it runs!
   - `node --watch index.js`: it runs in watch mode
4. `npm init`
   - Add a `bin: "index.js"`
   - If you're not Josh, change the `name`
5. Add `#!/usr/bin/env node` ("hashbang comment) to the top of `index.js`
6. Make an npm account (https://www.npmjs.com/signup)
7. `npm login`
   - Verify with `npm whoami`
8. `npm publish`
9. `npx vc-npm-resume@latest`
10. Make some changes to the file
11. `npm version patch`
    - This creates a Git commit with a tag
    - This updates your `package.json`
12. Fancify the table in `index.js`
13. `npm install chalk`
14. Add `node_modules` to `gitignore`

## Debugging

### `403` Error in `npm publish`

#### You do not have permission to publish "vc-npm-resume". Are you logged in as the correct user?

Change the name in your `package.json`.

#### `You cannot publish over the previously published versions`

Try changing the version in `package.json`.

Otherwise, try `npm login` to make sure you're logged in.

### npm ERR! could not determine executable to run

Add a `bin` entry in `package.json`.
And don't feel to bad about it, I totally forgot during the workshop 😉.

## Cannot use import statement outside a module

Either:

- Add `"type": "module"` to your `package.json`
- Rename the file to `.mjs`

## Error [ERR_REQUIRE_ESM]: require() of ES Module...

2. Switch from CJS (`require`) to ESM (`import`)
