import { suite } from 'uvu'
import * as assert from 'uvu/assert'
import { Everything } from '../types'
import { isZero, isNotZero, isPropertyZero, isPropertyNotZero, arePropertiesNotZero, arePropertiesZero } from './isZero'

const test = suite('zero')

const zeroValues = [0]
const notZeroValues = [-Infinity, -1, 1, Infinity, 'test', true, [], {}, undefined, null, '', false]

// isZero -------------------------------------------------------------------------------------------------------------

zeroValues.forEach((value) => test(`isZero ${value}`, () => assert.ok(isZero(value))))
notZeroValues.forEach((value) => test(`! isZero ${value}`, () => assert.not(isZero(value))))

const _zeroType: 0[] = [...zeroValues, notZeroValues].filter(isZero)
const _neverType: never[] = notZeroValues.filter(isZero)

// isNotZero ----------------------------------------------------------------------------------------------------------

notZeroValues.forEach((value) => test(`isNotZero ${value}`, () => assert.ok(isNotZero(value))))
zeroValues.forEach((value) => test(`! isNotZero ${value}`, () => assert.not(isNotZero(value))))

const _allNotType: Exclude<Everything, true>[] = [...zeroValues, ...notZeroValues].filter(isNotZero)
const _neverNotType: number[] = zeroValues.filter(isNotZero)

// isPropertyZero -----------------------------------------------------------------------------------------------------

test(`isPropertyZero id`, () => {
	const items = [{ id: 0 }, { id: undefined }, { id: null }]
	const filteredItems = items.filter(isPropertyZero('id'))

	assert.ok(filteredItems.length === 1)
})

// isPropertyNotZero --------------------------------------------------------------------------------------------------

test(`isPropertyNotZero id`, () => {
	const items = [{ id: 0 }, { id: 1 }, { id: null }]
	const filteredItems = items.filter(isPropertyNotZero('id'))

	assert.ok(filteredItems.length === 2)
})

// arePropertiesZero --------------------------------------------------------------------------------------------------

test(`arePropertiesZero id count`, () => {
	const items = [
		{ id: 0, count: 0 },
		{ id: undefined, count: 0 },
		{ id: 0, count: null },
		{ id: null, count: 12 },
	]
	const filteredItems = items.filter(arePropertiesZero('id', 'count'))

	assert.ok(filteredItems.length === 1)
})

// arePropertiesNotZero -----------------------------------------------------------------------------------------------

test(`arePropertiesNotZero id count`, () => {
	const items = [
		{ id: 0, count: 0 },
		{ id: undefined, count: 0 },
		{ id: 0, count: null },
		{ id: null, count: 12 },
	]
	const filteredItems = items.filter(arePropertiesNotZero('id', 'count'))

	assert.ok(filteredItems.length === 1)
})

test.run()
