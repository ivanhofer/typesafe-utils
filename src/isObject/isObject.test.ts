import { suite } from 'uvu'
import * as assert from 'uvu/assert'
import { isObject } from './isObject'

const test = suite('isObject')

// isObject -----------------------------------------------------------------------------------------------------------

const items = ['test', { prop: 0 }, null, undefined, true, {}, 0, 123, false, '']

test(`isObject`, () => {
	const filteredItems = items.filter(isObject)

	assert.ok(filteredItems.length === 2)
	assert.equal(filteredItems[0], { prop: 0 })
	assert.equal(filteredItems[1], {})
})

const onlyObjects = items.filter(isObject)
onlyObjects[0] && onlyObjects[0].prop

test.run()
