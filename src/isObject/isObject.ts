import { TypeGuard } from '../types'

export const isObject = <T>(value: T): value is TypeGuard<object, T> => value && typeof value === 'object'

export const isPrimitiveObject = <T>(value: T): value is TypeGuard<object, T> =>
	isObject(value) && (<object>(<unknown>value)).constructor === Object
