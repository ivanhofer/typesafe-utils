import { suite } from 'uvu'
import * as assert from 'uvu/assert'
import { is, isNot, isProperty, isPropertyNot } from './is'

const test = suite('is')

// is -----------------------------------------------------------------------------------------------------------------

test(`is 5`, () => {
	const items = [1, 5, 8, 5, 33]
	const filteredItems = items.filter(is(5))

	assert.ok(filteredItems.length === 2)
})

// isNot --------------------------------------------------------------------------------------------------------------

test(`isNot 'text'`, () => {
	const items = ['text', 'another-text', null, '']
	const filteredItems = items.filter(isNot('text'))

	assert.ok(filteredItems.length === 3)
})

// isProperty ---------------------------------------------------------------------------------------------------------

test(`isProperty id 42`, () => {
	const items = [{ id: 46 }, { id: 42 }, { id: undefined }]
	const filteredItems = items.filter(isProperty('id', 42))

	assert.ok(filteredItems.length === 1)
})

// isPropertyNot ------------------------------------------------------------------------------------------------------

test(`isPropertyNot id null`, () => {
	const items = [{ id: 1 }, { id: null }, { id: undefined }]
	const filteredItems = items.filter(isPropertyNot('id', null))

	assert.ok(filteredItems.length === 2)
})

test.run()
