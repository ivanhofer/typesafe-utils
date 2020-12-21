type FalsyType = false | '' | 0 | null | undefined

export type Truthy<T> = T extends FalsyType ? never : T

export type Falsy<T> = T extends FalsyType ? T : never
