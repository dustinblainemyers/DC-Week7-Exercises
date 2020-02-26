class Parent {
    constructor(firstName, lastName, eyeColor, hairColor) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.eyeColor = eyeColor;
        this.hairColor = hairColor;

    };

    showInfo() {
        console.log(` First Name: ${this.firstName} 
                      Last Name: ${this.lastName} 
                      Eye Color: ${this.eyeColor} 
                      Hair Color: ${this.hairColor}`
        )
    }
}


class Child extends Parent {

    constructor(firstName,hairColor, Parent) {
        super(firstName,Parent, Parent, hairColor);
            this.lastName = Parent.lastName;
            this.eyeColor = Parent.eyeColor;

    };
}


class Person {

    constructor(name) {
        this.name = name;
        this.friends = [];
    }

    addFriend(friend) {
        this.friends.push(friend.name);
    }

    createGreeting(other) {
        this.other = other
        return `Yo ${other.name} ! from ${this.name}`
    }

    greet(other) {

        console.log(this.createGreeting(other));
    }

    lazyGreet(other) {
        setTimeout(()=> {
          console.log(`Yo ${other.name} ! from ${this.name}`);
        } ,2000,other);
    }
}

// const Mom = new Parent('Alice','Wong','brown','black');
// const Daughter = new Child("Ilene","blue",Mom);
// Mom.showInfo();
// Daughter.showInfo();

const Bill = new Person("Bill");
const Bob = new Person("Bob");

Bill.greet(Bob);
Bill.lazyGreet(Bob);
// Bill.addFriend(Bob);


// console.log(Bill.friends);

