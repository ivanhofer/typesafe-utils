import { InferType } from '../types'

type Filter<ReturnType, InputType> = InputType extends ReturnType
	? InputType
	: InputType extends unknown
	? ReturnType
	: never

export const createFilter = <ReturnType extends InputType, InputType = ReturnType>(
	filterFn: (item: InferType<InputType>) => boolean,
): InferType<(item: InferType<InputType>) => item is Filter<InferType<ReturnType>, InferType<InputType>>> =>
	filterFn as unknown as any
