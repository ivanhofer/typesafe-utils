import type { FilterFn } from '../types'

export const and =
	<U extends T, T>(...filters: FilterFn<any, any>[]) =>
		(value: T, index?: number, array?: T[]): value is U =>
			filters.reduce((prev, filter) => prev && (filter as any)(value, index, array), true)

export const or =
	<T, U extends T = T>(...filters: FilterFn<any, any>[]) =>
		(value: T, index?: number, array?: T[]): value is U =>
			filters.reduce((prev, filter) => prev || (filter as any)(value, index, array), false)

export const not =
	<U extends T, T = U & any, F extends FilterFn<T, U> = FilterFn<T, U>>(filterFn: F) =>
		(value: T, i?: number, array?: T[]): value is U =>
			!filterFn(value, i, array)
