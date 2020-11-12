// ** VARIABLES **

//var can be used anywhere but is often ignored as it can be re-used throughout the code which can cause problems.

var man;
var man; //this would be allowed as the same name can be declared more than once.

//const can only be declared once and its value cannot change once set.
const boy = "i'm a boy";
//const boy = "i'm a big boy";  will not work as const has already been defined.

//let allows the value to be updated after the variable has been declared.
let girl = "i'm a girl";
girl = "i'm a big girl";

// ** ARITHMETIC **

let chickens = 10;
chickens = chickens - 2;
chickens = chickens + 12;
chickens = chickens * 2;
chickens = chickens / 4;

// ** STRING CONCATENATION **
const str1 = 'Will the real Slim Shady';
const str2 = str1.concat(' ', 'PLEASE STAND UP!');

//Better way because with concat() you need to make sure its a string or you will receive an unexpected behavior

let str3 = "Bow wow wow yippy yo yippy yay ";
str3 += "bow wow wow yippy yoyoyoyo";

// ** TRUTHY FALSY **
const age = 17;

if (age < 18) {
    console.log(`Enjoy the prom!!!!`);
} else if (age <= 14) {
    console.log(`You're too young to be here`);
} else {
    console.log(`You should not be here`);
}

// ** ARRAYS **
const ingredients = ["milk", "eggs", "chocolate chips", "flour"];

//Output one of the items
console.log(ingredients[2]);

//Add item to array
ingredients.push("vanilla");

//Amount of items in the array
console.log(ingredients.length);

// ** OBJECTS **
const GOAT =  {
    name: "Michael Jordan",
    team: "Chicago Bulls",
    championships: 6,

    //Display property
    whatTeam: function() {
        console.log(this.team);
    }
};

GOAT.whatTeam();

//Add property to object
GOAT ['retirement'] = 2003;

console.log(GOAT);

//Delete property from object
delete GOAT.team;
console.log(GOAT);

// ** MATH METHOD **
let a = 23.34234862378456238934534;
let b = 18.98;

console.log(Math.floor(a));
console.log(Math.floor(b));

// ** STRICT MODE **
//Uncaught ReferenceError: assignment to undeclared variable y

function testFunc() {
  "use strict"
  name = 'TIMMY!!';
}
testFunc()

