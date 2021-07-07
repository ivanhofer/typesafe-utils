export type Everything = {} | null | undefined

export type FalsyType = false | '' | 0 | null | undefined

export type TypeGuard<Guard, Type> =
	Type extends Guard
	? Type
	: never

export type TypeGuardWithReturnType<Guard, Type, ReturnType = Type> =
	Type extends Guard
	? Type extends ReturnType
	? Type
	: ReturnType
	: never

export type TypeGuardInverted<Guard, Type> =
	Type extends Guard
	? never
	: Type

export type TypeGuardInvertedWithReturnType<Guard, Type, ReturnType = Type> =
	Type extends Guard
	? never
	: Type extends ReturnType
	? Type
	: ReturnType

export type FilterFn<InputType, ReturnType extends InputType = InputType> =
	| ((value: InputType, i?: number, array?: InputType[]) => boolean)
	| ((value: InputType, i?: number, array?: InputType[]) => value is ReturnType)

export type InferType<OriginalType> = OriginalType extends infer InferredType ? InferredType : OriginalType
