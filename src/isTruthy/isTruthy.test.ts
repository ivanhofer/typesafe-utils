import { suite } from 'uvu'
import * as assert from 'uvu/assert'

import {
	isTruthy,
	isFalsy,
	isPropertyTruthy,
	isPropertyFalsy,
	arePropertiesFalsy,
	arePropertiesTruthy,
} from './isTruthy'

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

// isPropertyTruthy ---------------------------------------------------------------------------------------------------

test(`isPropertyTruthy id`, () => {
	const items = [{ id: 0 }, { id: 1 }, { id: null }]
	const filteredItems = items.filter(isPropertyTruthy('id'))

	assert.ok(filteredItems.length === 1)
})

// isPropertyFalsy ----------------------------------------------------------------------------------------------------

test(`isPropertyFalsy id`, () => {
	const items = [{ id: 0 }, { id: 1 }, { id: null }]
	const filteredItems = items.filter(isPropertyFalsy('id'))

	assert.ok(filteredItems.length === 2)
})

// arePropertiesTruthy ------------------------------------------------------------------------------------------------

test(`arePropertiesTruthy id name`, () => {
	const items = [
		{ id: 0, name: 'name-1' },
		{ id: 1, name: '' },
		{ id: 1, name: 'name-1' },
		{ id: null, name: '' },
	]
	const filteredItems = items.filter(arePropertiesTruthy('id', 'name'))

	assert.ok(filteredItems.length === 1)
})

// arePropertiesFalsy -------------------------------------------------------------------------------------------------

test(`arePropertiesFalsy id name`, () => {
	const items = [
		{ id: 0, name: 'name-1' },
		{ id: 1, name: '' },
		{ id: 1, name: 'name-1' },
		{ id: null, name: '' },
	]
	const filteredItems = items.filter(arePropertiesFalsy('id', 'name'))

	assert.ok(filteredItems.length === 1)
})

test.run()
