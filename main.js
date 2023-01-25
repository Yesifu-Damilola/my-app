// Variables
// var
// var name = "felix";
// name = "olawole";
// console.log(name);

// let
// let userName = "mike" 
// userName = "joe"
// console.log(userName)

// const
// const userEmail = "ola@gmail.com"
// userEmail = "felix@gmail.com"
// console.log(userEmail);

// Data Type
// string data type
const userName = 'Olatubra Felix'
const hy = "45"

console.log(typeof userName + " " + userName)
// number data type
const age = 25
console.log(typeof age + " " + age)

const price = 67.5
console.log(typeof price + " " + price)
// boolean
const completed = true
console.log(typeof completed + " " + completed)
// object
const userInfo = {
  username: "felix",
  age: 32,
  company: "Google",
  position: "Software Engineer",
  active: true
}

console.log(userInfo.username + " is a " + userInfo.position + " at " + userInfo.company);

// Template literal
console.log(`${userInfo.username} is a ${userInfo.position} at ${userInfo.company}`)

// // Array
// const users = [
//   "felx", "ola", "james", "kemi"
// ]

// //Add to array
// users.push("King Joe")
// users.unshift("Kemisola")
// users.pop()
// users.shift()
// console.log(users[4])

// Loops
// For loop
// for (let i = 0; i < users.length; i++){
//   console.log(users[i] + " = " + i);
// }
// while
// let i = 0
// while (i < users.length) {
//   i++
//   console.log(users[i])
// }
// do while
// do {
//   i++
//   console.log(i);
// }while (i < users.length) 
// map
const users = [
  {
    name: "Ola Felix",
    company: "Google",
    position: "Frontend Developer"

  },
  {
    name: "Mike Jame",
    company: "Google",
    position: "Frontend Developer"
  },
  {
    name: "king Joe",
    company: "Stellas",
    position: "Frontend Developer"
  },
  {
    name: "Okwe brain",
    company: "Credpal",
    position: "Frontend Developer"
  },
]

// users.map(function (user) {
//   return console.log(user.company)
// })
// foreach
users.forEach(function (user) {
  return console.log(user)
})


// Function
function addNumber(num1, num2) {
  const result = num1 + num2
  return console.log(result);
}

function registerUser(username, password) {
  return console.log(username + " your login details is  " + `UserName: ${username}, Password: ${password}`);
}
addNumber(10, 20);

registerUser("felonzo", "felix44");
registerUser("miketech", "jamesmike");
registerUser("kingJoe", crypto.randomUUID())