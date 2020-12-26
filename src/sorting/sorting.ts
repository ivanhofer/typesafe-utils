const sortASC = <T>(a: T, b: T) => {
	if (a === b) return 0
	if (a == null) return -1
	if (b == null) return 1
	return a < b ? -1 : 1
}

// number -------------------------------------------------------------------------------------------------------------

type NumberType = number | undefined | null

export const sortNumberASC = (a?: NumberType, b?: NumberType): number => sortASC(a, b)

export const sortNumberPropertyASC = <T extends { [key in K]?: NumberType }, K extends keyof T>(property: K) => (
	{ [property]: a }: T,
	{ [property]: b }: T,
): number => sortNumberASC(a, b)

export const sortNumberDESC = (a?: NumberType, b?: NumberType): number => sortNumberASC(b, a)

export const sortNumberPropertyDESC = <T extends { [key in K]?: NumberType }, K extends keyof T>(property: K) => (
	{ [property]: a }: T,
	{ [property]: b }: T,
): number => sortNumberDESC(a, b)

// string -------------------------------------------------------------------------------------------------------------

type StringType = string | undefined | null

export const sortStringASC = (a?: StringType, b?: StringType): number => sortASC(a?.toLowerCase(), b?.toLowerCase())

export const sortStringPropertyASC = <T extends { [key in K]?: StringType }, K extends keyof T>(property: K) => (
	{ [property]: a }: T,
	{ [property]: b }: T,
): number => sortStringASC(a, b)

export const sortStringDESC = (a?: StringType, b?: StringType): number => sortStringASC(b, a)

export const sortStringPropertyDESC = <T extends { [key in K]?: StringType }, K extends keyof T>(property: K) => (
	{ [property]: a }: T,
	{ [property]: b }: T,
): number => sortStringDESC(a, b)

// date ---------------------------------------------------------------------------------------------------------------

type DateType = Date | undefined | null

export const sortDateASC = (a?: DateType, b?: DateType): number => sortASC(a?.getTime(), b?.getTime())

export const sortDatePropertyASC = <T extends { [key in K]?: DateType }, K extends keyof T>(property: K) => (
	{ [property]: a }: T,
	{ [property]: b }: T,
): number => sortASC(a?.getTime(), b?.getTime())

export const sortDateDESC = (a?: DateType, b?: DateType): number => sortDateASC(b, a)

export const sortDatePropertyDESC = <T extends { [key in K]?: DateType }, K extends keyof T>(property: K) => (
	{ [property]: a }: T,
	{ [property]: b }: T,
): number => sortDateDESC(a, b)
