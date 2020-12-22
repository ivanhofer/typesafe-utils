import type {
	Empty,
	False,
	Falsy,
	NotEmpty,
	NotFalse,
	NotNull,
	NotTrue,
	NotUndefined,
	NotZero,
	Null,
	True,
	Truthy,
	Undefined,
	Zero,
} from '../types'

export const isTruthy = <T>(value: T): value is Truthy<T> => !!value

export const isFalsy = <T>(value: T): value is Falsy<T> => !value

export const isUndefined = <T>(value: T): value is Undefined<T> => value === undefined

export const isNotUndefined = <T>(value: T): value is NotUndefined<T> => value !== undefined

export const isNull = <T>(value: T): value is Null<T> => value === null

export const isNotNull = <T>(value: T): value is NotNull<T> => value !== null

export const isTrue = <T>(value: T): value is True<T> => <unknown>value === true

export const isNotTrue = <T>(value: T): value is NotTrue<T> => <unknown>value !== true

export const isFalse = <T>(value: T): value is False<T> => <unknown>value === false

export const isNotFalse = <T>(value: T): value is NotFalse<T> => <unknown>value !== false

export const isZero = <T>(value: T | 0): value is Zero<T> => <unknown>value === 0

export const isNotZero = <T>(value: T): value is NotZero<T> => <unknown>value !== 0

export const isEmpty = <T>(value: T | ''): value is Empty<T> => <unknown>value === ''

export const isNotEmpty = <T>(value: T): value is NotEmpty<T> => <unknown>value !== ''
