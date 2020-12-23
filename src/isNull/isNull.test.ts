import { suite } from 'uvu'
import * as assert from 'uvu/assert'

import { isNull, isNotNull } from './isNull'

const test = suite('null')

const nullValues = [null]
const notNullValues = [-Infinity, -1, 1, Infinity, 'test', true, [], {}, undefined, 0, '', false]

// isNull -----------------------------------------------------------------------------------------------------

nullValues.forEach((value) => test(`isNull ${value}`, () => assert.ok(isNull(value))))
notNullValues.forEach((value) => test(`! isNull ${value}`, () => assert.not(isNull(value))))

const _nullType: null[] = [...nullValues, notNullValues].filter(isNull)
const _neverType: never[] = notNullValues.filter(isNull)

// isNotNull -----------------------------------------------------------------------------------------------------

notNullValues.forEach((value) => test(`isNotNull ${value}`, () => assert.ok(isNotNull(value))))
nullValues.forEach((value) => test(`! isNotNull ${value}`, () => assert.not(isNotNull(value))))

const _allNotType: ({} | undefined)[] = [...nullValues, ...notNullValues].filter(isNotNull)
const _neverNotType: never[] = nullValues.filter(isNotNull)

test.run()
