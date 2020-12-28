type IsString<T> = T extends string ? T : never

export const isString = <T>(value: T): value is IsString<T> => typeof value === 'string'
