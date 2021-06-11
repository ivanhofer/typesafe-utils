type Filter<R, I> = I extends R ? R : never

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const createFilter = <R extends I, I = R & any>(
	filterFn: (item: I, index?: number, array?: I[]) => boolean,
): ((item: I, index?: number, array?: I[]) => item is Filter<R, I>) =>
	filterFn as (item: I, index?: number, array?: I[]) => item is Filter<R, I>
