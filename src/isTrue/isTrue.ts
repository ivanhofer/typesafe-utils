import { True, NotTrue } from '../types'

export const isTrue = <T>(value: T): value is True<T> => <unknown>value === true

export const isNotTrue = <T>(value: T): value is NotTrue<T> => <unknown>value !== true
