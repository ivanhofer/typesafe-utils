import { suite } from 'uvu'
import * as assert from 'uvu/assert'
import { pick } from './pick'

const test = suite('pick')

// pick -----------------------------------------------------------------------------------------------

test(`pick inStock`, () => {
	const items = [
		{ available: 'some-id', inStock: true },
		{ available: true, inStock: true },
		{ available: 'some-id', inStock: false },
		{ available: null, inStock: true },
	]
	const filteredItems = items.map(pick('inStock'))

	filteredItems.forEach(item => assert.is(typeof item, 'boolean'))
	assert.is(filteredItems.filter(item => item === true).length, 3)
	assert.is(filteredItems.filter(item => item === false).length, 1)
})

test(`pick length`, () => {
	const items = ["string", "another-string", ""]
	const filteredItems = items.map(pick('length'))

	filteredItems.forEach(item => assert.is(typeof item, 'number'))
	assert.is(filteredItems[0], 6)
	assert.is(filteredItems[1], 14)
	assert.is(filteredItems[2], 0)
})

test.run()
