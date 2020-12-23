import { suite } from 'uvu'
import * as assert from 'uvu/assert'
import { isZero, isNotZero } from '..'
import { Everything } from '../types'

const test = suite('zero')

const zeroValues = [0]
const notZeroValues = [-Infinity, -1, 1, Infinity, 'test', true, [], {}, undefined, null, '', false]

// isZero -----------------------------------------------------------------------------------------------------

zeroValues.forEach((value) => test(`isZero ${value}`, () => assert.ok(isZero(value))))
notZeroValues.forEach((value) => test(`! isZero ${value}`, () => assert.not(isZero(value))))

const _zeroType: 0[] = [...zeroValues, notZeroValues].filter(isZero)
const _neverType: never[] = notZeroValues.filter(isZero)

// isNotZero -----------------------------------------------------------------------------------------------------

notZeroValues.forEach((value) => test(`isNotZero ${value}`, () => assert.ok(isNotZero(value))))
zeroValues.forEach((value) => test(`! isNotZero ${value}`, () => assert.not(isNotZero(value))))

const _allNotType: Exclude<Everything, true>[] = [...zeroValues, ...notZeroValues].filter(isNotZero)
const _neverNotType: number[] = zeroValues.filter(isNotZero)

test.run()
