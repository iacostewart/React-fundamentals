class User {
    constructor(name){
        this.name = name;
        this.type = "trial User"
    }
    //method 1
    greet(){
        console.log('Welcome back, ' + this.name);
    }
// method 2 
    status(){
        console.log('current status: ' + this.type);
    }
//method 3 
    ban(){
        console.log(this.name + ' You messed with the wrong Admin');
    }
}


// Extends
// when we use the extends keyword
class TrialUser extends User {
    trialEnding(){
        console.log('Your trial will be ending soon, ' + this.name + '-' + 'Would you like to join our program? we will sell only your childrens info..');
// so, when we use the extends keyword we are doing something that we, again, call subclassing. 
//this means that TrialUser class becomes a child of User, therfore inheriting all of its functions and properties. 

// 
    }

// Instance of User class 


}
class BannedUser extends TrialUser {
    banhammer(){
        console.log('you stole fizzy lifting drinks.. you get nothing.. good day sir.');


    }
}
let kickDude = new BannedUser("FranK");
let anonDude = new User("Anonymous");
    anonDude.greet();
    anonDude.status();

let trialUser = new TrialUser("paul");
    trialUser.greet();
    trialUser.trialEnding();
    trialUser.status();

