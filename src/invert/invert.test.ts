import { suite } from 'uvu'
import * as assert from 'uvu/assert'
import { isNotNull, isNull } from '../isNull/isNull'
import { isNotUndefined } from '../isUndefined/isUndefined'
import { invert } from './invert'

const test = suite('invert')

// invert -------------------------------------------------------------------------------------------------------------

test(`invert isNull`, () => {
	const items = [1, 5, 8, 5, 33, null]
	const filteredItems = items.filter(invert(isNull))

	assert.ok(filteredItems.length === 5)
})

test(`invert isNotNull`, () => {
	const items = [1, 5, 8, 5, 33, null]
	const filteredItems = items.filter(invert(isNotNull))

	assert.ok(filteredItems.length === 1)
})

const _explicitType: number[] = [null, 123].filter(invert<number | null, number>(isNotNull))
const _autoType: number[] = [123, undefined].filter(invert(isNotUndefined))

test.run()
