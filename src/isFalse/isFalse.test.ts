import { suite } from 'uvu'
import * as assert from 'uvu/assert'
import { Everything } from '../types'

import {
	arePropertiesFalse,
	arePropertiesNotFalse,
	isFalse,
	isNotFalse,
	isPropertyFalse,
	isPropertyNotFalse,
} from './isFalse'

const test = suite('false')

const falseValues = [false]
const notFalseValues = [-Infinity, -1, 1, Infinity, 'test', true, [], {}, undefined, null, 0, '']

// isFalse ------------------------------------------------------------------------------------------------------------

falseValues.forEach((value) => test(`isFalse ${value}`, () => assert.ok(isFalse(value))))
notFalseValues.forEach((value) => test(`! isFalse ${value}`, () => assert.not(isFalse(value))))

const _falseType: false[] = [...falseValues, notFalseValues].filter(isFalse)
const _neverType: never[] = notFalseValues.filter(isFalse)

// isNotFalse ---------------------------------------------------------------------------------------------------------

notFalseValues.forEach((value) => test(`isNotFalse ${value}`, () => assert.ok(isNotFalse(value))))
falseValues.forEach((value) => test(`! isNotFalse ${value}`, () => assert.not(isNotFalse(value))))

const _allNotType: Exclude<Everything, false>[] = [...falseValues, ...notFalseValues].filter(isNotFalse)
// const _neverNotType: never[] = falseValues.filter(isNotFalse)

// isPropertyFalse ----------------------------------------------------------------------------------------------------

test(`isPropertyTrue available`, () => {
	const items = [{ available: false }, { available: '' }, { available: undefined }]
	const filteredItems = items.filter(isPropertyFalse('available'))

	assert.ok(filteredItems.length === 1)
})

// isPropertyNotFalse -------------------------------------------------------------------------------------------------

test(`isPropertyNotFalse available`, () => {
	const items = [{ available: false }, { available: true }, { available: null }]
	const filteredItems = items.filter(isPropertyNotFalse('available'))

	assert.ok(filteredItems.length === 2)
})

// arePropertiesFalse -------------------------------------------------------------------------------------------------

test(`arePropertiesFalse available inStock`, () => {
	const items = [
		{ available: true, inStock: false },
		{ available: false, inStock: false },
		{ available: true, inStock: true },
		{ available: null, inStock: false },
	]
	const filteredItems = items.filter(arePropertiesFalse('available', 'inStock'))

	assert.ok(filteredItems.length === 1)
})

// arePropertiesNotFalse ----------------------------------------------------------------------------------------------

test(`arePropertiesNotFalse available inStock`, () => {
	const items = [
		{ available: true, inStock: false },
		{ available: false, inStock: false },
		{ available: true, inStock: true },
		{ available: null, inStock: true },
	]
	const filteredItems = items.filter(arePropertiesNotFalse('available', 'inStock'))

	assert.ok(filteredItems.length === 2)
})

test.run()
