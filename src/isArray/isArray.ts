
export type TypeGuard<Guard, Type, ReturnType extends Type = Type> = Type extends Guard ? Type extends ReturnType ? Type : ReturnType : never

export const isArray = <T>(value: T): value is TypeGuard<Array<unknown>, T> => Array.isArray(value)

type NotEmptyArray<T> = [T, ...T[]]

export const isArrayNotEmpty = <T>(array: T[]): array is NotEmptyArray<T> => !!array?.length

export const isArrayEmpty = <T>(array: T[]): array is [] => !array?.length
