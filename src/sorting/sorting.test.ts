import { suite } from 'uvu'
import * as assert from 'uvu/assert'
import {
	sortDateASC,
	sortDateDESC,
	sortDatePropertyASC,
	sortDatePropertyDESC,
	sortNumberASC,
	sortNumberDESC,
	sortNumberPropertyASC,
	sortNumberPropertyDESC,
	sortStringASC,
	sortStringPropertyASC,
	sortStringPropertyDESC,
} from './sorting'

const test = suite('sorting')

// number -------------------------------------------------------------------------------------------------------------

test(`sortNumberASC`, () => {
	const items = [123, null, 0, -10]
	const sortedItems = items.sort(sortNumberASC)

	assert.equal(sortedItems, [null, -10, 0, 123])
})

test(`sortNumberDESC`, () => {
	const items = [12, -3, 0]
	const sortedItems = items.sort(sortNumberDESC)

	assert.equal(sortedItems, [12, 0, -3])
})

test(`sortNumberPropertyASC`, () => {
	const items = [{ a: 12 }, { a: -3 }]
	const sortedItems = items.sort(sortNumberPropertyASC('a'))

	assert.equal(sortedItems, [{ a: -3 }, { a: 12 }])
})

test(`sortNumberPropertyDESC`, () => {
	const items = [{ t: 0 }, { t: 100 }]
	const sortedItems = items.sort(sortNumberPropertyDESC('t'))

	assert.equal(sortedItems, [{ t: 100 }, { t: 0 }])
})

// string -------------------------------------------------------------------------------------------------------------

test(`sortStringASC`, () => {
	const items = ['z', null, 'A', '']
	const sortedItems = items.sort(sortStringASC)

	assert.equal(sortedItems, [null, '', 'A', 'z'])
})

test(`sortStringDESC`, () => {
	const items = ['z', 'B', 'a']
	const sortedItems = items.sort(sortStringASC)

	assert.equal(sortedItems, ['a', 'B', 'z'])
})

test(`sortStringASC Upper-/Lowercase`, () => {
	const items = ['hi', 'hI', 'Hi', 'HI']
	const sortedItems = items.sort(sortStringASC)
	assert.equal(sortedItems, items)

	const items2 = ['HI', 'hI', 'Hi', 'hi']
	const sortedItems2 = items2.sort(sortStringASC)
	assert.equal(sortedItems2, items2)
})

test(`sortStringPropertyASC`, () => {
	const items = [{ a: 'z' }, { a: 'b' }]
	const sortedItems = items.sort(sortStringPropertyASC('a'))

	assert.equal(sortedItems, [{ a: 'b' }, { a: 'z' }])
})

test(`sortStringPropertyDESC`, () => {
	const items = [{ t: 'a' }, { t: 'c' }]
	const sortedItems = items.sort(sortStringPropertyDESC('t'))

	assert.equal(sortedItems, [{ t: 'c' }, { t: 'a' }])
})

// date ---------------------------------------------------------------------------------------------------------------

const today = new Date()
const tomorrow = new Date(today.getTime() + 24 * 60 * 60 * 1000)
test(`sortDateASC`, () => {
	const items = [tomorrow, null, today]
	const sortedItems = items.sort(sortDateASC)

	assert.equal(sortedItems, [null, today, tomorrow])
})

test(`sortDateDESC`, () => {
	const items = [today, tomorrow, undefined]
	const sortedItems = items.sort(sortDateDESC)

	assert.equal(sortedItems, [tomorrow, today, undefined])
})

test(`sortDatePropertyASC`, () => {
	const items = [{ a: tomorrow }, { a: today }]
	const sortedItems = items.sort(sortDatePropertyASC('a'))

	assert.equal(sortedItems, [{ a: today }, { a: tomorrow }])
})

test(`sortDatePropertyDESC`, () => {
	const items = [{ t: today }, { t: tomorrow }]
	const sortedItems = items.sort(sortDatePropertyDESC('t'))

	assert.equal(sortedItems, [{ t: tomorrow }, { t: today }])
})

test.run()
