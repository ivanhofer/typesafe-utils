import { suite } from 'uvu'
import * as assert from 'uvu/assert'
import { Everything } from '../types'

import { isTrue, isNotTrue } from './isTrue'

const test = suite('true')

const trueValues = [true]
const notTrueValues = [-Infinity, -1, 1, Infinity, 'test', [], {}, undefined, null, 0, '', false]

// isTrue -----------------------------------------------------------------------------------------------------

trueValues.forEach((value) => test(`isTrue ${value}`, () => assert.ok(isTrue(value))))
notTrueValues.forEach((value) => test(`! isTrue ${value}`, () => assert.not(isTrue(value))))

const _trueType: true[] = [...trueValues, notTrueValues].filter(isTrue)
const _neverType: never[] = notTrueValues.filter(isTrue)

// isNotTrue -----------------------------------------------------------------------------------------------------

notTrueValues.forEach((value) => test(`isNotTrue ${value}`, () => assert.ok(isNotTrue(value))))
trueValues.forEach((value) => test(`! isNotTrue ${value}`, () => assert.not(isNotTrue(value))))

const _allNotType: Exclude<Everything, true>[] = [...trueValues, ...notTrueValues].filter(isNotTrue)
// const _neverNotType: never[] = trueValues.filter(isNotTrue)

test.run()
