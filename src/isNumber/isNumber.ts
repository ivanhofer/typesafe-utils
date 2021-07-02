import { TypeGuard } from '../types'

export const isNumber = <T>(value: T): value is TypeGuard<number, T> => typeof value === 'number'
