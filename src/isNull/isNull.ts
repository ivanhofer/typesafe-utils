type Null<T> = T extends null ? T : never

type NotNull<T> = T extends null ? never : T

export const isNull = <T>(value: T): value is Null<T> => value === null

export const isNotNull = <T>(value: T): value is NotNull<T> => value !== null

export const isPropertyNull = <T, K extends keyof T = keyof T>(property: K) => (value: T): boolean =>
	value[property] === null

export const isPropertyNotNull = <T, K extends keyof T = keyof T>(property: K) => (value: T): boolean =>
	value[property] !== null

export const arePropertiesNull = <T, K extends keyof T = keyof T>(...properties: K[]) => (value: T): boolean =>
	properties.every((property) => value[property] === null)

export const arePropertiesNotNull = <T, K extends keyof T = keyof T>(...properties: K[]) => (value: T): boolean =>
	properties.every((property) => value[property] !== null)
