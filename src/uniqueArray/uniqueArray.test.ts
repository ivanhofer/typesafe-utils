import { suite } from 'uvu'
import * as assert from 'uvu/assert'
import { uniqueArray } from './uniqueArray'

const test = suite('uniqueArray')

// --------------------------------------------------------------------------------------------------------------------

const testUniqueArray = <T>(input: T[], expexted: T[]) =>
	test('uniqueArray', () => assert.equal(uniqueArray(input), expexted))

testUniqueArray([], [])

testUniqueArray(['test'], ['test'])
testUniqueArray(['test', '123'], ['test', '123'])
testUniqueArray(['a', 'a'], ['a'])
testUniqueArray(['a', 'b', 'a', 'a'], ['a', 'b'])

testUniqueArray([123], [123])
testUniqueArray([123, 456], [123, 456])
testUniqueArray([1, 1], [1])
testUniqueArray([1, 2, 1, 1], [1, 2])

testUniqueArray([true, false], [true, false])
testUniqueArray([true, true], [true])
testUniqueArray([false, false, false], [false])

testUniqueArray(['test', 123, true, null, false], ['test', 123, true, null, false])

test.run()
