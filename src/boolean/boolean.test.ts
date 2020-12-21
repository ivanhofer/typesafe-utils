import { suite } from 'uvu'
import {
	isEmpty,
	isFalse,
	isFalsy,
	isNotEmpty,
	isNotFalse,
	isNotNull,
	isNotTrue,
	isNotUndefined,
	isNotZero,
	isNull,
	isTrue,
	isTruthy,
	isUndefined,
	isZero,
} from './boolean'
import * as assert from 'uvu/assert'

const test = suite('boolean')

const truthyValues = [-Infinity, -1, 1, Infinity, 'test', true, [], {}]
const falsyValues = [undefined, null, 0, '', false]

const undefinedValues = [undefined]
const notUndefinedValues = [-Infinity, -1, 1, Infinity, 'test', true, [], {}, null, 0, '', false]

const nullValues = [null]
const notNullValues = [-Infinity, -1, 1, Infinity, 'test', true, [], {}, undefined, 0, '', false]

const trueValues = [true]
const notTrueValues = [-Infinity, -1, 1, Infinity, 'test', [], {}, undefined, null, 0, '', false]

const falseValues = [false]
const notFalseValues = [-Infinity, -1, 1, Infinity, 'test', true, [], {}, undefined, null, 0, '']

const zeroValues = [0]
const notZeroValues = [-Infinity, -1, 1, Infinity, 'test', true, [], {}, undefined, null, '', false]

const emptyValues = ['']
const notEmptyValues = [-Infinity, -1, 1, Infinity, 'test', true, [], {}, undefined, null, 0, false]

// isTruthy -----------------------------------------------------------------------------------------------------------

truthyValues.forEach((value) => test(`isTruthy ${value}`, () => assert.ok(isTruthy(value))))
falsyValues.forEach((value) => test(`! isTruthy ${value}`, () => assert.not(isTruthy(value))))

// isFalsy ------------------------------------------------------------------------------------------------------------

falsyValues.forEach((value) => test(`isFalsy ${value}`, () => assert.ok(isFalsy(value))))
truthyValues.forEach((value) => test(`! isFalsy ${value}`, () => assert.not(isFalsy(value))))

// isUndefined --------------------------------------------------------------------------------------------------------

undefinedValues.forEach((value) => test(`isUndefined ${value}`, () => assert.ok(isUndefined(value))))
notUndefinedValues.forEach((value) => test(`! isUndefined ${value}`, () => assert.not(isUndefined(value))))

// isNotUndefined -----------------------------------------------------------------------------------------------------

notUndefinedValues.forEach((value) => test(`isNotUndefined ${value}`, () => assert.ok(isNotUndefined(value))))
undefinedValues.forEach((value) => test(`! isNotUndefined ${value}`, () => assert.not(isNotUndefined(value))))

// isNull -----------------------------------------------------------------------------------------------------

nullValues.forEach((value) => test(`isNull ${value}`, () => assert.ok(isNull(value))))
notNullValues.forEach((value) => test(`! isNull ${value}`, () => assert.not(isNull(value))))

// isNotNull -----------------------------------------------------------------------------------------------------

notNullValues.forEach((value) => test(`isNotNull ${value}`, () => assert.ok(isNotNull(value))))
nullValues.forEach((value) => test(`! isNotNull ${value}`, () => assert.not(isNotNull(value))))

// isTrue -----------------------------------------------------------------------------------------------------

trueValues.forEach((value) => test(`isTrue ${value}`, () => assert.ok(isTrue(value))))
notTrueValues.forEach((value) => test(`! isTrue ${value}`, () => assert.not(isTrue(value))))

// isNotTrue -----------------------------------------------------------------------------------------------------

notTrueValues.forEach((value) => test(`isNotTrue ${value}`, () => assert.ok(isNotTrue(value))))
trueValues.forEach((value) => test(`! isNotTrue ${value}`, () => assert.not(isNotTrue(value))))

// isFalse -----------------------------------------------------------------------------------------------------

falseValues.forEach((value) => test(`isFalse ${value}`, () => assert.ok(isFalse(value))))
notFalseValues.forEach((value) => test(`! isFalse ${value}`, () => assert.not(isFalse(value))))

// isNotFalse -----------------------------------------------------------------------------------------------------

notFalseValues.forEach((value) => test(`isNotFalse ${value}`, () => assert.ok(isNotFalse(value))))
falseValues.forEach((value) => test(`! isNotFalse ${value}`, () => assert.not(isNotFalse(value))))

// isZero -----------------------------------------------------------------------------------------------------

zeroValues.forEach((value) => test(`isZero ${value}`, () => assert.ok(isZero(value))))
notZeroValues.forEach((value) => test(`! isZero ${value}`, () => assert.not(isZero(value))))

// isNotZero -----------------------------------------------------------------------------------------------------

notZeroValues.forEach((value) => test(`isNotZero ${value}`, () => assert.ok(isNotZero(value))))
zeroValues.forEach((value) => test(`! isNotZero ${value}`, () => assert.not(isNotZero(value))))

// isEmpty -----------------------------------------------------------------------------------------------------

emptyValues.forEach((value) => test(`isEmpty ${value}`, () => assert.ok(isEmpty(value))))
notEmptyValues.forEach((value) => test(`! isEmpty ${value}`, () => assert.not(isEmpty(value))))

// isNotEmpty -----------------------------------------------------------------------------------------------------

notEmptyValues.forEach((value) => test(`isNotEmpty ${value}`, () => assert.ok(isNotEmpty(value))))
emptyValues.forEach((value) => test(`! isNotEmpty ${value}`, () => assert.not(isNotEmpty(value))))

test.run()
