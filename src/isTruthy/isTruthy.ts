import { FalsyType } from '../types'

export type Truthy<T> = T extends FalsyType ? never : T

export type Falsy<T> = T extends FalsyType ? T : never

export const isTruthy = <T>(value: T): value is Truthy<T> => !!value

export const isFalsy = <T>(value: T): value is Falsy<T> => !value

export const isPropertyTruthy = <T, K extends keyof T = keyof T>(property: K) => (value: T): boolean =>
	!!value[property]

export const isPropertyFalsy = <T, K extends keyof T = keyof T>(property: K) => (value: T): boolean => !value[property]

export const arePropertiesTruthy = <T, K extends keyof T = keyof T>(...properties: K[]) => (value: T): boolean =>
	properties.every((property) => !!value[property])

export const arePropertiesFalsy = <T, K extends keyof T = keyof T>(...properties: K[]) => (value: T): boolean =>
	properties.every((property) => !value[property])
