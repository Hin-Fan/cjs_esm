/**
 * This is how nodeJS loads ECMAScript modules without any extensions,
 * it however requires experiemental-modules flag to work and all
 * ECMAScript modules has to have .mjs extensions.
 * `node --expermental-modules mjs.mjs.
 */

// The following line is not actually import, but a `require`.
import loadCJSViaImport from './src/cjs'
import {fx as loadMJSFxViaImport}  from './src/mjs'

console.log(`${loadCJSViaImport.fx()} imported sucessfully`)
console.log(`${loadMJSFxViaImport()} imported sucessfully`)