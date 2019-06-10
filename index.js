/**
 * This is a demonstration of how to use libraries that are built using
 * commonJS, ESModule and ModuleJS.  ModuleJS, aka MJS, is more or less
 * a transition to distinguish libraries that are built using ModuleJS
 * libraries that are built from commonJS.  In practice, MJS is unnecessary
 * and confuses intellisense.
 */
require = require("esm")(module/* , options */)

import {fx as loadCJSFxViaImport} from './src/cjs'
import {fx as loadESMFxViaImport}  from './src/esm'
import {fx as loadMJSFxViaImport}  from './src/mjs'

console.log(`${loadCJSFxViaImport()} imported sucessfully`)
console.log(`${loadESMFxViaImport()} imported sucessfully`)
console.log(`${loadMJSFxViaImport()} imported sucessfully`)

console.log(`${require('./src/cjs').fx()} required sucessfully`)
console.log(`${require('./src/esm').fx()} required sucessfully`)
console.log(`${require('./src/mjs').fx()} required sucessfully`)