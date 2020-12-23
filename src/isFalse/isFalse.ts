import { False, NotFalse } from '../types'

export const isFalse = <T>(value: T): value is False<T> => <unknown>value === false

export const isNotFalse = <T>(value: T): value is NotFalse<T> => <unknown>value !== false

export const isPropertyFalse = <T, K extends keyof T>(property: K) => (value: T): boolean =>
	<unknown>value[property] === false

export const isPropertyNotFalse = <T, K extends keyof T>(property: K) => (value: T): boolean =>
	<unknown>value[property] !== false
