const cat = {
    name: "kitty",
    sound: function () {
        console.log("야옹~");
    },
};

const dog = {
    name: "Louis",
    sound: function () {
        console.log("멍멍!");
    },
};

cat.sound();
dog.sound();

// 생성자 함수
function Animals(name) {
    this.name = name;
    this.sound = function () {
        console.log(`${this.name} 소리가 납니다.`);
    };
}

// 인스턴스를 만들기
const tiger = new Animals("어흥~~~");
const sparrow = new Animals("짹짹");

tiger.sound();
sparrow.sound();

console.log(Animals);

// class
class Animal2 {
    constructor(name) {
        this.name = name;
    }

    sound() {
        console.log(`${this.name} 소리가 납니다.`);
    }
}

const lion = new Animal2("King~~~");

lion.sound();

function Friends(name, age) {
    this.name = name;
    this.age = age;
    this.sayHello = function () {
        console.log(`Hello ${name}`);
    };
}

const ghost = new Friends("Ghost", 1000);
console.log(ghost);
ghost.sayHello(); // 'Hello, Ghost'

// class : 똑같은 객체를 빨리 만들기 위해서 템플릿을 만드는 것.
class Friends2 {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    sayHello() {
        console.log(`Hello, ${this.name}`);
    }
    sayAge() {
        console.log(`Friend's age is ${this.name}`);
    }
}

const user1 = new Friends2("Irangi", 500);
const user2 = new Friends2("Horangi", 30);

console.log(user1, user2);
user1.sayHello();
