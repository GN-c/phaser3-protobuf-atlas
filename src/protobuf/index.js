/**
 * Import only essentials from protobuf
 */
//@ts-ignore
import Reader from "protobufjs/src/reader.js";
//@ts-ignore
import BufferReader from "protobufjs/src/reader_buffer.js";
//@ts-ignore
import util from "protobufjs/src/util/minimal.js";

util._configure();
Reader._configure(BufferReader);

/**
 * super minimal protobuf
 */
const $protobuf = {
  build: "minimal",
  Reader,
  BufferReader,
  util,
  roots: {},
};

// Common aliases
const $Reader = $protobuf.Reader, $util = $protobuf.util;

// Exported root namespace
const $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

export const Atlas = $root.Atlas = (() => {

    /**
     * Properties of an Atlas.
     * @exports IAtlas
     * @interface IAtlas
     * @property {Array.<ITexture>|null} [textures] Atlas textures
     */

    /**
     * Constructs a new Atlas.
     * @exports Atlas
     * @classdesc Represents an Atlas.
     * @implements IAtlas
     * @constructor
     * @param {IAtlas=} [properties] Properties to set
     */
    function Atlas(properties) {
        this.textures = [];
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Atlas textures.
     * @member {Array.<ITexture>} textures
     * @memberof Atlas
     * @instance
     */
    Atlas.prototype.textures = $util.emptyArray;

    /**
     * Decodes an Atlas message from the specified reader or buffer.
     * @function decode
     * @memberof Atlas
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Atlas} Atlas
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Atlas.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.Atlas();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    if (!(message.textures && message.textures.length))
                        message.textures = [];
                    message.textures.push($root.Texture.decode(reader, reader.uint32()));
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Gets the default type url for Atlas
     * @function getTypeUrl
     * @memberof Atlas
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    Atlas.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/Atlas";
    };

    return Atlas;
})();

export const Texture = $root.Texture = (() => {

    /**
     * Properties of a Texture.
     * @exports ITexture
     * @interface ITexture
     * @property {string} image Texture image
     * @property {string|null} [normalMap] Texture normalMap
     * @property {Array.<IFrame>|null} [frames] Texture frames
     */

    /**
     * Constructs a new Texture.
     * @exports Texture
     * @classdesc Represents a Texture.
     * @implements ITexture
     * @constructor
     * @param {ITexture=} [properties] Properties to set
     */
    function Texture(properties) {
        this.frames = [];
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Texture image.
     * @member {string} image
     * @memberof Texture
     * @instance
     */
    Texture.prototype.image = "";

    /**
     * Texture normalMap.
     * @member {string|null|undefined} normalMap
     * @memberof Texture
     * @instance
     */
    Texture.prototype.normalMap = null;

    /**
     * Texture frames.
     * @member {Array.<IFrame>} frames
     * @memberof Texture
     * @instance
     */
    Texture.prototype.frames = $util.emptyArray;

    // OneOf field names bound to virtual getters and setters
    let $oneOfFields;

    /**
     * Texture _normalMap.
     * @member {"normalMap"|undefined} _normalMap
     * @memberof Texture
     * @instance
     */
    Object.defineProperty(Texture.prototype, "_normalMap", {
        get: $util.oneOfGetter($oneOfFields = ["normalMap"]),
        set: $util.oneOfSetter($oneOfFields)
    });

    /**
     * Decodes a Texture message from the specified reader or buffer.
     * @function decode
     * @memberof Texture
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Texture} Texture
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Texture.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.Texture();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.image = reader.string();
                    break;
                }
            case 2: {
                    message.normalMap = reader.string();
                    break;
                }
            case 3: {
                    if (!(message.frames && message.frames.length))
                        message.frames = [];
                    message.frames.push($root.Frame.decode(reader, reader.uint32()));
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        if (!message.hasOwnProperty("image"))
            throw $util.ProtocolError("missing required 'image'", { instance: message });
        return message;
    };

    /**
     * Gets the default type url for Texture
     * @function getTypeUrl
     * @memberof Texture
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    Texture.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/Texture";
    };

    return Texture;
})();

export const Frame = $root.Frame = (() => {

    /**
     * Properties of a Frame.
     * @exports IFrame
     * @interface IFrame
     * @property {string|null} [filename] Frame filename
     * @property {boolean|null} [trimmed] Frame trimmed
     * @property {boolean|null} [rotated] Frame rotated
     * @property {ISize|null} [sourceSize] Frame sourceSize
     * @property {IRect|null} [spriteSourceSize] Frame spriteSourceSize
     * @property {IRect|null} [frame] Frame frame
     * @property {IAnchor|null} [anchor] Frame anchor
     */

    /**
     * Constructs a new Frame.
     * @exports Frame
     * @classdesc Represents a Frame.
     * @implements IFrame
     * @constructor
     * @param {IFrame=} [properties] Properties to set
     */
    function Frame(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Frame filename.
     * @member {string} filename
     * @memberof Frame
     * @instance
     */
    Frame.prototype.filename = "";

    /**
     * Frame trimmed.
     * @member {boolean} trimmed
     * @memberof Frame
     * @instance
     */
    Frame.prototype.trimmed = false;

    /**
     * Frame rotated.
     * @member {boolean} rotated
     * @memberof Frame
     * @instance
     */
    Frame.prototype.rotated = false;

    /**
     * Frame sourceSize.
     * @member {ISize|null|undefined} sourceSize
     * @memberof Frame
     * @instance
     */
    Frame.prototype.sourceSize = null;

    /**
     * Frame spriteSourceSize.
     * @member {IRect|null|undefined} spriteSourceSize
     * @memberof Frame
     * @instance
     */
    Frame.prototype.spriteSourceSize = null;

    /**
     * Frame frame.
     * @member {IRect|null|undefined} frame
     * @memberof Frame
     * @instance
     */
    Frame.prototype.frame = null;

    /**
     * Frame anchor.
     * @member {IAnchor|null|undefined} anchor
     * @memberof Frame
     * @instance
     */
    Frame.prototype.anchor = null;

    // OneOf field names bound to virtual getters and setters
    let $oneOfFields;

    /**
     * Frame _anchor.
     * @member {"anchor"|undefined} _anchor
     * @memberof Frame
     * @instance
     */
    Object.defineProperty(Frame.prototype, "_anchor", {
        get: $util.oneOfGetter($oneOfFields = ["anchor"]),
        set: $util.oneOfSetter($oneOfFields)
    });

    /**
     * Decodes a Frame message from the specified reader or buffer.
     * @function decode
     * @memberof Frame
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Frame} Frame
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Frame.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.Frame();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.filename = reader.string();
                    break;
                }
            case 2: {
                    message.trimmed = reader.bool();
                    break;
                }
            case 3: {
                    message.rotated = reader.bool();
                    break;
                }
            case 4: {
                    message.sourceSize = $root.Size.decode(reader, reader.uint32());
                    break;
                }
            case 5: {
                    message.spriteSourceSize = $root.Rect.decode(reader, reader.uint32());
                    break;
                }
            case 6: {
                    message.frame = $root.Rect.decode(reader, reader.uint32());
                    break;
                }
            case 7: {
                    message.anchor = $root.Anchor.decode(reader, reader.uint32());
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Gets the default type url for Frame
     * @function getTypeUrl
     * @memberof Frame
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    Frame.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/Frame";
    };

    return Frame;
})();

export const Size = $root.Size = (() => {

    /**
     * Properties of a Size.
     * @exports ISize
     * @interface ISize
     * @property {number|null} [w] Size w
     * @property {number|null} [h] Size h
     */

    /**
     * Constructs a new Size.
     * @exports Size
     * @classdesc Represents a Size.
     * @implements ISize
     * @constructor
     * @param {ISize=} [properties] Properties to set
     */
    function Size(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Size w.
     * @member {number} w
     * @memberof Size
     * @instance
     */
    Size.prototype.w = 0;

    /**
     * Size h.
     * @member {number} h
     * @memberof Size
     * @instance
     */
    Size.prototype.h = 0;

    /**
     * Decodes a Size message from the specified reader or buffer.
     * @function decode
     * @memberof Size
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Size} Size
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Size.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.Size();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.w = reader.uint32();
                    break;
                }
            case 2: {
                    message.h = reader.uint32();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Gets the default type url for Size
     * @function getTypeUrl
     * @memberof Size
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    Size.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/Size";
    };

    return Size;
})();

export const Rect = $root.Rect = (() => {

    /**
     * Properties of a Rect.
     * @exports IRect
     * @interface IRect
     * @property {number|null} [x] Rect x
     * @property {number|null} [y] Rect y
     * @property {number|null} [w] Rect w
     * @property {number|null} [h] Rect h
     */

    /**
     * Constructs a new Rect.
     * @exports Rect
     * @classdesc Represents a Rect.
     * @implements IRect
     * @constructor
     * @param {IRect=} [properties] Properties to set
     */
    function Rect(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Rect x.
     * @member {number} x
     * @memberof Rect
     * @instance
     */
    Rect.prototype.x = 0;

    /**
     * Rect y.
     * @member {number} y
     * @memberof Rect
     * @instance
     */
    Rect.prototype.y = 0;

    /**
     * Rect w.
     * @member {number} w
     * @memberof Rect
     * @instance
     */
    Rect.prototype.w = 0;

    /**
     * Rect h.
     * @member {number} h
     * @memberof Rect
     * @instance
     */
    Rect.prototype.h = 0;

    /**
     * Decodes a Rect message from the specified reader or buffer.
     * @function decode
     * @memberof Rect
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Rect} Rect
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Rect.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.Rect();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.x = reader.uint32();
                    break;
                }
            case 2: {
                    message.y = reader.uint32();
                    break;
                }
            case 3: {
                    message.w = reader.uint32();
                    break;
                }
            case 4: {
                    message.h = reader.uint32();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Gets the default type url for Rect
     * @function getTypeUrl
     * @memberof Rect
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    Rect.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/Rect";
    };

    return Rect;
})();

export const Anchor = $root.Anchor = (() => {

    /**
     * Properties of an Anchor.
     * @exports IAnchor
     * @interface IAnchor
     * @property {number|null} [x] Anchor x
     * @property {number|null} [y] Anchor y
     */

    /**
     * Constructs a new Anchor.
     * @exports Anchor
     * @classdesc Represents an Anchor.
     * @implements IAnchor
     * @constructor
     * @param {IAnchor=} [properties] Properties to set
     */
    function Anchor(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Anchor x.
     * @member {number} x
     * @memberof Anchor
     * @instance
     */
    Anchor.prototype.x = 0;

    /**
     * Anchor y.
     * @member {number} y
     * @memberof Anchor
     * @instance
     */
    Anchor.prototype.y = 0;

    /**
     * Decodes an Anchor message from the specified reader or buffer.
     * @function decode
     * @memberof Anchor
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Anchor} Anchor
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Anchor.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.Anchor();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.x = reader.double();
                    break;
                }
            case 2: {
                    message.y = reader.double();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Gets the default type url for Anchor
     * @function getTypeUrl
     * @memberof Anchor
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    Anchor.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/Anchor";
    };

    return Anchor;
})();
