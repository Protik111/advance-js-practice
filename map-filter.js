const numbers = [5, 6, 8, 9, 10];

//way by for loop

const numbersDouble = [];
for(let i=0; i<numbers.length;i++){
    const element = numbers[i];
    const result = element*element;
    numbersDouble.push(result);
}
console.log(numbersDouble);

//way by map

const age = [20, 15, 21, 22, 4, 2];
const result = age.map(function(elements){
    // console.log(elements*elements); //this line gives the doubled value individually
    return elements*elements;
})
console.log(result);

const bigger = age.filter(x=> x>5);
console.log(bigger);

// const result2 = numbers.map(elements=> elements*elements); //shortcut way by arrow function
console.log(result);