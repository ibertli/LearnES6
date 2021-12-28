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
// frined.getGreeting()方法的[[HomeObject]]属性值是friend，friend的原型是person，所以：
// friend.getGreeting() 等价于 person.GetGreeting.call(this)
