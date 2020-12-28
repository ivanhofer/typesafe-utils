type IsObject<T> = T extends object ? T : never

export const isObject = <T>(value: T): value is IsObject<T> => value && typeof value === 'object'

export const isPrimitiveObject = <T>(value: T): value is IsObject<T> =>
	isObject(value) && (<object>(<unknown>value)).constructor === Object
