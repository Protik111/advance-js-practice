const student = [
    {name:"protik", id:1},
    {name:'rahman', id:2},
    {name:'rahmn', id:3},
    {name:'rah', id:4}

];
const names = student.map(x=> x.name);
console.log(names);
const ids = student.filter(x=> x.id===2);
console.log(ids);
const finds = student.find(x=> x.id>1);
console.log(finds);