self.__uv$config = {
    port: 8080,
    ssl: false,
    prefix: '/service/',
    codec: "xor",
    bare: 'https://incog.dev/bare/',
    proxy: true,
    authorization: {
        "name": "__incog_auth",
        "value": "1"
    },
    encodeUrl: Ultraviolet.codec.xor.encode,
    decodeUrl: Ultraviolet.codec.xor.decode,
    handler: '/uv.handler.js',
    bundle: '/uv.bundle.js',
    config: '/uv.config.js',
    sw: '/uv.sw.js',
    appearance: "bright",
    engine: "google"
};
