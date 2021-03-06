import { suite } from 'uvu'
import * as assert from 'uvu/assert'
import { isNumber } from './isNumber'

const test = suite('isNumber')

// isNumber -----------------------------------------------------------------------------------------------------------

const items = ['test', { prop: 0 }, null, undefined, true, {}, 0, 123, false, '']

test(`isNumber`, () => {
	const filteredItems = items.filter(isNumber)

	assert.ok(filteredItems.length === 2)
	assert.is(filteredItems[0], 0)
	assert.is(filteredItems[1], 123)
})

const onlyNumbers = items.filter(isNumber)
onlyNumbers[0] && onlyNumbers[0].toFixed()

test.run()
