import { suite } from 'uvu'
import * as assert from 'uvu/assert'

import { isTruthy, isFalsy, isPropertyTruthy, isPropertyFalsy } from './isTruthy'

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

test(`isPropertyTruthy name`, () => {
	const items = [{ name: 'name-1' }, { name: undefined }, { name: '' }]
	const filteredItems = items.filter(isPropertyTruthy('name'))

	assert.ok(filteredItems.length === 1)
})

// isPropertyFalsy ----------------------------------------------------------------------------------------------------

test(`isPropertyFalsy id`, () => {
	const items = [{ id: 0 }, { id: 1 }, { id: null }]
	const filteredItems = items.filter(isPropertyFalsy('id'))

	assert.ok(filteredItems.length === 2)
})

test(`isPropertyFalsy name`, () => {
	const items = [{ name: 'name-1' }, { name: undefined }, { name: '' }]
	const filteredItems = items.filter(isPropertyFalsy('name'))

	assert.ok(filteredItems.length === 2)
})

test.run()
