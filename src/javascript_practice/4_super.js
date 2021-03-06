//ES6 JS Classes 

class User {
    constructor(username, password) {
        this.name = username;
        this.password= password;
        this.type = "Trial User"
    }
//Method 1

greet() {
    console.log('Welcome back, ' + this.name);

}
//method 2
status() {
    console.log('Current status: ' + this.type);
}
}

let anonDude = new User("anonymous");

    anonDude.greet();
    anonDude.status();


   // SUPER 
class BronzeLevelUser extends User {
//we add the ccinfo property to the user here. 
constructor(username, password, ccinfo) {
    super(username, password);
    this.type = "bronze User";
    this.ccinfo = ccinfo;

}


getInfo() {
    console.log(this.username, this.password, this.type, this.ccinfo);
}


}

let bronzeGuy = new BronzeLevelUser("Bronze Dude", 'bronze7890', "4242424242424242424");
    bronzeGuy.greet();
    bronzeGuy.status();
    console.log(bronzeGuy);