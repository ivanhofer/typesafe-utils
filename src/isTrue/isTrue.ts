type True<T> = T extends true ? T : never

type NotTrue<T> = T extends true ? never : T

export const isTrue = <T>(value: T): value is True<T> => <unknown>value === true

export const isNotTrue = <T>(value: T): value is NotTrue<T> => <unknown>value !== true

export const isPropertyTrue = <T, K extends keyof T = keyof T>(property: K) => (value: T): boolean =>
	<unknown>value[property] === true

export const isPropertyNotTrue = <T, K extends keyof T = keyof T>(property: K) => (value: T): boolean =>
	<unknown>value[property] !== true

export const arePropertiesTrue = <T, K extends keyof T = keyof T>(...properties: K[]) => (value: T): boolean =>
	properties.every((property) => <unknown>value[property] === true)

export const arePropertiesNotTrue = <T, K extends keyof T = keyof T>(...properties: K[]) => (value: T): boolean =>
	properties.every((property) => <unknown>value[property] !== true)
