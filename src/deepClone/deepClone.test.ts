import { suite } from 'uvu'
import { deepClone } from './deepClone'
import * as assert from 'uvu/assert'

const test = suite('deepClone')

const check = <T>(toClone: T) => assert.equal(deepClone(toClone), toClone)

// primitives ---------------------------------------------------------------------------------------------------------

test('null', () => check(null))

test('undefined', () => check(undefined))

test('boolean true', () => check(true))
test('boolean false', () => check(false))

test('number 0', () => check(0))
test('number 1', () => check(1))
test('number -123', () => check(-123))

test('infinity', () => check(Infinity))
test('negativ infinity', () => check(-Infinity))

test('string', () => check('test'))
test('string with spaces', () => check('this is a with some spaces'))

// arrays -------------------------------------------------------------------------------------------------------------

test('empty array', () => check([]))
test('array with single value', () => check([5]))
test('array with multiple value', () => check([1, 5, 8]))
test('array with mixed values', () => check([null, 'test', 3]))

test('nested empty arrays', () => check([[[[]], []]]))
test('nested arrays with values', () => check([[true], [123, [5]]]))

// objects ------------------------------------------------------------------------------------------------------------

test('empty object', () => check({}))
test('object with single attribute', () => check({ prop: 'test' }))
test('object with multiple attributes', () => check({ a: 2, b: Infinity }))

test('nested empty objects', () => check({ a: { b: { c: { d: {} } } } }))

test.run()
