import { Zero, NotZero } from '../types'

export const isZero = <T>(value: T | 0): value is Zero<T> => <unknown>value === 0

export const isNotZero = <T>(value: T): value is NotZero<T> => <unknown>value !== 0
