// node-stdlib-browser only needs this module to resolve. The playground polyfill
// includes buffer and path, not crypto. Hashing and signing stay unavailable so
// elliptic is not installed.
function unavailable(name) {
  return function unavailableCrypto() {
    throw new Error(
      "crypto." +
        name +
        " is not available. crypto-browserify was removed because elliptic has no patched release.",
    );
  };
}

module.exports = {
  createCipher: unavailable("createCipher"),
  createCipheriv: unavailable("createCipheriv"),
  createDecipher: unavailable("createDecipher"),
  createDecipheriv: unavailable("createDecipheriv"),
  createDiffieHellman: unavailable("createDiffieHellman"),
  createECDH: unavailable("createECDH"),
  createHash: unavailable("createHash"),
  createHmac: unavailable("createHmac"),
  createSign: unavailable("createSign"),
  createVerify: unavailable("createVerify"),
  pbkdf2: unavailable("pbkdf2"),
  pbkdf2Sync: unavailable("pbkdf2Sync"),
  randomBytes: unavailable("randomBytes"),
  randomFill: unavailable("randomFill"),
  randomFillSync: unavailable("randomFillSync"),
};
