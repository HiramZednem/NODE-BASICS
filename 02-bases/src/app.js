// import { emailTemplate } from "./js-foundation/01-template";
// const { emailTemplate } = require('./js-foundation/01-template') // -> syntxis de importacion tradicional en node
// import { emailTemplate } from "./js-foundation/01-template";
// const { getAge, uuidv4 } = require('./plugins')
// const { buildMakePerson } = require('./js-foundation/05-factory')
// const { getPokemonById } = require('./js-foundation/06-promises')
const { buildLogger } = require('./plugins');

// const makePerson = buildMakePerson({ uuidv4, getAge })


// const obj = { name: 'John', birthdate: '2003/05/07' }
// const john = makePerson(obj)

// console.log(john);


// getPokemonById( 17 ).then(console.log);
  

const logger = buildLogger('app.js');

logger.log('Hola mundo'); 