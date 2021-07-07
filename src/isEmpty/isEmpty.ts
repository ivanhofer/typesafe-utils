import { TypeGuard, TypeGuardWithReturnType, TypeGuardInverted } from '../types'

export const isEmpty = <T>(value: T | ''): value is TypeGuardWithReturnType<string, T, ''> => <unknown>value === ''

export const isNotEmpty = <T>(value: T): value is TypeGuardInverted<string, T> => <unknown>value !== ''

export const isPropertyEmpty = <T, K extends keyof T = keyof T>(property: K) => (value: T): boolean =>
	<unknown>value[property] === ''

export const isPropertyNotEmpty = <T, K extends keyof T = keyof T>(property: K) => (value: T): boolean =>
	<unknown>value[property] !== ''

export const arePropertiesEmpty = <T, K extends keyof T = keyof T>(...properties: K[]) => (value: T): boolean =>
	properties.every((property) => <unknown>value[property] === '')

export const arePropertiesNotEmpty = <T, K extends keyof T = keyof T>(...properties: K[]) => (value: T): boolean =>
	properties.every((property) => <unknown>value[property] !== '')
