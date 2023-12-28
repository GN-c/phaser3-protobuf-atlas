#! /usr/bin/env node
import { EncodeFile } from "../src/encode";

const [_, __, atlasJSONPath, outputFilePath] = process.argv;

EncodeFile(
  atlasJSONPath,
  outputFilePath || atlasJSONPath.replace(".json", ".bin")
);
