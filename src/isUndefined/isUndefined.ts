import { Undefined, NotUndefined } from '../types'

export const isUndefined = <T>(value: T): value is Undefined<T> => value === undefined

export const isNotUndefined = <T>(value: T): value is NotUndefined<T> => value !== undefined

export const isPropertyUndefined = <T, K extends keyof T>(property: K) => (value: T): boolean =>
	value[property] === undefined

export const isPropertyNotUndefined = <T, K extends keyof T>(property: K) => (value: T): boolean =>
	value[property] !== undefined
