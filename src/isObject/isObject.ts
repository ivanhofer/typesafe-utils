type IsObject<T> = T extends object ? T : never

export const isObject = <T>(value: T): value is IsObject<T> =>
	value && typeof value === 'object' && (<object>(<unknown>value)).constructor === Object
