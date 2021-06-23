export const pick = <T, K extends keyof T = keyof T>(property: K) => (value: T): T[K] =>
	value[property]