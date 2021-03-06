type False<T> = T extends false ? T : never

type NotFalse<T> = T extends false ? never : T

export const isFalse = <T>(value: T): value is False<T> => <unknown>value === false

export const isNotFalse = <T>(value: T): value is NotFalse<T> => <unknown>value !== false

export const isPropertyFalse = <T, K extends keyof T = keyof T>(property: K) => (value: T): boolean =>
	<unknown>value[property] === false

export const isPropertyNotFalse = <T, K extends keyof T = keyof T>(property: K) => (value: T): boolean =>
	<unknown>value[property] !== false

export const arePropertiesFalse = <T, K extends keyof T = keyof T>(...properties: K[]) => (value: T): boolean =>
	properties.every((property) => <unknown>value[property] === false)

export const arePropertiesNotFalse = <T, K extends keyof T = keyof T>(...properties: K[]) => (value: T): boolean =>
	properties.every((property) => <unknown>value[property] !== false)
