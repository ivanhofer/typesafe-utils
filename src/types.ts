export type Everything = {} | null | undefined

type FalsyType = false | '' | 0 | null | undefined

export type Is<T, U> = U extends T ? U : never

export type Truthy<T> = T extends FalsyType ? never : T

export type Falsy<T> = T extends FalsyType ? T : never

export type Undefined<T> = T extends undefined ? T : never

export type NotUndefined<T> = T extends undefined ? never : T

export type Null<T> = T extends null ? T : never

export type NotNull<T> = T extends null ? never : T

export type True<T> = T extends true ? T : never

export type NotTrue<T> = T extends true ? never : T

export type False<T> = T extends false ? T : never

export type NotFalse<T> = T extends false ? never : T

export type Zero<T> = T extends number ? 0 : never

export type NotZero<T> = T extends 0 ? never : T

export type Empty<T> = T extends string ? '' : never

export type NotEmpty<T> = T extends string ? never : T
