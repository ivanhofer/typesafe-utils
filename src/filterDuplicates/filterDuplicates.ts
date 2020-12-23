export const filterDuplcates = <T>(value: T, i: number, a: T[]): boolean => a.findIndex((t) => t === value) === i

export const filterDuplcatesByKey = <T, K extends keyof T>(key: K) => (value: T, i: number, a: T[]): boolean =>
	a.findIndex((t) => t[key] === value[key]) === i
