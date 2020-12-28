import { FilterFn } from '../types'

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
