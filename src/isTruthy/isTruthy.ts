import { Falsy, Truthy } from '../types'

export const isTruthy = <T>(value: T): value is Truthy<T> => !!value

export const isFalsy = <T>(value: T): value is Falsy<T> => !value
