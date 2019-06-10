import { expect } from "chai";
import {fx as loadCJSFxViaImport} from '../src/cjs'
import {fx as loadESMFxViaImport}  from '../src/esm'
import {fx as loadMJSFxViaImport}  from '../src/mjs'

describe('initial test', function () {
  it('should pass', function () {
    expect(1).to.equal(1)
  })

  it('load CJS via require', function () {
    const { fx: loadViaRequire } = require('../src/cjs')
    expect(loadViaRequire()).to.equal('CJS')
  })

  it('load CJS via import', function () {
    expect(loadCJSFxViaImport()).to.equal('CJS')
  })

  it('load ESM via require', function () {
    const { fx: loadViaRequire } = require('../src/esm')
    expect(loadViaRequire()).to.equal('ESM')
  })

  it('load ESM via import', function () {
    expect(loadESMFxViaImport()).to.equal('ESM')
  })

  it('load MJS via require', function () {
    const { fx: loadViaRequire } = require('esm')(module)('../src/mjs')
    expect(loadViaRequire()).to.equal('MJS')
  })

  it('load MJS via import', function () {
    expect(loadMJSFxViaImport()).to.equal('MJS')
  })
})