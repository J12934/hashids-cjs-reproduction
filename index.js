const Hashids = require('hashids/cjs/index.js')
const hashids = new Hashids()

console.log(hashids.encode(1))