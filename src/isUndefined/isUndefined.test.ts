import { suite } from 'uvu'
import * as assert from 'uvu/assert'

import {
	isUndefined,
	isNotUndefined,
	isPropertyUndefined,
	isPropertyNotUndefined,
	arePropertiesUndefined,
	arePropertiesNotUndefined,
} from './isUndefined'

const test = suite('undefined')

const undefinedValues: undefined[] = [undefined]
const notUndefinedValues = [-Infinity, -1, 1, Infinity, 'test', true, [], {}, null, 0, '', false]

// isUndefined --------------------------------------------------------------------------------------------------------

undefinedValues.forEach((value) => test(`isUndefined ${value}`, () => assert.ok(isUndefined(value))))
notUndefinedValues.forEach((value) => test(`! isUndefined ${value}`, () => assert.not(isUndefined(value))))

const _undefinedType: undefined[] = [...undefinedValues, notUndefinedValues].filter(isUndefined)
const _neverType: never[] = notUndefinedValues.filter(isUndefined)

// isNotUndefined -----------------------------------------------------------------------------------------------------

notUndefinedValues.forEach((value) => test(`isNotUndefined ${value}`, () => assert.ok(isNotUndefined(value))))
undefinedValues.forEach((value) => test(`! isNotUndefined ${value}`, () => assert.not(isNotUndefined(value))))

const _allNotType: ({} | null)[] = [...undefinedValues, ...notUndefinedValues].filter(isNotUndefined)
const _neverNotType: never[] = undefinedValues.filter(isNotUndefined)

// isPropertyUndefined ------------------------------------------------------------------------------------------------

test(`isPropertyUndefined id`, () => {
	const items = [{ id: 0 }, { id: undefined }, { id: null }]
	const filteredItems = items.filter(isPropertyUndefined('id'))

	assert.ok(filteredItems.length === 1)
})

// isPropertyNotUndefined ---------------------------------------------------------------------------------------------

test(`isPropertyNotUndefined id`, () => {
	const items = [{ id: undefined }, { id: 1 }, { id: null }]
	const filteredItems = items.filter(isPropertyNotUndefined('id'))

	assert.ok(filteredItems.length === 2)
})

// arePropertiesUndefined ---------------------------------------------------------------------------------------------

test(`arePropertiesUndefined id name`, () => {
	const items = [
		{ id: 0, name: undefined },
		{ id: 12, name: 'name-1' },
		{ id: undefined, name: undefined },
		{ id: null, name: undefined },
	]
	const filteredItems = items.filter(arePropertiesUndefined('id', 'name'))

	assert.ok(filteredItems.length === 1)
})

// arePropertiesNotUndefined ------------------------------------------------------------------------------------------

test(`arePropertiesNotUndefined id name`, () => {
	const items = [
		{ id: 0, name: undefined },
		{ id: 12, name: 'name-1' },
		{ id: undefined, name: undefined },
		{ id: null, name: undefined },
	]
	const filteredItems = items.filter(arePropertiesNotUndefined('id', 'name'))

	assert.ok(filteredItems.length === 1)
})

test.run()
