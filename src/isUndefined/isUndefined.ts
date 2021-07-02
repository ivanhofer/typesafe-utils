import { TypeGuard, TypeGuardInverted } from '../types'

export const isUndefined = <T>(value: T): value is TypeGuard<undefined, T> => value === undefined

export const isNotUndefined = <T>(value: T): value is TypeGuardInverted<undefined, T> => value !== undefined

export const isPropertyUndefined = <T, K extends keyof T = keyof T>(property: K) => (value: T): boolean =>
	value[property] === undefined

export const isPropertyNotUndefined = <T, K extends keyof T = keyof T>(property: K) => (value: T): boolean =>
	value[property] !== undefined

export const arePropertiesUndefined = <T, K extends keyof T = keyof T>(...properties: K[]) => (value: T): boolean =>
	properties.every((property) => value[property] === undefined)

export const arePropertiesNotUndefined = <T, K extends keyof T = keyof T>(...properties: K[]) => (value: T): boolean =>
	properties.every((property) => value[property] !== undefined)
