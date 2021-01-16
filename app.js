'use strict';

function f(obj) {
  const res = {
    number: {},
    string: {},
    boolean: {},
    object: {},
  };
  const keys = Object.keys(obj);
  for (const key of keys) {
    const value = obj[key];
    const type = res[typeof value];
    type[key] = value;
    res[typeof value][key] = value;
  }
  return res;
}

const someObject = {
  one: 1,
  two: 'str',
  three: true,
  a: 5,
  b: { field: 'value' },
};

console.log(f(someObject));
// {
//   number: { one: 1, a: 5 },
//   string: { two: 'str' },
//   boolean: { three: true },
//   object: { b: { field: 'value' } }
// }
