import { suite } from 'uvu'
import * as assert from 'uvu/assert'

import { isNull, isNotNull, isPropertyNull, isPropertyNotNull, arePropertiesNotNull, arePropertiesNull } from './isNull'

const test = suite('null')

const nullValues = [null]
const notNullValues = [-Infinity, -1, 1, Infinity, 'test', true, [], {}, undefined, 0, '', false]

// isNull -------------------------------------------------------------------------------------------------------------

nullValues.forEach((value) => test(`isNull ${value}`, () => assert.ok(isNull(value))))
notNullValues.forEach((value) => test(`! isNull ${value}`, () => assert.not(isNull(value))))

const _nullType: null[] = [...nullValues, notNullValues].filter(isNull)
const _neverType: never[] = notNullValues.filter(isNull)

// isNotNull ----------------------------------------------------------------------------------------------------------

notNullValues.forEach((value) => test(`isNotNull ${value}`, () => assert.ok(isNotNull(value))))
nullValues.forEach((value) => test(`! isNotNull ${value}`, () => assert.not(isNotNull(value))))

const _allNotType: ({} | undefined)[] = [...nullValues, ...notNullValues].filter(isNotNull)
const _neverNotType: never[] = nullValues.filter(isNotNull)

// isPropertyNull -----------------------------------------------------------------------------------------------------

test(`isPropertyNotNull id`, () => {
	const items = [{ id: 0 }, { id: undefined }, { id: null }]
	const filteredItems = items.filter(isPropertyNull('id'))

	assert.ok(filteredItems.length === 1)
})

// isPropertyNotUndefined ---------------------------------------------------------------------------------------------

test(`isPropertyNotNull id`, () => {
	const items = [{ id: undefined }, { id: 1 }, { id: null }]
	const filteredItems = items.filter(isPropertyNotNull('id'))

	assert.ok(filteredItems.length === 2)
})

// arePropertiesNull --------------------------------------------------------------------------------------------------

test(`arePropertiesNull id name`, () => {
	const items = [
		{ id: null, name: 'name-1' },
		{ id: 0, name: null },
		{ id: undefined, name: 'name-1' },
		{ id: null, name: null },
	]
	const filteredItems = items.filter(arePropertiesNull('id', 'name'))

	assert.ok(filteredItems.length === 1)
})

// arePropertiesNotNull ---------------------------------------------------------------------------------------------

test(`arePropertiesNotNull id name`, () => {
	const items = [
		{ id: null, name: 'name-1' },
		{ id: 0, name: null },
		{ id: undefined, name: 'name-1' },
		{ id: null, name: null },
	]
	const filteredItems = items.filter(arePropertiesNotNull('id', 'name'))

	assert.ok(filteredItems.length === 1)
})

test.run()
