//ES6 JS Classes 

class User {
    constructor(name){
        this.name = name;
        this.type ="Trial User"
    }
    //method 1 
    greet(){
        console.log('welcomeback, '+this.name);
    }
    //method 2
    status(){
        console.log('current status: '+ this.type);
    }
}

//Instance of the class/new object

let anonDude = new User("Anonymous dude");

//we can now use the instance and the . operator
// to access the 2 methods.

anonDude.greet();
anonDude.status();

//Another instance of the class 

let anonLady = new User("Anonymous lady");
anonLady.greet();
anonLady.status();

// another instance of the class 

let jeff = new User("jeff");
jeff.greet();
jeff.status();
