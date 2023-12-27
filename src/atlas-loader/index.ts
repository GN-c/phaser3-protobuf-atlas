import Phaser from "phaser";
import { Atlas } from "../protobuf";

/**
 * Extend Namespace to support TS
 */
declare global {
  namespace Phaser.Loader {
    interface LoaderPlugin {
      protobufAtlas(
        key: string,
        textureURL: string,
        atlasURL: string,
        textureXhrSettings?: Phaser.Types.Loader.XHRSettingsObject,
        atlasXhrSettings?: Phaser.Types.Loader.XHRSettingsObject
      ): void;
    }
  }
}

/**
 * Custom loader to load & parse Protobuf Atlas file in Phaser way
 */
export class AtlasProtobufFile extends Phaser.Loader.MultiFile {
  constructor(
    loader: Phaser.Loader.LoaderPlugin,
    key: string,
    textureURL: string | string[],
    atlasURL: string,
    textureXhrSettings?: Phaser.Types.Loader.XHRSettingsObject,
    atlasXhrSettings?: Phaser.Types.Loader.XHRSettingsObject
  ) {
    super(loader, "protobufAtlas", key, [
      new Phaser.Loader.FileTypes.ImageFile(
        loader,
        key,
        textureURL,
        textureXhrSettings
      ),
      new Phaser.Loader.FileTypes.BinaryFile(
        loader,
        key,
        atlasURL,
        atlasXhrSettings,
        Uint8Array
      ),
    ]);
  }

  addToCache() {
    if (this.isReadyToProcess()) {
      const [image, binary] = this.files as [
        image: Phaser.Loader.FileTypes.ImageFile,
        bin: Phaser.Loader.FileTypes.BinaryFile
      ];

      this.loader.textureManager.addAtlas(
        this.key,
        image.data,
        /**
         * Decode Protobuf bin data
         */
        Atlas.decode(binary.data)
      );

      this.complete = true;
    }
  }
}

/**
 * Register File
 */
Phaser.Loader.FileTypesManager.register(
  "protobufAtlas",
  function (this: Phaser.Loader.LoaderPlugin, ...args: any[]) {
    //@ts-ignore
    this.addFile(new AtlasProtobufFile(this, ...args).files);
  }
);
