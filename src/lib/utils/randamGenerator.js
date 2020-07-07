const crypto = require('crypto')

function randomGenerator (digits) {
  let S="abcdefghijklmnopqrstuvwxyz0123456789"

  let random = Array.from(crypto.randomFillSync(new Uint8Array(digits))).map((n)=>S[n%S.length]).join('')
  return random;
}

module.exports = randomGenerator;