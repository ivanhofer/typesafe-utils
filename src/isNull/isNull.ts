import { Null, NotNull } from '../types'

export const isNull = <T>(value: T): value is Null<T> => value === null

export const isNotNull = <T>(value: T): value is NotNull<T> => value !== null

export const isPropertyNull = <T, K extends keyof T>(property: K) => (value: T): boolean => value[property] === null

export const isPropertyNotNull = <T, K extends keyof T>(property: K) => (value: T): boolean => value[property] !== null
