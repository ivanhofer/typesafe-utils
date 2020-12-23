import { suite } from 'uvu'
import * as assert from 'uvu/assert'
import { Everything } from '../types'

import { isTrue, isNotTrue, isPropertyNotTrue, isPropertyTrue } from './isTrue'

const test = suite('true')

const trueValues = [true]
const notTrueValues = [-Infinity, -1, 1, Infinity, 'test', [], {}, undefined, null, 0, '', false]

// isTrue -------------------------------------------------------------------------------------------------------------

trueValues.forEach((value) => test(`isTrue ${value}`, () => assert.ok(isTrue(value))))
notTrueValues.forEach((value) => test(`! isTrue ${value}`, () => assert.not(isTrue(value))))

const _trueType: true[] = [...trueValues, notTrueValues].filter(isTrue)
const _neverType: never[] = notTrueValues.filter(isTrue)

// isNotTrue ----------------------------------------------------------------------------------------------------------

notTrueValues.forEach((value) => test(`isNotTrue ${value}`, () => assert.ok(isNotTrue(value))))
trueValues.forEach((value) => test(`! isNotTrue ${value}`, () => assert.not(isNotTrue(value))))

const _allNotType: Exclude<Everything, true>[] = [...trueValues, ...notTrueValues].filter(isNotTrue)
// const _neverNotType: never[] = trueValues.filter(isNotTrue)

// isPropertyTrue -----------------------------------------------------------------------------------------------------

test(`isPropertyTrue available`, () => {
	const items = [{ available: true }, { available: 'some-id' }, { available: null }]
	const filteredItems = items.filter(isPropertyTrue('available'))

	assert.ok(filteredItems.length === 1)
})

// isPropertyNotTrue --------------------------------------------------------------------------------------------------

test(`isPropertyNotTrue available`, () => {
	const items = [{ available: 0 }, { available: true }, { available: null }]
	const filteredItems = items.filter(isPropertyNotTrue('available'))

	assert.ok(filteredItems.length === 2)
})

test.run()
