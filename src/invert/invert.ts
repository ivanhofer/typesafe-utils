type FilterFn<T, U extends T = T> =
	| ((value: T, i: number, all: T[]) => boolean)
	| ((value: T, i: number, all: T[]) => value is U)

export const invert = <T, U extends T = T, F extends FilterFn<T, U> = FilterFn<T, U>>(filterFn: F) => (
	value: T,
	i: number,
	all: T[],
): value is U => !filterFn(value, i, all)
