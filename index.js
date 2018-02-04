// @flow

const t = require("io-ts");

const PersonInterface = t.type({
  name: t.string,
  age: t.number
});

type Person = t.TypeOf<typeof PersonInterface>;

const testPerson = (x: Person) => x;

t
  .validate(JSON.parse('{"name":"Giulio","age":43}'), PersonInterface)
  .map(x => console.log(testPerson(x))); // => Right({name: "Giulio", age: 43})
