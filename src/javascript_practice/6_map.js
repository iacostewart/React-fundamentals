const instructors = [
    { name: 'Quency', specality: 'Quantum Mechanics' }, 
    {name: 'Kenn', specality: 'Norse Mythology'},
    {name: 'Paul', specality: 'Tuvan throat singing'},
    {name: 'Aaron', specality: 'Entomology'},
    {name: 'Carolyn', specality: 'Kung Fu'}
]

//lets say that we want to iterate over this array and pring just the names of the instructors. We'll use a for loop: 

let instructors_names = [];

for (let i = 0; i < instructors.length; i++) {
    instructors_names.push(instructors[i].name);
}
console.log(instructors_names);

//what do we have to do here: 

/*
1. Manage the index
2. Check the length 
3. increment. 
4.Create and empty array. 
5. Etc. 
*/
// we have to create an empty array to push the names into as we iterate through. this approach is fine for learning programming, but with ES5
// the .map() function came along to make things more sleek for common tasks like iterating through a collection: 

// Here    IT     IS.... 

//const instructorNames = instructors.map(instructor => instructor.name);
//console.log(instructorNames); 

// Notice a few things here.. 

/*
1. we create a variable called instructorNames that store the result as an array of objects. 
2. we are calling .map on the instructors aray: instructors.map 
3. the instructor parameter in .map can be named anyting, usially something related to the array. see how this is the exact same thing. 
*/
const instructorNamesTwo = instructors.map(i => i.name);
console.log(instructorNamesTwo);

// .map() and react 

/*
As stated, you'll see .map() everywhere. We recentally had a student be asked to do this for a job interview. the question came right from the MDN docs and was based on this code. study up!!
*/

let kvArray = [
    { key: 1, value: 10 },
    { key: 2, value: 20 },
    { Key: 3, value: 30 }

];

console.log(kvArray);

let reformattedArray = kvArray.map( obj => {
    let rObj = {};
    rObj[obj.key] = obj.value;
    console.log(rObj);
    
})