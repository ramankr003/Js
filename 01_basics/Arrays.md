// arrays 
// Declaration of array in JS

const myArrays=[0, 1, 2, 15, 17, 5];

 //console.log(myArrays[4]);

 //another way  of Array Declaration In JavaScript

 const arr = new Array(5);

 // Arrays-> A neat way of storing a list of data items under a single variable name.

 // Arrays are generally described as "list-like objects"; they are basically single objects that contain multiple values stored in a list. Array objects can be stored in variables and dealt with in much the same way as any other type of value, the difference being that we can access each value inside the list individually, and do super useful and efficient things with the list, like loop through it and do the same thing to every value 


 const Shopping=["bread", "milk", "cheese", "hummus", "noodles"];

 //console.log(Shopping);

 /** In the above example, each item is a string, but in an array we can store various data types — strings, numbers, objects, and even other arrays. We can also mix data types in a single array **/


 const sequence = [1, 1, 2, 3, 5, 8, 13];
 const random = ["tree", 795, [0, 1, 2]];

 /** I can find the length of the array **/


 const shopping = ["bread", "milk", "cheese", "hummus", "noodles"];
console.log(shopping.length); 

// the length of the given array is 5

//Accessing and modifying array items


console.log(shopping[0]);

// returns "bread"

// You can also modify an item in an array by giving a single array item a new value. 
console.log(shopping[0]="Raman");
console.log(shopping);


//NOTE--> An Array inside an array is called a multidimensional array.You can access an item inside an array that is itself inside another array by chaining two sets of square brackets together

/** Methods of Array in JavaScript **/

//.push()-> it is basically is used for adding the data inside the array 

const cities = ["Manchester", "Liverpool"];

cities.push("Bangalore");

cities.push("Agra");

cities.push("Shikohabad");

console.log(cities);

//.pop()-->> it is basically is used for remove the element to the array, To remove the last item from the array.

cities.pop();
console.log(cities);

// indexOf()-->> it is basically is used for find the index of any element in the array.

const birds = ["Parrot", "Falcon", "Owl"];
console.log(birds.indexOf("Owl")); //  2
console.log(birds.indexOf("Rabbit")); // -1


// shift()-->> To remove the first item from an array

const Cities = ["Manchester", "Liverpool"];
Cities.shift();
console.log(Cities); // [ "Liverpool" ]


//






 