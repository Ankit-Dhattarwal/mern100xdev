"use strict";
// const x: number = 1;
// console.log(x);
// /// js ->
// // const x = 1;
// // console.log(x);
///-------how to give arguments to the funcion
// function printHello(firstName: string) {
//   console.log("Hello" + firstName);
// }
// printHello("Ankit");
////----------Sum function and how to return in function
// type inference
// function sum(a: number, b: number): number {
//   return a + b;
// }
// const result = sum(4, 3);
// console.log(result);
////////---- condition
// function Age(age: number) {
//   if (age > 18) {
//     console.log(" Yes are not a child be happy");
//     return true;
//   } else {
//     console.log("You are child so go to see pokeomon");
//     return false;
//   }
// }
// let x = Age(45);
/// -------- take another function as the input and return after 1 sec
function runAfter(fn) {
    setTimeout(fn, 1000);
}
runAfter(function () {
    console.log(" Hi i am run after 1000 sec ");
});
