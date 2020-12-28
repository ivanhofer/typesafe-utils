import { suite } from 'uvu'
import * as assert from 'uvu/assert'
import { isObject } from './isObject'

const test = suite('isObject')

// isObject -----------------------------------------------------------------------------------------------------------

test(`isObject`, () => {
	type SomeObject = {
		prop?: number
	}

	const items: (SomeObject | null | undefined)[] = [{}, { prop: 0 }, null, undefined]

	const filteredItems = items.filter(isObject)

	assert.ok(filteredItems.length === 2)
})

const onlyObjects = [null, 123, { prop: 0 }].filter(isObject)
onlyObjects[0] && onlyObjects[0].prop

test.run()
