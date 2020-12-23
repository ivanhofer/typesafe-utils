import { True, NotTrue } from '../types'

export const isTrue = <T>(value: T): value is True<T> => <unknown>value === true

export const isNotTrue = <T>(value: T): value is NotTrue<T> => <unknown>value !== true

export const isPropertyTrue = <T, K extends keyof T>(property: K) => (value: T): boolean =>
	<unknown>value[property] === true

export const isPropertyNotTrue = <T, K extends keyof T>(property: K) => (value: T): boolean =>
	<unknown>value[property] !== true
