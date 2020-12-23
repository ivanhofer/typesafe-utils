import { Null, NotNull } from '../types'

export const isNull = <T>(value: T): value is Null<T> => value === null

export const isNotNull = <T>(value: T): value is NotNull<T> => value !== null
