
const buildMakePerson = ({ uuidv4, getAge }) => {

  return ({ name, birthdate }) => {

    return {
      id: uuidv4(),
      name,
      birthdate,
      age: getAge(birthdate),
    }
  }
}





// const hiram = buildPerson(obj)
// console.log(hiram)

module.exports = {
  buildMakePerson,
}