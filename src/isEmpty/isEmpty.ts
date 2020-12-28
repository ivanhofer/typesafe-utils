type Empty<T> = T extends string ? '' : never

type NotEmpty<T> = T extends string ? never : T

export const isEmpty = <T>(value: T | ''): value is Empty<T> => <unknown>value === ''

export const isNotEmpty = <T>(value: T): value is NotEmpty<T> => <unknown>value !== ''

export const isPropertyEmpty = <T, K extends keyof T>(property: K) => (value: T): boolean =>
	<unknown>value[property] === ''

export const isPropertyNotEmpty = <T, K extends keyof T>(property: K) => (value: T): boolean =>
	<unknown>value[property] !== ''
