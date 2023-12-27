// DO NOT EDIT! This is a generated file. Edit the JSDoc in src/*.js instead and run 'npm run build:types'.

/** super minimal protobuf */
export const $protobuf: any;

/** Properties of an Atlas. */
export interface IAtlas {

    /** Atlas textures */
    textures?: (ITexture[]|null);
}

/** Represents an Atlas. */
export class Atlas implements IAtlas {

    /**
     * Constructs a new Atlas.
     * @param [properties] Properties to set
     */
    constructor(properties?: IAtlas);

    /** Atlas textures. */
    public textures: ITexture[];

    /**
     * Decodes an Atlas message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Atlas
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Atlas;

    /**
     * Gets the default type url for Atlas
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a Texture. */
export interface ITexture {

    /** Texture image */
    image: string;

    /** Texture normalMap */
    normalMap?: (string|null);

    /** Texture frames */
    frames?: (IFrame[]|null);
}

/** Represents a Texture. */
export class Texture implements ITexture {

    /**
     * Constructs a new Texture.
     * @param [properties] Properties to set
     */
    constructor(properties?: ITexture);

    /** Texture image. */
    public image: string;

    /** Texture normalMap. */
    public normalMap?: (string|null);

    /** Texture frames. */
    public frames: IFrame[];

    /** Texture _normalMap. */
    public _normalMap?: "normalMap";

    /**
     * Decodes a Texture message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Texture
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Texture;

    /**
     * Gets the default type url for Texture
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a Frame. */
export interface IFrame {

    /** Frame filename */
    filename?: (string|null);

    /** Frame trimmed */
    trimmed?: (boolean|null);

    /** Frame rotated */
    rotated?: (boolean|null);

    /** Frame sourceSize */
    sourceSize?: (ISize|null);

    /** Frame spriteSourceSize */
    spriteSourceSize?: (IRect|null);

    /** Frame frame */
    frame?: (IRect|null);

    /** Frame anchor */
    anchor?: (IAnchor|null);
}

/** Represents a Frame. */
export class Frame implements IFrame {

    /**
     * Constructs a new Frame.
     * @param [properties] Properties to set
     */
    constructor(properties?: IFrame);

    /** Frame filename. */
    public filename: string;

    /** Frame trimmed. */
    public trimmed: boolean;

    /** Frame rotated. */
    public rotated: boolean;

    /** Frame sourceSize. */
    public sourceSize?: (ISize|null);

    /** Frame spriteSourceSize. */
    public spriteSourceSize?: (IRect|null);

    /** Frame frame. */
    public frame?: (IRect|null);

    /** Frame anchor. */
    public anchor?: (IAnchor|null);

    /** Frame _anchor. */
    public _anchor?: "anchor";

    /**
     * Decodes a Frame message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Frame
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Frame;

    /**
     * Gets the default type url for Frame
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a Size. */
export interface ISize {

    /** Size w */
    w?: (number|null);

    /** Size h */
    h?: (number|null);
}

/** Represents a Size. */
export class Size implements ISize {

    /**
     * Constructs a new Size.
     * @param [properties] Properties to set
     */
    constructor(properties?: ISize);

    /** Size w. */
    public w: number;

    /** Size h. */
    public h: number;

    /**
     * Decodes a Size message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Size
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Size;

    /**
     * Gets the default type url for Size
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a Rect. */
export interface IRect {

    /** Rect x */
    x?: (number|null);

    /** Rect y */
    y?: (number|null);

    /** Rect w */
    w?: (number|null);

    /** Rect h */
    h?: (number|null);
}

/** Represents a Rect. */
export class Rect implements IRect {

    /**
     * Constructs a new Rect.
     * @param [properties] Properties to set
     */
    constructor(properties?: IRect);

    /** Rect x. */
    public x: number;

    /** Rect y. */
    public y: number;

    /** Rect w. */
    public w: number;

    /** Rect h. */
    public h: number;

    /**
     * Decodes a Rect message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Rect
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Rect;

    /**
     * Gets the default type url for Rect
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of an Anchor. */
export interface IAnchor {

    /** Anchor x */
    x?: (number|null);

    /** Anchor y */
    y?: (number|null);
}

/** Represents an Anchor. */
export class Anchor implements IAnchor {

    /**
     * Constructs a new Anchor.
     * @param [properties] Properties to set
     */
    constructor(properties?: IAnchor);

    /** Anchor x. */
    public x: number;

    /** Anchor y. */
    public y: number;

    /**
     * Decodes an Anchor message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Anchor
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Anchor;

    /**
     * Gets the default type url for Anchor
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}
