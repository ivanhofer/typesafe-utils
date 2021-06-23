import { suite } from 'uvu'
import * as assert from 'uvu/assert'
import { isNotUndefined } from '..'
import { isNotNull, isNull } from '../isNull/isNull'
import { isNumber } from '../isNumber/isNumber'
import { isString } from '../isString/isString'
import { isFalsy, isTruthy } from '../isTruthy/isTruthy'
import { and, not, or } from './logical'

const test = suite('logical')

const items = ['test', { prop: 0 }, null, undefined, true, {}, 0, 123, false, '']

// and ----------------------------------------------------------------------------------------------------------------

test(`and truthy`, () => {
	const filteredItems = items.filter(and(isTruthy, isFalsy))

	assert.ok(filteredItems.length === 0)
})

test(`and isNumber && equals 4`, () => {
	const filteredItems = [1.5, 4, -4, 6, 4].filter(and(isNumber, (value) => value === 4))

	assert.ok(filteredItems.length === 2)
})

// or -----------------------------------------------------------------------------------------------------------------

test(`or truthy`, () => {
	const filteredItems = items.filter(or(isTruthy, isFalsy))

	assert.ok(filteredItems.length === items.length)
})

test(`and isString || isNull`, () => {
	const filteredItems = ['', null, 'test', 55, undefined].filter(or(isString, isNull))

	assert.ok(filteredItems.length === 3)
})

// not ----------------------------------------------------------------------------------------------------------------

test(`not isNull`, () => {
	const items = [1, 5, 8, 5, 33, null]
	const filteredItems = items.filter(not(isNull))

	assert.ok(filteredItems.length === 5)
})

test(`not isNotNull`, () => {
	const items = [1, 5, 8, 5, 33, null]
	const filteredItems = items.filter(not(isNotNull))

	assert.ok(filteredItems.length === 1)
})

const _explicitType: number[] = [null, 123].filter(not<number>(isNotNull))
const _autoType: number[] = [123, undefined].filter(not(isNotUndefined))

test.run()
