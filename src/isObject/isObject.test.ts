import { suite } from 'uvu'
import * as assert from 'uvu/assert'
import { isObject } from './isObject'

const test = suite('isObject')

// isObject -----------------------------------------------------------------------------------------------------------

test(`isObject`, () => {
	const items = ['test', { prop: 0 }, null, undefined, true, {}, 0, 123, false, '']

	const filteredItems = items.filter(isObject)

	assert.ok(filteredItems.length === 2)
	assert.equal(filteredItems[0], { prop: 0 })
	assert.equal(filteredItems[1], {})
})

const onlyObjects = [null, 123, { prop: 0 }].filter(isObject)
onlyObjects[0] && onlyObjects[0].prop

test.run()
