type IsBoolean<T> = T extends boolean ? T : never

export const isBoolean = <T>(value: T): value is IsBoolean<T> => typeof value === 'boolean'
