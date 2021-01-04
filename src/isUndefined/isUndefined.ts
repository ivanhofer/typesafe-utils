type Undefined<T> = T extends undefined ? T : never

type NotUndefined<T> = T extends undefined ? never : T

export const isUndefined = <T>(value: T): value is Undefined<T> => value === undefined

export const isNotUndefined = <T>(value: T): value is NotUndefined<T> => value !== undefined

export const isPropertyUndefined = <T, K extends keyof T = keyof T>(property: K) => (value: T): boolean =>
	value[property] === undefined

export const isPropertyNotUndefined = <T, K extends keyof T = keyof T>(property: K) => (value: T): boolean =>
	value[property] !== undefined

export const arePropertiesUndefined = <T, K extends keyof T = keyof T>(...properties: K[]) => (value: T): boolean =>
	properties.every((property) => value[property] === undefined)

export const arePropertiesNotUndefined = <T, K extends keyof T = keyof T>(...properties: K[]) => (value: T): boolean =>
	properties.every((property) => value[property] !== undefined)
