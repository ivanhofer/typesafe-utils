import { TypeGuard } from '../types'

export const isBoolean = <T>(value: T): value is TypeGuard<boolean, T> => typeof value === 'boolean'
