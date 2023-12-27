import Phaser from "phaser";
import { Atlas } from "../../protobuf";

/**
 * Extend Namespace to support TS
 */
declare global {
  namespace Phaser.Loader {
    interface LoaderPlugin {
      protobufMultiAtlas(
        key: string,
        atlasURL: string,
        path: string,
        baseURL: string,
        atlasXhrSettings?: Phaser.Types.Loader.XHRSettingsObject,
        textureXhrSettings?: Phaser.Types.Loader.XHRSettingsObject
      ): void;
    }
  }
}

/**
 * Custom loader to load & parse Protobuf Atlas file in Phaser way
 */
export class MultiAtlasProtobufFile extends Phaser.Loader.MultiFile {
  multiKeyIndex!: number;
  atlasData!: Atlas;
  constructor(
    loader: Phaser.Loader.LoaderPlugin,
    key: string,
    atlasURL: string,
    path: string,
    baseURL: string,
    atlasXhrSettings?: Phaser.Types.Loader.XHRSettingsObject,
    textureXhrSettings?: Phaser.Types.Loader.XHRSettingsObject
  ) {
    super(loader, "protobufAtlas", key, [
      new Phaser.Loader.FileTypes.BinaryFile(
        loader,
        key,
        atlasURL,
        atlasXhrSettings,
        Uint8Array
      ),
    ]);

    this.config.path = path;
    this.config.baseURL = baseURL;
    this.config.textureXhrSettings = textureXhrSettings;
  }

  onFileComplete(file: Phaser.Loader.FileTypes.BinaryFile) {
    var index = this.files.indexOf(file);

    if (index !== -1) {
      this.pending--;

      if (file.type === "binary") {
        /**
         * Decode Protobuf bin data
         */
        this.atlasData = Atlas.decode(file.data);

        const {
          path = this.path,
          baseURL = this.baseURL,
          prefix = this.prefix,
          textureXhrSettings,
        } = this.config;

        const currentBaseURL = this.loader.baseURL;
        const currentPath = this.loader.path;
        const currentPrefix = this.loader.prefix;

        this.loader.setBaseURL(baseURL);
        this.loader.setPath(path);
        this.loader.setPrefix(prefix);

        for (const { image: textureURL, normalMap: normalMapURL } of this
          .atlasData.textures) {
          const key: string = "MA" + this.multiKeyIndex + "_" + textureURL;

          const image = new Phaser.Loader.FileTypes.ImageFile(
            this.loader,
            key,
            textureURL,
            textureXhrSettings
          );

          this.addToMultiFile(image);

          this.loader.addFile(image);

          //  "normalMap": "texture-packer-multi-atlas-0_n.png",
          if (normalMapURL) {
            const normalMap = new Phaser.Loader.FileTypes.ImageFile(
              this.loader,
              key,
              normalMapURL,
              textureXhrSettings
            );

            normalMap.type = "normalMap";

            image.setLink(normalMap);

            this.addToMultiFile(normalMap);

            this.loader.addFile(normalMap);
          }

          //  Reset the loader settings
          this.loader.setBaseURL(currentBaseURL);
          this.loader.setPath(currentPath);
          this.loader.setPrefix(currentPrefix);
        }
      }
    }
  }

  addToCache() {
    if (this.isReadyToProcess()) {
      const data = [];
      const images = [];
      const normalMaps = [];

      for (var i = 1; i < this.files.length; i++) {
        var file = this.files[i];

        if (file.type === "normalMap") {
          continue;
        }

        var pos = file.key.indexOf("_");
        var key = file.key.substr(pos + 1);

        var image = file.data;

        //  Now we need to find out which json entry this mapped to
        for (var t = 0; t < this.atlasData.textures.length; t++) {
          var item = this.atlasData.textures[t];

          if (item.image === key) {
            images.push(image);

            data.push(item);

            if (file.linkFile) {
              normalMaps.push(file.linkFile.data);
            }

            break;
          }
        }
      }

      this.loader.textureManager.addAtlasJSONArray(
        this.key,
        images,
        data,
        normalMaps.length ? normalMaps : undefined
      );

      this.complete = true;
    }
  }
}

/**
 * Register File
 */
Phaser.Loader.FileTypesManager.register(
  "protobufMultiAtlas",
  function (this: Phaser.Loader.LoaderPlugin, ...args: any[]) {
    //@ts-ignore
    this.addFile(new MultiAtlasProtobufFile(this, ...args).files);
  }
);
