const express = require('express')
const app = express()
const port = 3000
console.log("Helo");

console.log("He1lo");

console.log("HeA221DSFasdf2s2311lo");

console.log("111Hesasdadssasdfwswswasdfs232wsw21sfs2aasdf11lo");

console.log("Haeasdf2alo");

app.get('/', (req, res) => res.send('Helasdflo form Node.js Server'))

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
