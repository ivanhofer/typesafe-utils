import { TypeGuard, TypeGuardWithReturnType, TypeGuardInverted } from '../types'

export const isZero = <T>(value: T | 0): value is TypeGuardWithReturnType<number, T, 0> => <unknown>value === 0

export const isNotZero = <T>(value: T): value is TypeGuardInverted<0, T> => <unknown>value !== 0

export const isPropertyZero = <T, K extends keyof T = keyof T>(property: K) => (value: T): boolean =>
	<unknown>value[property] === 0

export const isPropertyNotZero = <T, K extends keyof T = keyof T>(property: K) => (value: T): boolean =>
	<unknown>value[property] !== 0

export const arePropertiesZero = <T, K extends keyof T = keyof T>(...properties: K[]) => (value: T): boolean =>
	properties.every((property) => <unknown>value[property] === 0)

export const arePropertiesNotZero = <T, K extends keyof T = keyof T>(...properties: K[]) => (value: T): boolean =>
	properties.every((property) => <unknown>value[property] !== 0)
