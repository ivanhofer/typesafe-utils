A collection of a few small lighweight typesafe utilities.

## Motivation

Sometimes you will encounter situations were the types will not match what you expect from a function. This means you need to explicitly specify a type by yourself to gain the full power of TypeScript.

In this collection you will find some useful functions that are fully typed.

## Install

```
$ npm install --save-dev typesafe-utils
```

## Overview
 - [deepClone](#deepClone)
 - [boolean utils](#boolean\ utils)
    - [isTruthy](#isTruthy)
    - [isFalsy](#isFalsy)
    - [isUndefined](#isUndefined)
    - [isNotUndefined](#isNotUndefined)
    - [isNull](#isNull)
    - [isNotNull](#isNotNull)
    - [isTrue](#isTrue)
    - [isNotTrue](#isNotTrue)
    - [isFalse](#isFalse)
    - [isNotFalse](#isNotFalse)
    - [isZero](#isZero)
    - [isNotZero](#isNotZero)
    - [isEmpty](#isEmpty)
    - [isNotEmpty](#isNotEmpty)

## Utilities

### deepClone

Creates a deep copy of an object. Can also be used to copy primitive values.

> Motivation: I have seen a variety of clone-functions that return any. There you would need to always specify the type by ourself. Using this function, you will get a correctly typed object back.

#### Usage

```TypeScript
import { deepClone } from 'typesafe-utils'

const objectToClone: MyTypedObject = { ... }
const clonedObject = deepClone(objectToClone)
// => clonedObject: MyTypedObject => { ... }
```

### boolean utils

A bunch of utilities that return true or false.

> Motivation: When you filter an Array, the return type is not always what you expect. Typescript will tell you the result of a filter function is the exact type you pass to the filter function. But that is not always true. If you filter out falsy values, the return type should should not contain.

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

### isTruthy

returns `true` iff value is not `false | '' | 0 | null | undefined`

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

const result = [true, false, 'text', 123].filter(isFalsy)
// result: false[] => [false]
```

### isUndefined

returns `true` iff value is `undefined`

#### Usage
```TypeScript
import { isUndefined } from 'typesafe-utils'

const result = [undefined, null, true].filter(isUndefined)
// result: undefined[] => [undefined]
```

### isNotUndefined

returns `true` iff value is not `undefined`

#### Usage
```TypeScript
import { isNotUndefined } from 'typesafe-utils'

const result = [null, undefined].filter(isNotUndefined)
// result: null[] => [null]
```

### isNull

returns `true` iff value is `null`

#### Usage
```TypeScript
import { isNull } from 'typesafe-utils'

const result = [null, undefined].filter(isNull)
// result: null[] => [null]
```

### isNotNull

returns `true` iff value is not `null`

#### Usage
```TypeScript
import { isNotNull } from 'typesafe-utils'

const result = [false, null].filter(isNotNull)
// result: boolean[] => [false]
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

returns `true` iff value is not `true`

#### Usage
```TypeScript
import { isNotTrue } from 'typesafe-utils'

const result = [true, false].filter(isNotTrue)
// result: false[] => [false]
```

### isFalse

returns `true` iff value is `false`

#### Usage
```TypeScript
import { isFalse } from 'typesafe-utils'

const result = [0, false, undefined].filter(isFalse)
// result: false[] => [false]
```

### isNotFalse

returns `true` iff value is not `false`

#### Usage
```TypeScript
import { isNotFalse } from 'typesafe-utils'

const result = [false, null].filter(isNotFalse)
// result: null[] => [null]
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

returns `true` iff value is not `0`

#### Usage
```TypeScript
import { isNotZero } from 'typesafe-utils'

const result = [0, false].filter(isNotZero)
// result: boolean[] => [false]
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

returns `true` iff value is not `''`

#### Usage
```TypeScript
import { isNotEmpty } from 'typesafe-utils'

const result = ['', 5].filter(isNotEmpty)
// result: number[] => [5]
```
