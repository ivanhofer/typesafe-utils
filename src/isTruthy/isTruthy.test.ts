import { suite } from 'uvu'
import * as assert from 'uvu/assert'

import { isTruthy, isFalsy } from './isTruthy'

const test = suite('truthy')

const truthyValues = [-Infinity, -1, 1, Infinity, 'test', true, [], {}]
const falsyValues = [undefined, null, 0, '', false]

// isTruthy -----------------------------------------------------------------------------------------------------------

truthyValues.forEach((value) => test(`isTruthy ${value}`, () => assert.ok(isTruthy(value))))
falsyValues.forEach((value) => test(`! isTruthy ${value}`, () => assert.not(isTruthy(value))))

const _truthyType: {}[] = [...truthyValues, falsyValues].filter(isTruthy)
const _notFalsyType: (string | number | true)[] = falsyValues.filter(isTruthy)

// isFalsy ------------------------------------------------------------------------------------------------------------

falsyValues.forEach((value) => test(`isFalsy ${value}`, () => assert.ok(isFalsy(value))))
truthyValues.forEach((value) => test(`! isFalsy ${value}`, () => assert.not(isFalsy(value))))

// const _allNotType: (null | undefined | '' | 0 | false)[] = [...truthyValues, ...falsyValues].filter(isFalsy)
const _neverNotType: never[] = truthyValues.filter(isFalsy)

// --------------------------------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------------------------

test.run()
