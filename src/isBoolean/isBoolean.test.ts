import { suite } from 'uvu'
import * as assert from 'uvu/assert'
import { isBoolean } from './isBoolean'

const test = suite('isBoolean')

// isBoolean ----------------------------------------------------------------------------------------------------------

const items = ['test', { prop: 0 }, null, undefined, true, {}, 0, 123, false, '']

test(`isBoolean`, () => {
	const filteredItems = items.filter(isBoolean)

	assert.ok(filteredItems.length === 2)
	assert.is(filteredItems[0], true)
	assert.is(filteredItems[1], false)
})

const onlyBooleans = items.filter(isBoolean)
onlyBooleans[0] && onlyBooleans[0] === true

test.run()
