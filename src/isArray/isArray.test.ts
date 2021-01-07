import { suite } from 'uvu'
import * as assert from 'uvu/assert'
import { isArray, isArrayEmpty, isArrayNotEmpty } from './isArray'

const test = suite('isArray')

// isArray ------------------------------------------------------------------------------------------------------------

const items = ['test', { prop: 0 }, null, undefined, true, {}, [123, 77], 0, 123, false, '', []]

test(`isArray`, () => {
	const filteredItems = items.filter(isArray)

	assert.ok(filteredItems.length === 2)
	assert.ok(filteredItems[0] && filteredItems[0].length === 2)
	assert.ok(filteredItems[1] && filteredItems[1].length === 0)
})

const onlyArrays = items.filter(isArray)
onlyArrays[0] && onlyArrays[0][0] && onlyArrays[0][0].toFixed()

// isArrayEmpty -------------------------------------------------------------------------------------------------------

test(`isArrayEmpty`, () => {
	assert.equal(isArrayEmpty([]), true)
	assert.equal(isArrayEmpty([123, 123]), false)
})

const emptyArray: string[] = []
if (isArrayEmpty(emptyArray)) {
	emptyArray.length === 0
}

// isArrayNotEmpty ----------------------------------------------------------------------------------------------------

test(`isArrayNotEmpty`, () => {
	assert.equal(isArrayNotEmpty([]), false)
	assert.equal(isArrayEmpty([123, 123]), true)
})

const nonEmptyArray = ['hi']
if (isArrayNotEmpty(nonEmptyArray)) {
	nonEmptyArray[0].toUpperCase()
}

test.run()
