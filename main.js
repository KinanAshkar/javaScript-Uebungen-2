//  -7-
/* Create a new string adding “Py” in front of a given string. If the given string begins with “Py” then print the original string 
 */
let str = "kinan";
let prefix = "Py";
if(str.substring(0,2)== "Py"){
   console.log(str);
}else{
   console.log(`${prefix}${str}`);
} 

// -8-
/* Calculate the sum of the two given integers. If the two values are the same, then print triple their sum  */

let x = 4;
let y = 3;
let sum = x + y; 
if(x == y){
   console.log(sum**3);
}else{
   console.log(sum);
} 

-9-
/* Check if three given integer values are in the range 50 to 99 (inclusive). Print true if one or more of them are in the range  */

   let a = 39;
   let b = 76;
   let c = 100;
   if((a>50) && (a<99)){
       console.log(true);
   }else{
       console.log(false);
   }
   if((b>50) && (b<99)){
       console.log(true);
   }else{
       console.log(false);
   }
   if((c>50) && (c<99)){
       console.log(true);
   }else{
       console.log(false);
   } 

// -10-
/* Pie. Create a function that determines whether or not it’s possible to split a pie fairly given these three parameters:
Total number of slices.
Number of recipients.
How many slices each person gets.
Examples:
equalSlices(11, 5, 3) ➞ false // 5 people x 3 slices each = 15 slices > 11 slices
equalSlices(8, 3, 2) ➞ true
equalSlices(8, 3, 3) ➞ false
equalSlices(24, 12, 2) ➞ true  */

function equalSlices(slices,persons,slicesFürPersons){
   return(slicesFürPersons*persons<=slices)
}
console.log(equalSlices(8,3,2));
console.log(equalSlices(8, 3, 3));
console.log(equalSlices(24, 12, 2));

// andere Lösung
const equalSlices = (numberOfSlices,numberOfRecipients,slicesEachPerson)=>{
   if(slicesEachPerson*numberOfRecipients<= numberOfSlices){
       return true;
   }else{
       return false;
   }
   // return slicesEachPerson*numberOfRecipients<= numberOfSlices;
}
console.log(equalSlices(8,3,2));
console.log(equalSlices(8, 3, 3));
console.log(equalSlices(24, 12, 2)); 

// -11-
/* XO Create a function that takes a string, checks if it has the same number of ’x’s and ’o’s and returns either true or false.
Notes:
Return a boolean value (true or false).
The string can contain any character.
When neither an x nor an o is in the string, return true.
Examples:
XO(“ooxx”) ➞ true
XO(“xooxx”) ➞ false  */

function XO(str){
   let y = 0;
   let z = 0;
   for(let i = 0; i<str.length; i++){
       if(str[i] == "y") y++;
       if(str[i] == "z") z++
   }
   return y == z;
}
console.log(XO("yyzz"));
console.log(XO("hhyy")); 

// -12-
/* Where’s Waldo? Create a function that takes a string and returns true if Waldo is found, and false if he’s not.
Examples:
isWaldoHere(“is there wal here ?“) ➞ false
isWaldoHere(“I found you Waldo!“) ➞ true  */

function isWaldoHere(str){
   return str.toLowerCase().includes("kinan")
}
console.log(isWaldoHere("hallo kinan"));
console.log(isWaldoHere("hallo waldo , how are you"));

// andere Lösung
const isWaldoHere = (str) => {
   if(str.toLowerCase().includes("waldo")){
       return true;
   }else{
       return false;
   }
}
console.log(isWaldoHere("hey, how are you Waldo?"));
console.log(isWaldoHere("hey, how are you ?"));
