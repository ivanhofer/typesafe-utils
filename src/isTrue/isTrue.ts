import { TypeGuard, TypeGuardInverted } from '../types'

export const isTrue = <T>(value: T): value is TypeGuard<true, T> => <unknown>value === true

export const isNotTrue = <T>(value: T): value is TypeGuardInverted<true, T> => <unknown>value !== true

export const isPropertyTrue = <T, K extends keyof T = keyof T>(property: K) => (value: T): boolean =>
	<unknown>value[property] === true

export const isPropertyNotTrue = <T, K extends keyof T = keyof T>(property: K) => (value: T): boolean =>
	<unknown>value[property] !== true

export const arePropertiesTrue = <T, K extends keyof T = keyof T>(...properties: K[]) => (value: T): boolean =>
	properties.every((property) => <unknown>value[property] === true)

export const arePropertiesNotTrue = <T, K extends keyof T = keyof T>(...properties: K[]) => (value: T): boolean =>
	properties.every((property) => <unknown>value[property] !== true)
