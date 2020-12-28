type FalsyType = false | '' | 0 | null | undefined

type Truthy<T> = T extends FalsyType ? never : T

type Falsy<T> = T extends FalsyType ? T : never

export const isTruthy = <T>(value: T): value is Truthy<T> => !!value

export const isFalsy = <T>(value: T): value is Falsy<T> => !value

export const isPropertyTruthy = <T, K extends keyof T>(property: K) => (value: T): boolean => !!value[property]

export const isPropertyFalsy = <T, K extends keyof T>(property: K) => (value: T): boolean => !value[property]
