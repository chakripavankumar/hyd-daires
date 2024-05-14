"use strict";
function sumOfAge(user1, user2) {
    return user1.age + user2.age;
}
const age = sumOfAge({ name: "pavan ", age: 30 }, { name: "kumar ", age: 79 });
console.log(age);
