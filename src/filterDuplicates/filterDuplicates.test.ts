import { suite } from 'uvu'
import * as assert from 'uvu/assert'
import { filterDuplcates, filterDuplcatesByKey } from './filterDuplicates'

const test = suite('filterDuplicates')

// filterDuplicates ---------------------------------------------------------------------------------------------------

test(`filter duplicate numbers`, () => {
	const items = [1, 2, 3, 5, 8, 1]
	const filteredItems = items.filter(filterDuplcates)

	assert.ok(filteredItems.length === 5)
	assert.ok(filteredItems.filter((nr) => nr === 1).length === 1)
})

test(`filter duplicate objects`, () => {
	const item1 = { id: 1 }
	const item2 = { id: 2 }
	const items = [item1, item2, item1]
	const filteredItems = items.filter(filterDuplcates)

	assert.ok(filteredItems.length === 2)
	assert.ok(filteredItems.includes(item2))
	assert.ok(filteredItems.filter((item) => item === item1).length === 1)
})

// filterDuplicatesByKey ----------------------------------------------------------------------------------------------

test(`filter duplicate IDs`, () => {
	const items = [{ id: 1 }, { id: 2 }, { id: 1 }]
	const filteredItems = items.filter(filterDuplcatesByKey('id'))

	assert.ok(filteredItems.length === 2)
	assert.ok(filteredItems.filter(({ id }) => id === 1).length === 1)
})

test(`filter duplicate names`, () => {
	const items = [
		{ id: 1, name: 'name-1' },
		{ id: 2, name: 'name-2' },
		{ id: 3, name: 'name-1' },
		{ id: 4, name: 'name-2' },
	]
	const filteredItems = items.filter(filterDuplcatesByKey('name'))

	assert.ok(filteredItems.length === 2)
	assert.ok(filteredItems.filter(({ name }) => name === 'name-1').length === 1)
	const item2 = filteredItems.find(({ name }) => name === 'name-2')
	assert.ok(item2 && item2.id === 2)
})

test.run()
