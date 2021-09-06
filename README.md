A collection of a few small lightweight typesafe utilities.

## Motivation

Sometimes you will encounter situations were the types will **not** match what you expect from a function. This means you need to explicitly specify a type by yourself to gain the full power of TypeScript.

In this collection you will find some useful functions that are fully typed.

## Install

```
$ npm install --save-dev typesafe-utils
```

## Overview
 - [filter functions](#filter&#32;functions)
    - is
      - [is](#is)
      - [isNot](#isNot)
      - [isProperty](#isProperty)
      - [isPropertyNot](#isPropertyNot)
    - isTruthy
      - [isTruthy](#isTruthy)
      - [isFalsy](#isFalsy)
      - [isPropertyTruthy](#isPropertyTruthy)
      - [isPropertyFalsy](#isPropertyFalsy)
      - [arePropertiesTruthy](#arePropertiesTruthy)
      - [arePropertiesFalsy](#arePropertiesFalsy)
    - isUndefined
      - [isUndefined](#isUndefined)
      - [isNotUndefined](#isNotUndefined)
      - [isPropertyUndefined](#isPropertyUndefined)
      - [isPropertyNotUndefined](#isPropertyNotUndefined)
      - [arePropertiesUndefined](#arePropertiesUndefined)
      - [arePropertiesNotUndefined](#arePropertiesNotUndefined)
    - isNull
      - [isNull](#isNull)
      - [isNotNull](#isNotNull)
      - [isPropertyNull](#isPropertyNull)
      - [isPropertyNotNull](#isPropertyNotNull)
      - [arePropertiesNull](#arePropertiesNull)
      - [arePropertiesNotNull](#arePropertiesNotNull)
    - boolean
      - [isBoolean](#isBoolean)
      - isTrue
        - [isTrue](#isTrue)
        - [isNotTrue](#isNotTrue)*
        - [isPropertyTrue](#isPropertyTrue)
        - [isPropertyNotTrue](#isPropertyNotTrue)*
        - [arePropertiesTrue](#arePropertiesTrue)
        - [arePropertiesNotTrue](#arePropertiesNotTrue)*
      - isFalse
        - [isFalse](#isFalse)
        - [isNotFalse](#isNotFalse)*
        - [isPropertyFalse](#isPropertyFalse)
        - [isPropertyNotFalse](#isPropertyNotFalse)*
        - [arePropertiesFalse](#arePropertiesFalse)
        - [arePropertiesNotFalse](#arePropertiesNotFalse)*
    - number
      - [isNumber](#isNumber)
      - isZero
        - [isZero](#isZero)
        - [isNotZero](#isNotZero)*
        - [isPropertyZero](#isPropertyZero)
        - [isPropertyNotZero](#isPropertyNotZero)*
        - [arePropertiesZero](#arePropertiesZero)
        - [arePropertiesNotZero](#arePropertiesNotZero)*
    - string
      - [isString](#isString)
      - isEmpty
        - [isEmpty](#isEmpty)
        - [isNotEmpty](#isNotEmpty)
        - [isPropertyEmpty](#isPropertyEmpty)
        - [isPropertyNotEmpty](#isPropertyNotEmpty)
        - [arePropertiesEmpty](#arePropertiesEmpty)
        - [arePropertiesNotEmpty](#arePropertiesNotEmpty)
    - array
      - [isArray](#isArray)
      - [isArrayNotEmpty](#isArrayNotEmpty)
      - [isArrayEmpty](#isArrayEmpty)
    - object
      - [isObject](#isObject)
      - [isPrimitiveObject](#isPrimitiveObject)
    - duplicates
      - [filterDuplicates](#filterDuplicates)
      - [filterDuplicatesByKey](#filterDuplicatesByKey)
    - logical operators
      - [and](#and)*
      - [or](#or)*
      - [not](#not)*
    - typeguards
      - [createFilter](#TypeGuardInverted)*

 - [sorting functions](#sorting&#32;functions)
    - number
      - [sortNumberASC](#sortNumberASC)
      - [sortNumberDESC](#sortNumberDESC)
      - [sortNumberPropertyASC](#sortNumberPropertyASC)
      - [sortNumberPropertyDESC](#sortNumberPropertyDESC)
    - string
      - [sortStringASC](#sortStringASC)
      - [sortStringDESC](#sortStringDESC)
      - [sortStringPropertyASC](#sortStringPropertyASC)
      - [sortStringPropertyDESC](#sortStringPropertyDESC)
    - date
      - [sortDateASC](#sortDateASC)
      - [sortDateDESC](#sortDateDESC)
      - [sortDatePropertyASC](#sortDatePropertyASC)
      - [sortDatePropertyDESC](#sortDatePropertyDESC)

 - [mapping functions](#mapping&#32;functions)
   - [pick](#pick)

 - [other](#other)
   - [deepClone](#deepClone)
   - [uniqueArray](#uniqueArray)

 - [types](#types)
   - [Truthy](#truthy)
   - [Falsy](#falsy)
   - [TypeGuard](#typeguard)
   - [TypeGuardWithReturnType](#typeguardwithreturntype)
   - [TypeGuardInverted](#typeguardinverted)
   - [TypeGuardInvertedWithReturnType](#typeguardinvertedwithreturntype)

| * not automatically 100% typesafe. It's better than nothing but to be 100% typesafe you need to pass generics yourself.

## filter functions

A bunch of utilities that return true or false. Useful for array filter functions.

> Motivation: When you filter an Array, the return type is **not** always what you expect. Typescript will tell you the result of a filter function is the exact type you pass to the filter function. But that is **not** always true. If you filter out falsy values, the return type should should **not** contain.

```TypeScript
// BASIC example --------------------------------------------------------------

const result = [true, false].filter(bool => !!bool)
// => result: boolean[] => [true]


import { isTruthy } from 'typesafe-utils'
const typesafeResult = [true, false].filter(isTruthy)
// => typesafeResult: true[] => [true]


// ADVANCED example -----------------------------------------------------------

const result = ['text', null, 'another text', undefined].filter(value => value !== '')
// => result: (string | null | undefined)[] => ['text', 'another text']


import { isNotEmpty } from 'typesafe-utils'
const typesafeResult = ['text', null, 'another text', undefined].filter(isNotEmpty)
// => typesafeResult: string[] => ['text', 'another text']
```

<!---------------------------------------------------------------------------->

### is

returns `true` iff value is equals to the property you pass to the function

#### Usage
```TypeScript
import { is } from 'typesafe-utils'

const result = [1, 15, 10, 43].filter(is(10))
// result: number[] => [10]
```

### isNot

returns `true` iff value is **not** equal to the property you pass to the function

#### Usage
```TypeScript
import { isNot } from 'typesafe-utils'

const result = ['text', 'forbidden', 'blabla'].filter(isNot('forbidden'))
// result: string[] => ['text', 'blabla']
```

### isProperty

returns `true` iff the attribute of the object equals the property you pass to the function

#### Usage
```TypeScript
import { isProperty } from 'typesafe-utils'

type Product = {
   id: number
}

const items: Product[] = [
   { id: 1 },
   { id: 3 }
]
const result = items.filter(isProperty('id', 3))
// result: Product[] => [{ id: 3 }]
```

### isPropertyNot

returns `true` iff the attribute of the object is **not** equal to the property you pass to the function

#### Usage
```TypeScript
import { isPropertyNot } from 'typesafe-utils'

type Product = {
   id: number
}

const items: Product[] = [
   { id: 156 },
   { id: 123 }
]
const result = items.filter(isPropertyNot('id', 123))
// result: Product[] => [{ id: 156 }]
```

<!---------------------------------------------------------------------------->

### isTruthy

returns `true` iff value is **not** `false | '' | 0 | null | undefined`

#### Usage
```TypeScript
import { isTruthy } from 'typesafe-utils'

const result = [true, false, undefined, null].filter(isTruthy)
// result: true[] => [true]
```

### isFalsy

returns `true` iff value is `false | '' | 0 | null | undefined`

#### Usage
```TypeScript
import { isFalsy } from 'typesafe-utils'

const result = [true, false, 'text', 123, null].filter(isFalsy)
// result: (false | null)[] => [false, null]
```

### isPropertyTruthy

returns `true` iff the attribute of the object is truthy

#### Usage
```TypeScript
import { isPropertyTruthy } from 'typesafe-utils'

type Product = {
   id: number
}

const items: Product[] = [
   { id: 1 },
   { id: null },
   { id: undefined }
]
const result = items.filter(isPropertyTruthy('id'))
// result: Product[] => [{ id: 1 }]
```

### isPropertyFalsy

returns `true` iff the attribute of the object is falsy

#### Usage
```TypeScript
import { isPropertyFalsy } from 'typesafe-utils'

type Product = {
   id: number
}

const items: Product[] = [
   { id: 5 },
   { id: null }
]
const result = items.filter(isPropertyFalsy('id'))
// result: Product[] => [{ id: null }]
```

### arePropertiesTruthy

returns `true` iff all attributes of the object are truthy

#### Usage
```TypeScript
import { arePropertiesTruthy } from 'typesafe-utils'

type Product = {
   id: number
   name: string
}

const items: Product[] = [ ... ]

const result = items.filter(arePropertiesTruthy('id', 'name'))
```

### arePropertiesFalsy

returns `true` iff all attributes of the object are falsy

#### Usage
```TypeScript
import { arePropertiesFalsy } from 'typesafe-utils'

type Product = {
   id: number
   name: string
}

const items: Product[] = [ ... ]

const result = items.filter(arePropertiesFalsy('id', 'name'))
```

<!---------------------------------------------------------------------------->

### isUndefined

returns `true` iff value is `undefined`

#### Usage
```TypeScript
import { isUndefined } from 'typesafe-utils'

const result = [undefined, null, true].filter(isUndefined)
// result: undefined[] => [undefined]
```

### isNotUndefined

returns `true` iff value is **not** `undefined`

#### Usage
```TypeScript
import { isNotUndefined } from 'typesafe-utils'

const result = [null, undefined].filter(isNotUndefined)
// result: null[] => [null]
```

### isPropertyUndefined

returns `true` iff the attribute of the object is `undefined`

#### Usage
```TypeScript
import { isPropertyUndefined } from 'typesafe-utils'

type Product = {
   id: number | undefined
}

const items: Product[] = [
   { id: 1 },
   { id: undefined }
]
const result = items.filter(isPropertyUndefined('id'))
// result: Product[] => [{ id: undefined }]
```

### isPropertyNotUndefined

returns `true` iff the attribute of the object is **not** `undefined`

#### Usage
```TypeScript
import { isPropertyNotUndefined } from 'typesafe-utils'

type Product = {
   id: number
}

const items: Product[] = [
   { id: 5 },
   { id: undefined }
]
const result = items.filter(isPropertyNotUndefined('id'))
// result: Product[] => [{ id: 5 }]
```

### arePropertiesUndefined

returns `true` iff all attributes of the object are `undefined`

#### Usage
```TypeScript
import { arePropertiesUndefined } from 'typesafe-utils'

type Product = {
   id: number
   name: string
}

const items: Product[] = [ ... ]

const result = items.filter(arePropertiesUndefined('id', 'name'))
```

### arePropertiesNotUndefined

returns `true` iff all attributes of the object are **not** `undefined`

#### Usage
```TypeScript
import { arePropertiesNotUndefined } from 'typesafe-utils'

type Product = {
   id: number
   name: string
}

const items: Product[] = [ ... ]

const result = items.filter(arePropertiesNotUndefined('id', 'name'))
```

<!---------------------------------------------------------------------------->

### isNull

returns `true` iff value is `null`

#### Usage
```TypeScript
import { isNull } from 'typesafe-utils'

const result = [null, undefined].filter(isNull)
// result: null[] => [null]
```

### isNotNull

returns `true` iff value is **not** `null`

#### Usage
```TypeScript
import { isNotNull } from 'typesafe-utils'

const result = [false, null].filter(isNotNull)
// result: boolean[] => [false]
```

### isPropertyNull

returns `true` iff the attribute of the object is `null`

#### Usage
```TypeScript
import { isPropertyNull } from 'typesafe-utils'

type Product = {
   id: number | null
}

const items: Product[] = [
   { id: 0 },
   { id: null }
]
const result = items.filter(isPropertyNull('id'))
// result: Product[] => [{ id: null }]
```

### isPropertyNotNull

returns `true` iff the attribute of the object is **not** `null`

#### Usage
```TypeScript
import { isPropertyNotNull } from 'typesafe-utils'

type Product = {
   id: number
}

const items: Product[] = [
   { id: 5 },
   { id: null }
]
const result = items.filter(isPropertyNotNull('id'))
// result: Product[] => [{ id: 5 }]
```

### arePropertiesNull

returns `true` iff all attributes of the object are `null`

#### Usage
```TypeScript
import { arePropertiesNull } from 'typesafe-utils'

type Product = {
   id: number
   name: string
}

const items: Product[] = [ ... ]

const result = items.filter(arePropertiesNull('id', 'name'))
```

### arePropertiesNotNull

returns `true` iff all attributes of the object are **not** `null`

#### Usage
```TypeScript
import { arePropertiesNotNull } from 'typesafe-utils'

type Product = {
   id: number
   name: string
}

const items: Product[] = [ ... ]

const result = items.filter(arePropertiesNotNull('id', 'name'))
```

<!---------------------------------------------------------------------------->

### isBoolean

returns `true` iff value is of type `boolean`

#### Usage
```TypeScript
import { isBoolean } from 'typesafe-utils'

const result = [true, 'some text', 1, false].filter(isBoolean)
// result: boolean[] => [true, false]
```

### isTrue

returns `true` iff value is `true`

#### Usage
```TypeScript
import { isTrue } from 'typesafe-utils'

const result = [true, 'some text', 1].filter(isTrue)
// result: true[] => [true]
```

### isNotTrue

returns `true` iff value is **not** `true`

 > Note: it is currently **not** possible to make this function fully typesafe.\
 > `[true, 123].filter(isNotTrue)` will have the type `(false | number)[]`

#### Usage
```TypeScript
import { isNotTrue } from 'typesafe-utils'

const result = [true, false].filter(isNotTrue)
// result: false[] => [false]
```

### isPropertyTrue

returns `true` iff the attribute of the object is `true`

#### Usage
```TypeScript
import { isPropertyTrue } from 'typesafe-utils'

type Product = {
   available: boolean | null
}

const items: Product[] = [
   { available: true },
   { available: null }
]
const result = items.filter(isPropertyTrue('available'))
// result: Product[] => [{ available: true }]
```

### isPropertyNotTrue

returns `true` iff the attribute of the object is **not** `true`

#### Usage
```TypeScript
import { isPropertyNotTrue } from 'typesafe-utils'

type Product = {
   id: number
}

const items: Product[] = [
   { available: true },
   { available: false }
]
const result = items.filter(isPropertyNotTrue('available'))
// result: Product[] => [{ available: false }]
```

### arePropertiesTrue

returns `true` iff all attributes of the object are `true`

#### Usage
```TypeScript
import { arePropertiesTrue } from 'typesafe-utils'

type Product = {
   count: number
   available: string
}

const items: Product[] = [ ... ]

const result = items.filter(arePropertiesTrue('count', 'available'))
```

### arePropertiesNotTrue

returns `true` iff all attributes of the object are **not** `true`

#### Usage
```TypeScript
import { arePropertiesNotTrue } from 'typesafe-utils'

type Product = {
   count: number
   available: string
}

const items: Product[] = [ ... ]

const result = items.filter(arePropertiesNotTrue('count', 'available'))
```

<!---------------------------------------------------------------------------->

### isFalse

returns `true` iff value is `false`

#### Usage
```TypeScript
import { isFalse } from 'typesafe-utils'

const result = [0, false, undefined].filter(isFalse)
// result: false[] => [false]
```

### isNotFalse

returns `true` iff value is **not** `false`

 > Note: it is currently **not** possible to make this function fully typesafe.\
 > `[false, 123].filter(isNotFalse)` will have the type `(true | number)[]`

#### Usage
```TypeScript
import { isNotFalse } from 'typesafe-utils'

const result = [false, null].filter(isNotFalse)
// result: null[] => [null]
```

### isPropertyFalse

returns `true` iff the attribute of the object is `false`

#### Usage
```TypeScript
import { isPropertyFalse } from 'typesafe-utils'

type Product = {
   available: boolean | null
}

const items: Product[] = [
   { available: false },
   { available: true },
   { available: null }
]
const result = items.filter(isPropertyFalse('available'))
// result: Product[] => [{ available: false }]
```

### isPropertyNotFalse

returns `true` iff the attribute of the object is **not** `false`

#### Usage
```TypeScript
import { isPropertyNotFalse } from 'typesafe-utils'

type Product = {
   id: number
}

const items: Product[] = [
   { available: true },
   { available: false }
]
const result = items.filter(isPropertyNotFalse('available'))
// result: Product[] => [{ available: true }]
```

### arePropertiesFalse

returns `true` iff all attributes of the object are `false`

#### Usage
```TypeScript
import { arePropertiesFalse } from 'typesafe-utils'

type Product = {
   count: number
   available: string
}

const items: Product[] = [ ... ]

const result = items.filter(arePropertiesFalse('count', 'available'))
```

### arePropertiesNotFalse

returns `true` iff all attributes of the object are **not** `false`

#### Usage
```TypeScript
import { arePropertiesNotFalse } from 'typesafe-utils'

type Product = {
   count: number
   available: string
}

const items: Product[] = [ ... ]

const result = items.filter(arePropertiesNotFalse('count', 'available'))
```

<!---------------------------------------------------------------------------->

### isNumber

returns `true` iff value is of type `number`

#### Usage
```TypeScript
import { isNumber } from 'typesafe-utils'

const result = [0, false, undefined, 5].filter(isNumber)
// result: number[] => [0, 5]
```

### isZero

returns `true` iff value is `0`

#### Usage
```TypeScript
import { isZero } from 'typesafe-utils'

const result = [0, false, undefined, 5].filter(isZero)
// result: 0[] => [0]
```

### isNotZero

returns `true` iff value is **not** `0`

 > Note: it is currently **not** possible to make this function fully typesafe.\
 > `[0, null].filter(isNotTrue)` will have the type `(number | null)[]`

#### Usage
```TypeScript
import { isNotZero } from 'typesafe-utils'

const result = [0, 123].filter(isNotZero)
// result: number[] => [123]
```

### isPropertyZero

returns `true` iff the attribute of the object is `0`

#### Usage
```TypeScript
import { isPropertyZero } from 'typesafe-utils'

type Product = {
   price: number
}

const items: Product[] = [
   { price: 0 },
   { price: 4 },
   { price: 15 }
]
const result = items.filter(isPropertyZero('price'))
// result: Product[] => [{ price: 0 }]
```

### isPropertyNotZero

returns `true` iff the attribute of the object is **not** `0`

#### Usage
```TypeScript
import { isPropertyNotZero } from 'typesafe-utils'

type Product = {
   price: number
}

const items: Product[] = [
   { price: 0 },
   { price: 12 }
]
const result = items.filter(isPropertyNotZero('price'))
// result: Product[] => [{ price: 23 }]
```

### arePropertiesZero

returns `true` iff all attributes of the object are `0`

#### Usage
```TypeScript
import { arePropertiesZero } from 'typesafe-utils'

type Product = {
   count: number
   speed: string
}

const items: Product[] = [ ... ]

const result = items.filter(arePropertiesZero('count', 'speed'))
```

### arePropertiesNotZero

returns `true` iff all attributes of the object are **not** `0`

#### Usage
```TypeScript
import { arePropertiesNotZero } from 'typesafe-utils'

type Product = {
   count: number
   speed: string
}

const items: Product[] = [ ... ]

const result = items.filter(arePropertiesNotZero('count', 'speed'))
```

<!---------------------------------------------------------------------------->

### isString

returns `true` iff value is of type `string`

#### Usage
```TypeScript
import { isString } from 'typesafe-utils'

const result = ['', false, null, 'text'].filter(isString)
// result: string[] => ['', 'text]
```

### isEmpty

returns `true` iff value is `''`

#### Usage
```TypeScript
import { isEmpty } from 'typesafe-utils'

const result = ['', false, null, 'text'].filter(isEmpty)
// result: ''[] => ['']
```

### isNotEmpty

returns `true` iff value is **not** `''`

#### Usage
```TypeScript
import { isNotEmpty } from 'typesafe-utils'

const result = ['', 5].filter(isNotEmpty)
// result: number[] => [5]
```

### isPropertyEmpty

returns `true` iff the attribute of the object is `''`

#### Usage
```TypeScript
import { isPropertyEmpty } from 'typesafe-utils'

type Product = {
   label: string
}

const items: Product[] = [
   { label: '' },
   { label: 'label-1' }
]
const result = items.filter(isPropertyEmpty('label'))
// result: Product[] => [{ label: '' }]
```

### isPropertyNotEmpty

returns `true` iff the attribute of the object is **not** `''`

#### Usage
```TypeScript
import { isPropertyNotEmpty } from 'typesafe-utils'

type Product = {
   label: string
}

const items: Product[] = [
   { label: 'label-123' },
   { label: '' }
]
const result = items.filter(isPropertyNotEmpty('label'))
// result: Product[] => [{ label: 'label-123' }]
```


### arePropertiesEmpty

returns `true` iff all attributes of the object are `''`

#### Usage
```TypeScript
import { arePropertiesEmpty } from 'typesafe-utils'

type Person = {
   name: number
   firstName: string
}

const items: Person[] = [ ... ]

const result = items.filter(arePropertiesEmpty('name', 'firstName'))
```

### arePropertiesNotEmpty

returns `true` iff all attributes of the object are **not** `''`

#### Usage
```TypeScript
import { arePropertiesNotEmpty } from 'typesafe-utils'

type Person = {
   name: number
   firstName: string
}

const items: Person[] = [ ... ]

const result = items.filter(arePropertiesNotEmpty('name', 'firstName'))
```

<!---------------------------------------------------------------------------->

### isArray

returns `true` iff value is of type `Array`

#### Usage
```TypeScript
import { isArray } from 'typesafe-utils'

const result = [[], null, 123, [0, 1]].filter(isArray)
// result: number[][] => [[], [0, 1]]
```

### isArrayNotEmpty

returns `true` iff an array contains at least one item

#### Usage
```TypeScript
import { isArrayNotEmpty } from 'typesafe-utils'

const nonEmptyArray = ['hi']

if (!!nonEmptyArray.length) {
	nonEmptyArray[0].toUpperCase() // ERROR: Object is possibly 'undefined'
}

if (isArrayNotEmpty(nonEmptyArray)) {
   // TypeScript will know that the array contains at least 1 item, so it will not complain
	nonEmptyArray[0].toUpperCase()
}
```

### isArrayEmpty

returns `true` iff an array contains no items

#### Usage
```TypeScript
import { isArrayEmpty } from 'typesafe-utils'

const emptyArray: string[] = []
if (isArrayEmpty(emptyArray)) {
	// emptyArray does not contain any items
}
```

<!---------------------------------------------------------------------------->

### isObject

returns `true` iff value is of type `object`

#### Usage
```TypeScript
import { isObject } from 'typesafe-utils'

type SomeType = {
   prop?: number
}

const now = new Date()
const result = [{}, now, null, { prop: 123 }].filter(isObject)
// result: (SomeType | Date)[] => [{}, now, { prop: 123 }]
```

### isPrimitiveObject

returns `true` iff value is of the primitive type `object` and not derived from a `class` like `Date` or else.

#### Usage
```TypeScript
import { isPrimitiveObject } from 'typesafe-utils'

type SomeType = {
   prop?: number
}

const now = new Date()
const result = [{}, now, null, { prop: 123 }].filter(isPrimitiveObject)
// result: SomeType[] => [{}, { prop: 123 }]
```


<!---------------------------------------------------------------------------->

### filterDuplicates

Removes duplicates from an array. Only the first occurrence of an item will be kept.

#### Usage

```TypeScript
import { filterDuplicates } from 'typesafe-utils'

const items = [1, 2, 3, 5, 8, 1]
const filteredItems = items.filter(filterDuplicates)
// filteredItems: number[] => [1, 2, 3, 5, 8]
```

### filterDuplicatesByKey

Removes duplicates from an array by its key. Only the first occurrence of an item will be kept.

> Motivation: It is less error-prone if you can only pass the keys an object provides to a filter function. With this function you get full types support.

#### Usage

```TypeScript
import { filterDuplicatesByKey } from 'typesafe-utils'

type Product = {
   id: number
   name: string
}

const items: Product[] = [
   { id: 1, name: 'name-1' },
   { id: 2, name: 'name-2' },
   { id: 3, name: 'name-1' },
   { id: 4, name: 'name-2' }
]
const filteredItems = items.filter(filterDuplicatesByKey('name'))
// filteredItems: Product[] => [{ id: 1, name: 'name-1' }, { id: 2, name: 'name-2' }]


const willThrowAnError = items.filter(filterDuplicatesByKey('price'))
// throws: Argument of type '"price"' is **not** assignable to parameter of type '"id" | "name"'
```

### and

Combines (`&&`) multiple filter functions.

#### Usage

```TypeScript
import { and, isString } from 'typesafe-utils'

const items = [null, "test", undefined, "hi"]
const isShortString = and<string, any>(isString, (value) => value.length < 3)
const filteredItems = items.filter(isShortString)
// filteredItems: string[] => ['hi']
```

### or

Combines (`||`) multiple filter functions.

#### Usage

```TypeScript
import { or } from 'typesafe-utils'

const items = [10, 2, 3, 5, 8, 1]
const isFiveOrTen = or((value) => value === 5, (value) => value === 10)
const filteredItems = items.filter(isFiveOrTen)
// filteredItems: number[] => [10, 5]
```


### not

Inverts a filter function.

#### Usage

```TypeScript
import { not, filterDuplicates } from 'typesafe-utils'

type Product = {
   id: number
   name: string
}

const items: Product[] = [
   { id: 1, name: 'name-1' },
   { id: 2, name: 'name-2' },
   { id: 3, name: 'name-1' },
   { id: 4, name: 'name-2' }
]
const filteredItems = items.filter(not<Product>(filterDuplicatesByKey('name')))
// filteredItems: Product[] => [{ id: 3, name: 'name-1' }, { id: 4, name: 'name-2' }]


// The `not` function takes two optional type arguments.
// The first is the type you expect the filter function to return.
// The second is the Type of the Array you want to filter.
// e.g.
const notNull = [1, 5, null].filter<number, number | null>(not((value => value === null)))
// notNull: number[] => [1, 5]

```



### createFilter

Creates a typeguard filter.

#### Usage

```TypeScript
import { createFilter } from 'typesafe-utils'

interface Item {
   id: number
}

interface ItemWithName extends Item {
   name: string
}

const items: (Item | ItemWithName | undefined)[] = [
   { id: 1 },
   undefined
   { id: 3, name: 'name-1' },
   { id: 4 }
]

const filterHasName = createFilter<ItemWithName>((item) => !!item?.name)
const filteredItems = items.filter(filterHasName)
// filteredItems: ItemWithName[] => [{ id: 3, name: 'name-1' }]
```


<!---------------------------------------------------------------------------->

## sorting functions

### sortNumberASC

sort `number` in **ASC** order

#### Usage
```TypeScript
import { sortNumberASC } from 'typesafe-utils'

const items = [4, -1, 3, 0]
const result = items.sort(sortNumberASC)
// result: number[] => [-1, 0, 3, 4]
```

### sortNumberDESC

sort `number` in **DESC** order

#### Usage
```TypeScript
import { sortNumberDESC } from 'typesafe-utils'

const items = [2, -5, 0]
const result = items.sort(sortNumberDESC)
// result: number[] => [2, 0, -5]
```

### sortNumberPropertyASC

sort property of type `number` in **ASC** order

#### Usage
```TypeScript
import { sortNumberPropertyASC } from 'typesafe-utils'

type Car {
   speed: number
}

const items: Car[] = [
   { speed: 113 },
   { speed: 100 },
   { speed: 95 }
]
const result = items.sort(sortNumberPropertyASC('speed'))
// result: Car[] => [{ speed: 95 }, { speed: 100 }, { speed: 113 }}
```

### sortNumberPropertyDESC

sort property of type `number` in **DESC** order

#### Usage
```TypeScript
import { sortNumberPropertyDESC } from 'typesafe-utils'

type Car {
   speed: number
}

const items: Car[] = [
   { speed: 70 }
   { speed: 87 }
]
const result = items.sort(sortNumberPropertyDESC('speed'))
// result: Car[] => [{ speed: 87 }, { speed: 70 }]
```

### sortStringASC

sort `string` in **ASC** order

#### Usage
```TypeScript
import { sortStringASC } from 'typesafe-utils'

const items = ['Hi', 'apples']
const result = items.sort(sortStringASC)
// result: string[] => ['apples', Hi']
```

### sortStringDESC

sort `string` in **DESC** order

#### Usage
```TypeScript
import { sortStringDESC } from 'typesafe-utils'

const items = ['apple', 'banana']
const result = items.sort(sortStringDESC)
// result: string[] => ['banana', 'apple']
```

### sortStringPropertyASC

sort property of type `string` in **ASC** order

#### Usage
```TypeScript
import { sortStringPropertyASC } from 'typesafe-utils'

type Car {
   color: string
}

const items: Car[] = [
   { color: 'green' },
   { color: 'brown' }
]

const result = items.sort(sortStringPropertyASC('color'))
// result: Car[] => [{ color: 'brown' }, { color: 'green' }]
```

### sortStringPropertyDESC

sort property of type `string` in **DESC** order

#### Usage
```TypeScript
import { sortStringPropertyDESC } from 'typesafe-utils'

type Car {
   color: string
}

const items: Car[] = [
   { color: 'red' },
   { color: 'blue' }
]
const result = items.sort(sortStringPropertyDESC('color'))
// result: Car[] => [{ color: 'red' }, { color: 'blue' }]
```

### sortDateASC

sort `Date` in **ASC** order

#### Usage
```TypeScript
import { sortDateASC } from 'typesafe-utils'

const today = new Date()
const tomorrow = new Date(today.getTime() + 24 * 60 * 60 * 1000)

const items = [tomorrow, today]
const result = items.sort(sortDateASC)
// result: Date[] => [today, tomorrow]
```

### sortDateDESC

sort `Date` in **DESC** order

#### Usage
```TypeScript
import { sortDateDESC } from 'typesafe-utils'

const today = new Date()
const tomorrow = new Date(today.getTime() + 24 * 60 * 60 * 1000)

const items = [today, tomorrow]
const result = items.sort(sortDateDESC)
// result: Date[] => [tomorrow, today]
```

### sortDatePropertyASC

sort property of type `Date` in **ASC** order

#### Usage
```TypeScript
import { sortDatePropertyASC } from 'typesafe-utils'

type Smartphone = {
   releaseDate: Date
}

const today = new Date()
const tomorrow = new Date(today.getTime() + 24 * 60 * 60 * 1000)

const items: Smartphone[] = [
   { releaseDate: tomorrow },
   { releaseDate: today }
]

const items: Smartphone[] = []
const result = items.sort(sortDatePropertyASC('releaseDate'))
// result: Smartphone[]=> [{ releaseDate: today }, { releaseDate: tomorrow }]
```

### sortDatePropertyDESC

sort property of type `Date` in **DESC** order

#### Usage
```TypeScript
import { sortDatePropertyDESC } from 'typesafe-utils'

type Smartphone = {
   releaseDate: Date
}

const today = new Date()
const tomorrow = new Date(today.getTime() + 24 * 60 * 60 * 1000)

const items: Smartphone[] = [
   { releaseDate: today },
   { releaseDate: tomorrow }
]
const result = items.sort(sortDatePropertyDESC('releaseDate'))
// result: Smartphone[] => [{ releaseDate: tomorrow }, { releaseDate: today }]
```


<!---------------------------------------------------------------------------->

## mapping functions

### pick

Picks an attribute from an Object.

#### Usage

```TypeScript
import { pick } from 'typesafe-utils'

interface Item {
   id: number
   name: string
   price: number
}

const items: Item[] = [
   { id: 1, name: '', price: 123 },
   { id: 3, name: '', price: 0 },
   { id: 7, name: '', price: 12 },
]

const ids = items.map(pick('id'))
// ids: number[] => [ 1, 3, 7 ]
```


<!---------------------------------------------------------------------------->

## other

### deepClone

Creates a deep copy of an object containing primitive values.

> Motivation: I have seen a variety of clone-functions that return any. There you would need to always specify the type by ourself. Using this function, you will get a correctly typed object back.

#### Usage

```TypeScript
import { deepClone } from 'typesafe-utils'

const objectToClone: MyTypedObject = { ... }
const clonedObject = deepClone(objectToClone)
// => clonedObject: MyTypedObject => { ... }
```


### uniqueArray

Removes duplicates from an array.

#### Usage

```TypeScript
import { uniqueArray } from 'typesafe-utils'

const unique = uniqueArray('John', 'Max', 'John')
// => unique: string[] => ['John', 'Max']
```


<!---------------------------------------------------------------------------->

## Types

### Truthy

Contains all `Truthy` values (everything excluding [Falsy](#falsy) values)

#### Usage

```TypeScript
import { Truthy } from 'typesafe-utils'

export const isTruthy = <T>(value: T): value is Truthy<T> => !!value

const truthy = [123, undefined].filter(isTruthy) // => number[]
const notTruthy = [false, true].filter(isTruthy) // => never[]
```


### Falsy

Contains all `Falsy` values (false | '' | 0 | null | undefined)

#### Usage

```TypeScript
import { Falsy } from 'typesafe-utils'

export const isFalsy = <T>(value: T): value is Falsy<T> => !value

const falsy = [undefined, ''].filter(isFalsy) // => undefined[]
const notFalsy = [0, ''].filter(isFalsy) // => never[]
```


### TypeGuard
### TypeGuardWithReturnType

Allows you to write custom `TypeGuard` functions.

#### Usage

```TypeScript
import { TypeGuard } from 'typesafe-utils'

type Project {
   id: number
   // ...
}

const isProject = <T>(value: T): value is TypeGuard<Project, T> => value?.hasOwnProperty('id')

const p1 = isProject({ id: 1 }) // => true
const p2 = isProject(true) // => false
```


### TypeGuardInverted
### TypeGuardInvertedWithReturnType

Allows you to write custom inverted `TypeGuard` functions.

#### Usage

```TypeScript
import { TypeGuardInverted } from 'typesafe-utils'

type Project {
   id: number
   // ...
}

const isNotProject = <T>(value: T): value is TypeGuardInverted<Project, T> => !value?.hasOwnProperty('id')

const p1 = isNotProject({ id: 1 }) // => false
const p2 = isNotProject(null) // => true
```
