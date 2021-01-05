type IsArray<T> = T extends Array<unknown> ? T : never

export const isArray = <T>(value: T): value is IsArray<T> => Array.isArray(value)
