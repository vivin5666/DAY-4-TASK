//! Task 1
//! anonymous & IIFE function

//! a) print odd numbers in an array [1,2,3,4,5,6,7,8,9,10]
//! anonymous function

/*var result =[];
var a=function (arr){
  for(var i=0;i<arr.length;i++){
    if(arr[i]%2!==0)
    {
         result.push(arr[i])
    }
  }
  return result
}
console.log(a([1,2,3,4,5,6,7,8,9,10]));
*/

//! IIFE function
/* var result = [];
(function (arr) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      result.push(arr[i]);
    }
  }
  console.log(result);
})([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
*/

//! b) Convert all the strings to title caps in a string array ["convert strings To little Caps"]
//! anonymous function
/* function a (str) {
	str = str.toLowerCase().split(' ');
	for (let i = 0; i < str.length; i++) {
		str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
	}
	return str.join(' ');
}
console.log(a ("convert strings To little Caps"));
*/

//! IIFE function
/* var a = [];
(function (str) {
	str = str.toLowerCase().split(' ');
	for (let i = 0; i < str.length; i++) {
		str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    a.push(str[i]);
    
	}
	console.log(a.join(' '));
})("convert strings TO little Caps");
*/

//! c) Sum of all numbers in an array [1,2,3,4,5,6,7,8,9,10]
//! anonymous function
 /* function a (array){
  var sum = 0;
  for(var i = 0 ; i< array.length ; i++){
     sum = sum + array[i];
   }
   return sum;
}
console.log(a([1,2,3,4,5,6,7,8,9,10]));
*/

//! IIFE function
 /* (function(array){
  var sum = 0
       for(var i = 0 ; i< array.length ; i++){
          sum = sum + array[i];
        }
        console.log(sum);
  })([1,2,3,4,5,6,7,8,9,10])
  */

  //! d) Return all the prime numbers in an array
  //! anonymous function
  /* var array = [2, 3, 4, 5, 6, 7, 8, 9, 10];
  function isPrime(num) {
    for (let i= 2; num >i; i++) {
      if (num % i == 0) {
        return false;
      }
    }
    return num > 1;
  }

  console.log(array.filter(isPrime));
  */

//! IIFE function
/* (function(numArray){
     numArray = numArray.filter((number) => {
       for (var i = 2; i <= Math.sqrt(number); i++) {
         if (number % i === 0) return false;
       }
       return true;
     });
     console.log(numArray);
 })([2,3,4,5,6,7,8,9,10])
 */

 //! e) Return all the palindromes in an array
 //! anonymous function
 /* var a = function(arr){
  var resu= [];
  for (var i=0; i<arr.length;i++){
  var data=arr [i].split("").reverse().join("");
  if  (data===arr[i]){
   resu.push(arr[i]);
  }
  }
  return resu;
  }
 console.log (a(["mom","dad","data","wow"]));  
*/

//! IIFE function
/* function p (arr){
  var resu= [];
  for (var i=0; i<arr.length;i++){
   var data=arr [i].split("").reverse().join("");
   if  (data===arr[i]){
   resu.push(arr[i]);
  }
  }
  return resu;
  }
 console.log (p(["mom","dad","data","wow"]));
 */

  //!  f) Return median of two sorted arrays of the same size
  //! anonymous function
 /* const arr1= [1,3,5,7];
 const arr2=[2,4,6,8];
 var m = function(arr1,arr2){
   let arr= [...arr1, ...arr2]
   arr.sort((a,b)=>a-b)
   let n= arr.length
 if(n%2===0){
   return((arr[n/2]+arr[n/2-1])/2)
 } else{
   return[arr.Math.floor(n/2)];
 }
 }
 console.log(m(arr1,arr2))
 */

 //! IIFE function
 /* (function (arr1, arr2) {
  var arr3 = [...arr1, ...arr2];
  arr3.sort((a, b) => a - b);
  var l = arr3.length / 2;
  if (arr3.length % 2 == 0) {
      var median = ((arr3[l - 1] + arr3[l]) / 2);
      console.log(`${median}`);
  }
  else {
      console.log(`${arr3[l - 0.5]}`);
  }

})([1, 2, 5, 3, 6], [9, 9, 5, 7, 10]);
*/

//! g) Remove duplicates from an array
//! anonymous function
/* var A = [1,1,2,2,3,4,5,6,6]
function dup(array){
let dup = [...new Set(array)];
console.log(dup);
} dup([1,1,2,2,3,4,5,6,6]);
*/

 //! IIFE function
 /* (function dup(array){
  let dup = [...new Set(array)];
  console.log(dup);
  }) ([1,1,2,2,3,4,5,6,6]);
*/

//! h) Rotate an array by k times
//! anonymous function
/* var ab= function(arr,k){
  for(var i=0; i<k; i++){
    arr.push(arr[i])
  }for(var i=0; i<k;i++) {
    arr.shift()
 } return(arr)
} 
console.log(ab([1,2,3,4,5],4))
*/

//! IIFE function
/* const arr=[1,2,3,4,5];
const k=3;
(function (arr,k){
  for(var i=0; i<k; i++){
    arr.push(arr[i])
  }for(var i=0; i<k;i++) {
    arr.shift()
 }console.log(arr);
}) (arr,k)
*/


//! Task 2
//! arrow function

//! a) print odd numbers in an array [1,2,3,4,5,6,7,8,9,10]
/*  var result =[];
 var odd=(arr)=>{
  for(var i=0;i<arr.length;i++){
    if(arr[i]%2!==0)
    {
         result.push(arr[i])
    }
  }
  return result
}
console.log(odd([1,2,3,4,5,6,7,8,9,10]));
*/


//! b) Convert all the strings to title caps in a string array ["convert strings To little Caps"]
//! arrow function
/*  var a = (str) => {
  str = str.toLowerCase().split(' ');
  for (var i = 0; i < str.length; i++) {
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
  } 
  return str.join(' ');
}  
console.log(a("convert strings To little Caps")); 
*/

//! c) Sum of all numbers in an array [1,2,3,4,5,6,7,8,9,10]
//! arrow function
/* var a = (array)=>{
  var sum = 0;
       for(var i = 0 ; i< array.length ; i++){
          sum = sum + array[i];
        }
        return sum;
        }
        console.log(a([1,2,3,4,5,6,7,8,9,10]));
  */      

//! d) Return all the prime numbers in an array
//! arrow function
/* var numArray = [2, 3, 4, 5, 6, 7, 8, 9, 10];
numArray = numArray.filter((number) => {
  for (var i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) return false;
  }
  return true;
}); console.log(numArray);
*/

//! e) Return all the palindromes in an array
//! arrow function
/* var a = (arr)=>{
  var resu= [];
  for (var i=0; i<arr.length;i++){
 var data=arr [i].split("").reverse().join("");
 if  (data===arr[i]){
 resu.push(arr[i]);
 }
  }
  return resu;
  }
  console.log (a(["mom","dad","data","wow"]));
  */









