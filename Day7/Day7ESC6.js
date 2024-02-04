// Higher Order Functions ( map(), filter(), reduce())

// filter()

let array = [1, 2, 3, 5, 90, 89, 6];

var newArray = array.filter((element)=>{
    return element > 3;
})
console.log(array);
console.log(newArray);

// map() --> accept callbacks and applies that function to each element of an array, then return a new array

const numbers = [1, 2, 3, 4];
const squares = numbers.map(number => number * number);
console.log(numbers);
console.log(squares); // Output: [1, 4, 9, 16]

// reduce() --> return one value of the array, accept 4 parameters (accumulator, current, index, array)

const addition = [1, 2, 3, 4];
const add = addition.reduce((accumulator, current)=>{
    return accumulator + current;
});
console.log(add); // Output: 10

// Destructuting  --> Destructuring in JavaScript is like a magic trick that lets you take out specific things
//                    from a box (like an array or an object) and give them their own names.
//                    It's a quick and cool way to work with lots of information without writing too much code!

let arkx = ["Khalid", "Brahim", "Othmane",["Ismail", "Soufiane"]];

let a = arkx [2];

console.log(a);

// Another Example

let myName = "Khalid";
let myFriendName = "Brahim";
[myName, myFriendName] = [myFriendName, myName];

console.log(myName);
console.log(myFriendName);


// Another Example

const arr = ["Simo", "Boba", "Flan"];
const [,...rest] = arr;

console.log(rest);


// Async/Await

/*
    Async
    -- Async before function mean this function return a promise
    -- Async and Await help in creating asynchronous promise behavior with cleaner style
*/

function getData(){
    return new Promise((resolved,rejected) => {
        let users =[1];
        if(users.length>0){
            resolved("User found :)");
        }else{
            rejected("No user found :(")
        }
        }
    );
}
getData().then(
    (resolvedValue) => console.log(resolvedValue),
    (rejectedValue) => console.log(rejectedValue)

)

