# Phaser 3 Protobuf Atlas

Encode and Load atlas JSON in more efficient binary format using Protobuf

## Pros

- Reduced file size -> improved load speed
- Efficient encoding -> faster parse speed

## Installation

```bash
  npm install phaser3-protobuf-atlas
```

## Usage/Examples

library exposes 4 entries, each tailored to specific use and 1 cli command

#### atlas-loader

load texture atlas, similar to `this.load.atlas`

```typescript
import "phaser3-protobuf-atlas/atlas-loader";

class extends Phaser.Scene {
  ...
  preload() {
    /**
     * Load Protobuf Atlas
     */
    this.load.protobufAtlas("atlas", "image.png", "atlas.bin");
  }
}
```

#### multi-atlas-loader

load multi texture atlas, similar to `this.load.multiatlas`

```typescript
import "phaser3-protobuf-atlas/mulit-atlas-loader";

class extends Phaser.Scene {
  ...
  preload() {
    /**
     * Load Protobuf Atlas
     */
    this.load.protobufMultiAtlas("atlas", "atlas.bin");
  }
}
```

#### encode

encode Atlas JSON into binary protobuf format

```typescript
import { Encode, EncodeFile } from "phaser3-protobuf-atlas/encode";

EncodeFile("atlas.json", "atlas.bin");
console.log("success!");
```

#### protobuf

decode binary data using super minimal protobuf type roots

```typescript
import { Atlas } from "phaser3-protobuf-atlas/protobuf";

const atlasJSON = Atlas.decode(binaryData);
console.log(atlasJSON);
```

#### CLI

encode `atlas.json` into binary file using cli

```bash
encode-protobuf-atlas path/atlas.json path/output
```

or run with npm through package.json

```json
{
  "scripts": {
    "build": "encode-protobuf-atlas path-to/atlas.json path-to/output"
  }
}
```

## Related

[Protobuf](https://github.com/protobufjs/protobuf.js)
