import { suite } from 'uvu'
import * as assert from 'uvu/assert'
import { Everything } from '../types'

import { isFalse, isNotFalse } from './isFalse'

const test = suite('false')

const falseValues = [false]
const notFalseValues = [-Infinity, -1, 1, Infinity, 'test', true, [], {}, undefined, null, 0, '']

// isFalse -----------------------------------------------------------------------------------------------------

falseValues.forEach((value) => test(`isFalse ${value}`, () => assert.ok(isFalse(value))))
notFalseValues.forEach((value) => test(`! isFalse ${value}`, () => assert.not(isFalse(value))))

const _falseType: false[] = [...falseValues, notFalseValues].filter(isFalse)
const _neverType: never[] = notFalseValues.filter(isFalse)

// isNotFalse -----------------------------------------------------------------------------------------------------

notFalseValues.forEach((value) => test(`isNotFalse ${value}`, () => assert.ok(isNotFalse(value))))
falseValues.forEach((value) => test(`! isNotFalse ${value}`, () => assert.not(isNotFalse(value))))

const _allNotType: Exclude<Everything, false>[] = [...falseValues, ...notFalseValues].filter(isNotFalse)
// const _neverNotType: never[] = falseValues.filter(isNotFalse)

test.run()
