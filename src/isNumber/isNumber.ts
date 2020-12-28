type IsNumber<T> = T extends number ? T : never

export const isNumber = <T>(value: T): value is IsNumber<T> => typeof value === 'number'
