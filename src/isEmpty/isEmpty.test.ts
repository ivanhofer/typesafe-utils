import { suite } from 'uvu'
import * as assert from 'uvu/assert'
import { Everything } from '../types'

import {
	arePropertiesEmpty,
	arePropertiesNotEmpty,
	isEmpty,
	isNotEmpty,
	isPropertyEmpty,
	isPropertyNotEmpty,
} from './isEmpty'

const test = suite('empty')

const emptyValues = ['']
const notEmptyValues = [-Infinity, -1, 1, Infinity, 'test', true, [], {}, undefined, null, 0, false]

// isEmpty ------------------------------------------------------------------------------------------------------------

emptyValues.forEach((value) => test(`isEmpty ${value}`, () => assert.ok(isEmpty(value))))
notEmptyValues.forEach((value) => test(`! isEmpty ${value}`, () => assert.not(isEmpty(value))))

const _emptyType: ''[] = [...emptyValues, notEmptyValues].filter(isEmpty)
const _neverType: never[] = notEmptyValues.filter(isEmpty)

// isNotEmpty ---------------------------------------------------------------------------------------------------------

notEmptyValues.forEach((value) => test(`isNotEmpty ${value}`, () => assert.ok(isNotEmpty(value))))
emptyValues.forEach((value) => test(`! isNotEmpty ${value}`, () => assert.not(isNotEmpty(value))))

const _allNotType: Exclude<Everything, ''>[] = [...emptyValues, ...notEmptyValues].filter(isNotEmpty)
const _neverNotType: never[] = emptyValues.filter(isNotEmpty)

// isPropertyEmpty ----------------------------------------------------------------------------------------------------

test(`isPropertyEmpty name`, () => {
	const items = [{ name: 'name-1' }, { name: '' }, { name: undefined }]
	const filteredItems = items.filter(isPropertyEmpty('name'))

	assert.ok(filteredItems.length === 1)
})

// isPropertyNotEmpty -------------------------------------------------------------------------------------------------

test(`isPropertyNotEmpty name`, () => {
	const items = [{ name: null }, { name: 'name-2' }, { name: '' }]
	const filteredItems = items.filter(isPropertyNotEmpty('name'))

	assert.ok(filteredItems.length === 2)
})

// arePropertiesEmpty -------------------------------------------------------------------------------------------------

test(`arePropertiesEmpty name role`, () => {
	const items = [
		{ name: 'name-1', role: 'ADMIN' },
		{ name: 'name-1', role: '' },
		{ name: '', role: '' },
		{ name: '', role: 'ADMIN' },
	]
	const filteredItems = items.filter(arePropertiesEmpty('name', 'role'))

	assert.ok(filteredItems.length === 1)
})

// arePropertiesNotEmpty ----------------------------------------------------------------------------------------------

test(`arePropertiesEmpty name role`, () => {
	const items = [
		{ name: 'name-1', role: 'ADMIN' },
		{ name: 'name-1', role: '' },
		{ name: '', role: '' },
		{ name: '', role: 'ADMIN' },
	]
	const filteredItems = items.filter(arePropertiesNotEmpty('name', 'role'))

	assert.ok(filteredItems.length === 1)
})

test.run()
