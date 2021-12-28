let person = {
    getGreeting(){
        return "Hello"
    }
};

let frined = {
    getGreeting(){
        return super.getGreeting() + ", Hi"
    }
};

Object.setPrototypeOf(frined, person);

let relative = Object.create(frined);

console.log(person.getGreeting());
console.log(frined.getGreeting());
console.log(relative.getGreeting());
