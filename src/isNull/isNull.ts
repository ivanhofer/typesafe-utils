import { TypeGuard, TypeGuardInverted } from '../types'

export const isNull = <T>(value: T): value is TypeGuard<null, T> => value === null

export const isNotNull = <T>(value: T): value is TypeGuardInverted<null, T> => value !== null

export const isPropertyNull = <T, K extends keyof T = keyof T>(property: K) => (value: T): boolean =>
	value[property] === null

export const isPropertyNotNull = <T, K extends keyof T = keyof T>(property: K) => (value: T): boolean =>
	value[property] !== null

export const arePropertiesNull = <T, K extends keyof T = keyof T>(...properties: K[]) => (value: T): boolean =>
	properties.every((property) => value[property] === null)

export const arePropertiesNotNull = <T, K extends keyof T = keyof T>(...properties: K[]) => (value: T): boolean =>
	properties.every((property) => value[property] !== null)
