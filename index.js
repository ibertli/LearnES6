let node = {age: 12, name: "HH"},
age = "111",
name = "222";

function outputInfo(value){
    console.log(value === node);
}
// let {age, name} = node;
// ({name, age} = node);
outputInfo({name, age} = node);

console.log(age);
console.log(name);
