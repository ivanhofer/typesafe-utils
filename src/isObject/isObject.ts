type IsObject<T> = T extends object ? T : never

export const isObject = <T>(value: T): value is IsObject<T> =>
	typeof value === 'object' && value && (<object>(<unknown>value)).constructor === Object
