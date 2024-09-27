let a = 5;
let b = 6;
let c = a;
c = 10
console.log(c, a)

let obj3 = {a: 1, b: 2, c: 3}

let obj4 = obj3

console.log(obj3, obj4)

console.log('задание 1')
let user = {
  name: "John",
  age: 30
};
console.log('age' in user);
console.log('задание 2')
let users = [
  {
  name: "John",
  age: 30
  },
  {
  name: "Bob",
  age: 21
  },
  {
  name: "Anna",
  age: 19
  }
  ];
let user1 = users[1]
console.log(user1)
console.log('Задание 3')
let users1 = [
  {
  name: "John",
  age: 30
  },
  {
  name: "Bob",
  age: 21
  },

  ];
  delete users1[{
  name: "Anna",
  age: 19
  }]
console.log(users1)
console.log('Задание 4')
let users2 = [
  {
  name: "John",
  age: 30
  },
  {
  name: "Bob",
  age: 21
  },
  {
  name: "Anna",
  age: 19
  }
  ];
users2.sort(function(a, b) {
    return a.age - b.age;})
console.log(users2)
console.log('Задание 5')
const obj = {
  id: 5,
 token: 12343423
  };
  const id = obj['id']
  console.log(id)
  console.log('Задание 6')
const obj1 = {
  id: 5,
 token: 12343423
  };
  let userId = obj1.id
console.log(userId)











