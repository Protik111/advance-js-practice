//undefined from variable declaration
let name;
console.log(name);

//undefined from return
function addNumbers(num1, num2){
    const sum = num1 + num2;
}
const addition = addNumbers(20,30);
console.log(addition);

//undefined from parameter
function addNumber(num1, num2){
    console.log(num1, num2);
}
addNumber(20);

//undefined from object
const person = {name: "protik", age: 22};
console.log(person.salary);

//undefined from undefined variable
const undefine = undefined;
console.log(undefine);


