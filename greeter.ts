class Student {
    fullName: string;
    constructor(public firstName, public middleInital, public lastName) {
        this.fullName = firstName + " " + middleInital + " " + lastName;
    };
};

interface Person {
    firstName: string;
    lastName: string;
};

function greeter(person: Person) {
    return "Hello, " + person.firstName + ' ' + person.lastName;
};

var user = new Student("Antoine", "CH.", "Demon-Chaine");

document.body.innerHTML = greeter(user);
