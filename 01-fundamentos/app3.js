
const fs = require('fs');

const content = fs.readFileSync('./README.md', 'utf-8' )

const wordCount = content.split(/React/i)
// content.replace()

console.log('Palabras: ', wordCount.length - 1)