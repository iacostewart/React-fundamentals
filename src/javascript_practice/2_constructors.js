class User {
    constructor(first, last, e) {
        this.f = first;
        this.l = last;
        this.email = e;
    }
}

var userOne = new User("paul", "O'Connor", "poconnor@elevenfifty.org");
console.log(userOne.first); //undefined
console.log(userOne.f); //paul 
console.log(userone.l);//O'Connor
console.log(userOne); //User {f: "Paul", l: "O'Conner", email: "poconnor@elevenfifty.org"}

// lets brake it down line by line. 



// constructor practice//

class Player {
    constructor(gamertag, gamerscore, age){
        this.tag = gamertag;
        this.score= gamerscore;
        this.a = age;
}
}
let playerOne = new User("IACO", "50,000", "36");
let playerTwo = new User("YountDog", "40,000", "37");
let PlayerThree = new User("PlutoQuack", "25000", "15");
let PlayerFour = new User("IacoPoudough", "30,000", "13");

console.log(palyerOne.tag);
console.log(playerTwo.tag);
console.log(playerThree.tag);
console.log(playerFour.tag);