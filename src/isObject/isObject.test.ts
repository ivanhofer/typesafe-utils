import { suite } from 'uvu'
import * as assert from 'uvu/assert'
import { isObject, isPrimitiveObject } from './isObject'

const test = suite('isObject')

// isObject -----------------------------------------------------------------------------------------------------------

const now = new Date()
const items = ['test', { prop: 0 } as SomeObject, null, undefined, true, {}, 0, 123, false, '']

type SomeObject = {
	prop?: number
}

test(`isObject`, () => {
	const filteredItems = [...items, now].filter(isObject)

	assert.ok(filteredItems.length === 3)
	assert.equal(filteredItems[0], { prop: 0 })
	assert.equal(filteredItems[1], {})
	assert.equal(filteredItems[2], now)
})

test(`isPrimitiveObject`, () => {
	const filteredItems = items.filter(isPrimitiveObject)

	assert.ok(filteredItems.length === 2)
	assert.equal(filteredItems[0], { prop: 0 })
	assert.equal(filteredItems[1], {})
})

const onlyObjects = items.filter(isPrimitiveObject)
onlyObjects[0] && onlyObjects[0].prop

test.run()
