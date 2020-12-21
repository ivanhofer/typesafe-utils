type ObjectEntriesType<T> = [keyof T, T[keyof T]][]

export const deepClone = <T>(toClone: T): T => {
	if (!toClone || typeof toClone !== 'object') {
		return toClone
	}

	if (Array.isArray(toClone)) {
		return ([...((toClone as unknown) as T[])].map(deepClone) as unknown) as T
	}

	return (<ObjectEntriesType<T>>Object.entries(toClone)).reduce(
		(obj, [key, value]) => ({ ...obj, [key]: deepClone(value) }),
		{} as T,
	)
}
