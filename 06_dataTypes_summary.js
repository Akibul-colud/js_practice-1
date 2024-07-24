// Premitive dataTypes
//   7 Types  {String, Number, boolean, null, undefined, Symbol, BigInt}

// console.log();

// Reference (Non premitive dataTypes)
// {Array, Object, function};


// Example: 
const name = "Fahim"
// console.log(typeof (name));

const userId = 992934
// console.log(typeof userId);

const isLoggedIn = true
// console.log(typeof isLoggedIn);

const password = null
// console.log(typeof password);

let City;
// console.log(typeof City);

let userState = Symbol('Bangladesh')
let anotherState = Symbol('Bangladesh')
// console.log(typeof userState);
// console.log(userState === anotherState);

let bigNumber = 5674n
// console.log(typeof bigNumber);

let monkeys =["Asif","5657","Rakib"]
// console.log(typeof monkeys);
// console.log(monkeys);

let myobj={
    name:"akibul hasan Hridoy",
    age:12,
    schoolName:"KG School",
}
// console.log(myobj);

// let myfun=function(){
//     console.log("fun is declared")
// }
// console.log(myfun)




// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//

// memory
// Steak(Primitive)    heap (Non Primitive)

let userName = "Asif arman"

let anotherName = userName
anotherName = "Karim"

// console.log(userName);
// console.log(anotherName);
const userOne = {
    userGmail : "asif@gmail.com"
}

const userTwo = userOne
userTwo.userGmail = "Karim@gmail.com"

// console.log(userOne);
// console.log(userTwo);
