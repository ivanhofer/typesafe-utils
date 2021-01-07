type IsArray<T> = T extends Array<unknown> ? T : never

export const isArray = <T>(value: T): value is IsArray<T> => Array.isArray(value)

type NotEmptyArray<T> = [T, ...T[]]

export const isArrayNotEmpty = <T>(array: T[]): array is NotEmptyArray<T> => !!array?.length

export const isArrayEmpty = <T>(array: T[]): array is [] => !array?.length
