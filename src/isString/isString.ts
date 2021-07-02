import { TypeGuard } from '../types'

export const isString = <T>(value: T): value is TypeGuard<string, T> => typeof value === 'string'
