# typesafe-utils

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

## Utilities

### deepClone

Creates a deep copy of an object. Can also be used to copy priimitive values.

> Motivation: I have seen a variety of clone-functions that return any. There you would need to always specify the type by ourself. Using this function, you will get a correctly typed object back.

#### Usage

```TypeScript
import { deepClone } from 'typesafe-utils'

const objectToClone: MyTypedObject = { ... }
const clonedObject = deepClone(objectToClone)
// => clonedObject: MyTypedObject
```