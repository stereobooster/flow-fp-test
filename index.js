// @flow

const t = require("io-ts");

const Person = t.interface({
  name: t.string,
  age: t.number
});

t
  .validate(JSON.parse('{"name":"Giulio","age":43}'), Person)
  .map(x => console.log(x)); // => Right({name: "Giulio", age: 43})
