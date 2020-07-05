
const randomGenerator = (digits) => {
  let S="abcdefghijklmnopqrstuvwxyz0123456789"

  let random = Array.from(Array(digits)).map(()=>S[Math.floor(Math.random()*S.length)]).join('')
  return random;
}
module.exports = randomGenerator;