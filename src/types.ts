export type Everything = {} | null | undefined

export type FilterFn<InputType, ReturnType extends InputType = InputType> =
	| ((value: InputType, i?: number, array?: InputType[]) => boolean)
	| ((value: InputType, i?: number, array?: InputType[]) => value is ReturnType)


export type InferType<OriginalType> = OriginalType extends infer InferredType ? InferredType : OriginalType
