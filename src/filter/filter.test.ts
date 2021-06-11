import { suite } from 'uvu'
import * as assert from 'uvu/assert'
import { isNotNull } from '../isNull/isNull'
import { createFilter } from './filter'

const test = suite('filter')

// filter ---------------------------------------------------------------------------------------------------

test(`filter for 1`, () => {
	const items = [1, 2, 3, 5, 8, 1]
	const filterFor1 = createFilter<1>((item) => item === 1)
	const filteredItems = items.filter(filterFor1)

	assert.ok(filteredItems.length === 2)
})

test(`filter for id not null`, () => {
	type T = { id: number | null }
	const item1: T = { id: 1 }
	const item2: T = { id: null }
	const items = [item1, item2, item1]
	const filterForIdNotNull = createFilter<{ id: number }>((item) => item.id !== null)
	const filteredItems = items.filter(filterForIdNotNull)

	assert.ok(filteredItems.length === 2)
	assert.ok(filteredItems.includes(item1 as any))
})

test.run()
