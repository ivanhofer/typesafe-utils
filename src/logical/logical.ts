type FilterFn<T, U extends T = T> =
	| ((value: T, i: number, all: T[]) => boolean)
	| ((value: T, i: number, all: T[]) => value is U)

export const and = <T, U extends T = T>(...filters: FilterFn<any, any>[]) => (
	value: T,
	index: number,
	all: T[],
): value is U => filters.reduce((prev, filter) => prev && (filter as any)(value, index, all), true)

export const or = <T, U extends T = T>(...filters: FilterFn<any, any>[]) => (
	value: T,
	index: number,
	all: T[],
): value is U => filters.reduce((prev, filter) => prev || (filter as any)(value, index, all), false)

export const not = <T, U extends T = T, F extends FilterFn<T, U> = FilterFn<T, U>>(filterFn: F) => (
	value: T,
	i: number,
	all: T[],
): value is U => !filterFn(value, i, all)
