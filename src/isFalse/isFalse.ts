import { TypeGuard, TypeGuardInverted } from '../types'

export const isFalse = <T>(value: T): value is TypeGuard<false, T> => <unknown>value === false

export const isNotFalse = <T>(value: T): value is TypeGuardInverted<false, T> => <unknown>value !== false

export const isPropertyFalse = <T, K extends keyof T = keyof T>(property: K) => (value: T): boolean =>
	<unknown>value[property] === false

export const isPropertyNotFalse = <T, K extends keyof T = keyof T>(property: K) => (value: T): boolean =>
	<unknown>value[property] !== false

export const arePropertiesFalse = <T, K extends keyof T = keyof T>(...properties: K[]) => (value: T): boolean =>
	properties.every((property) => <unknown>value[property] === false)

export const arePropertiesNotFalse = <T, K extends keyof T = keyof T>(...properties: K[]) => (value: T): boolean =>
	properties.every((property) => <unknown>value[property] !== false)
