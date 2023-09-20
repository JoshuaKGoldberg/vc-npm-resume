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
3. Add `#!/usr/bin/env node` to the top
4. Make an npm account (https://www.npmjs.com/signup)
5. `npm login`
   - Verify with `npm whoami`
6. `npm publish`
7. `npx vc-npm-resume@latest`

## Debugging

### `403` Error in `npm publish`

If you get an error like _`You cannot publish over the previously published versions`_, try changing the version in `package.json`.

Otherwise, try `npm login` to make sure you're logged in.
