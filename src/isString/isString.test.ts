import { suite } from 'uvu'
import * as assert from 'uvu/assert'
import { isString } from './isString'

const test = suite('isString')

// isString -----------------------------------------------------------------------------------------------------------

test(`isObject`, () => {
	const items = ['test', { prop: 0 }, null, undefined]

	const filteredItems = items.filter(isString)

	assert.ok(filteredItems.length === 1)
})

const onlyStrings = [null, 123, { prop: 0 }, 'hello', 'test'].filter(isString)
onlyStrings[0] && onlyStrings[0].toLowerCase()

test.run()
