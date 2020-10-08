const numbers = [1, 5, 6, 4, 3, 9, 10];
for(let i=0; i<numbers.length; i++){
    // console.log(numbers[i]);
    if(numbers[i]==4){
        break;
    }
    console.log(numbers[i]);
}

for(let i= 0; i<numbers.length;i++){
    if(numbers[i]==4){
        continue;
    }
    console.log(numbers[i]);
}