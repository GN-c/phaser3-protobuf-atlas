import protobuf from "protobufjs";
import * as fs from "fs";

import { IAtlas } from "../protobuf";

/**
 * Load .proto
 */
const AtlasMessage = protobuf
  .loadSync(require.resolve("src/protobuf/atlas.proto"))
  .lookupType("Atlas");

/**
 * Encode JSON object
 * @param atlasJSON
 * @returns
 */
export function Encode(atlasJSON: IAtlas | any) {
  /**
   * Verify
   */
  const errMsg = AtlasMessage.verify(atlasJSON);
  if (errMsg) throw Error(errMsg);

  /**
   * Encode atlas JSON into protobuf format
   */
  return AtlasMessage.encode(atlasJSON).finish();
}

/**
 * Read JSON File, convert and write to output path
 */
export function EncodeFile(atlasJSONPath: string, outputPath: string) {
  fs.writeFileSync(
    outputPath,
    Encode(fs.readFileSync(atlasJSONPath, { encoding: "utf-8" }))
  );
}