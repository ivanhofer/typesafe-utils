const sortASC = <T>(a: T, b: T) => {
	if (a === b) return 0
	if (a == null) return -1
	if (b == null) return 1
	return a < b ? -1 : 1
}

// number -------------------------------------------------------------------------------------------------------------

export const sortNumberASC = (a?: number, b?: number): number => sortASC(a, b)

export const sortNumberPropertyASC = <T extends { [key in K]?: number }, K extends keyof T>(property: K) => (
	{ [property]: a }: T,
	{ [property]: b }: T,
): number => sortNumberASC(a, b)

export const sortNumberDESC = (a?: number, b?: number): number => sortNumberASC(b, a)

export const sortNumberPropertyDESC = <T extends { [key in K]?: number }, K extends keyof T>(property: K) => (
	{ [property]: a }: T,
	{ [property]: b }: T,
): number => sortNumberDESC(a, b)

// string -------------------------------------------------------------------------------------------------------------

export const sortStringASC = (a?: string, b?: string): number => sortASC(a?.toLowerCase(), b?.toLowerCase())

export const sortStringPropertyASC = <T extends { [key in K]?: string }, K extends keyof T>(property: K) => (
	{ [property]: a }: T,
	{ [property]: b }: T,
): number => sortStringASC(a, b)

export const sortStringDESC = (a?: string, b?: string): number => sortStringASC(b, a)

export const sortStringPropertyDESC = <T extends { [key in K]?: string }, K extends keyof T>(property: K) => (
	{ [property]: a }: T,
	{ [property]: b }: T,
): number => sortStringDESC(a, b)

// date ---------------------------------------------------------------------------------------------------------------

export const sortDateASC = (a?: Date, b?: Date): number => sortASC(a?.getTime(), b?.getTime())

export const sortDatePropertyASC = <T extends { [key in K]?: Date }, K extends keyof T>(property: K) => (
	{ [property]: a }: T,
	{ [property]: b }: T,
): number => sortASC(a?.getTime(), b?.getTime())

export const sortDateDESC = (a?: Date, b?: Date): number => sortDateASC(b, a)

export const sortDatePropertyDESC = <T extends { [key in K]?: Date }, K extends keyof T>(property: K) => (
	{ [property]: a }: T,
	{ [property]: b }: T,
): number => sortDateDESC(a, b)
