type Is<T, U> = U extends T ? U : never

export const is = <T, U>(item: T) => (value: U): value is Is<T, U> => <unknown>value === item

export const isNot = <T, U>(item: T) => (value: U): value is U => <unknown>value !== item

export const isProperty = <T, K extends keyof T = keyof T>(property: K, item: T[K]) => (value: T): boolean =>
	value[property] === item

export const isPropertyNot = <T, K extends keyof T = keyof T>(property: K, item: T[K]) => (value: T): boolean =>
	value[property] !== item
