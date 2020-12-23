import { suite } from 'uvu'
import * as assert from 'uvu/assert'
import { Everything } from '../types'

import { isEmpty, isNotEmpty } from './isEmpty'

const test = suite('empty')

const emptyValues = ['']
const notEmptyValues = [-Infinity, -1, 1, Infinity, 'test', true, [], {}, undefined, null, 0, false]

// isEmpty -----------------------------------------------------------------------------------------------------

emptyValues.forEach((value) => test(`isEmpty ${value}`, () => assert.ok(isEmpty(value))))
notEmptyValues.forEach((value) => test(`! isEmpty ${value}`, () => assert.not(isEmpty(value))))

const _emptyType: ''[] = [...emptyValues, notEmptyValues].filter(isEmpty)
const _neverType: never[] = notEmptyValues.filter(isEmpty)

// isNotEmpty -----------------------------------------------------------------------------------------------------

notEmptyValues.forEach((value) => test(`isNotEmpty ${value}`, () => assert.ok(isNotEmpty(value))))
emptyValues.forEach((value) => test(`! isNotEmpty ${value}`, () => assert.not(isNotEmpty(value))))

const _allNotType: Exclude<Everything, ''>[] = [...emptyValues, ...notEmptyValues].filter(isNotEmpty)
const _neverNotType: never[] = emptyValues.filter(isNotEmpty)

test.run()
