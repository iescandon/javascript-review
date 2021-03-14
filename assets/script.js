var name = "Jonah"; //string
var age = 10; //number
var isGoodBoy = true; //boolean
var friends = ["Cody", "Cooter", "Oliver"];

console.log(friends[1]); //use bracket notation to reference a specific index in the array

var jonahObj = {
    name: "Jonah",
    age: 10,
    isGoodPet: true,
    friends: ["Cody", "Cooter", "Oliver"]
}

console.log(jonahObj.age); //use dot notation to reference a specific key value pair
console.log(jonahObj.friends[2]);

var petsArray = [
    {
        name: "Jonah",
        age: 10,
        isGoodPet: true,
        friends: ["Cody", "Cooter", "Oliver"]
    },
    {
        name: "Riley",
        age: 12,
        isGoodPet: true,
        friends: ["Mia", "Crouton", "Bubba"]
    },
    {
        name: "Nino",
        age: 2,
        isGoodPet: false,
        friends: ["Mylo", "Snoopy", "Dotson"]
    },
    {
        name : "Cherries",
        age : 7,
        isGoodPet: true,
        friends: ["Margalo", "Joan", "Peggy"]
    },
    {
        name: "Charlie",
        age: 1,
        isGoodPet: false,
        friends: ["Billy", "Shilo", "Chaco"]
    },
    {
        name: "Buddy",
        age: 3,
        isGoodPet: false,
        friends: ["Joe", "Andy", "Broccoli"]
    },
]


for (var i = 0; i < petsArray.length; i++ ) {
// console.log(petsArray[i].name);
    if (petsArray[i].isGoodPet === true){
        console.log(petsArray[i].name)
    } else {
        console.log("Bad Pet!")
    }
}

petsArray.forEach(function(pet) {
    if (!pet.isGoodPet){
        console.log(pet.name)
    }
})

//All values are truthy unless they are defined as falsy (i.e., except for false , 0 , -0 , 0n , "" , null , undefined , and NaN ).



