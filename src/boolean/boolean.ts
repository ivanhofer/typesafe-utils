import type { Falsy, Truthy } from '../types'

export const isTruthy = <T>(value: T): value is Truthy<T> => !!value

export const isFalsy = <T>(value: T): value is Falsy<T> => !value

export const isUndefined = <T>(value: T): value is Falsy<T> => value === undefined

export const isNotUndefined = <T>(value: T): value is Truthy<T> => value !== undefined

export const isNull = <T>(value: T): value is Falsy<T> => value === null

export const isNotNull = <T>(value: T): value is Truthy<T> => value !== null

export const isTrue = <T>(value: T): value is Truthy<T> => <unknown>value === true

export const isNotTrue = <T>(value: T): value is Falsy<T> => <unknown>value !== true

export const isFalse = <T>(value: T): value is Falsy<T> => <unknown>value === false

export const isNotFalse = <T>(value: T): value is Truthy<T> => <unknown>value !== false

export const isZero = <T>(value: T): value is Falsy<T> => <unknown>value === 0

export const isNotZero = <T>(value: T): value is Truthy<T> => <unknown>value !== 0

export const isEmpty = <T>(value: T): value is Falsy<T> => <unknown>value === ''

export const isNotEmpty = <T>(value: T): value is Truthy<T> => <unknown>value !== ''
