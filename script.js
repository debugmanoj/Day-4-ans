// Do the below programs in anonymous function & IIFE


// Q1. Print odd numbers in an array

// odd program using function

var a=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17];
function odd(values){
    console.log("I am normal function")
    for(var i=0;i<values.length;i++){
        if(values[i]%2!=0){
            console.log(values[i])
        }
        
    }
}
odd(a)

//odd program using arrow function 

var b=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17];
var odd=(values)=>{
    console.log("I am arrow-function")
    for(var i=0;i<values.length;i++){
        if(values[i]%2!=0){
            console.log(values[i])
        }
        
    }
}
odd(b)

//odd program using IIFE function

var c=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17];
(function(values){
    console.log("I am IFFE function")
    for(var i=0;i<values.length;i++){
        if(values[i]%2!=0){
            console.log(values[i])
        }
        
    }
})(c)

//Q2.SUm of all numbers in array

//using function 

var d=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17];

function sum(values){
    var sum=0;
    console.log("I am sum of array using function")
    for(var i=0;i<values.length;i++){
        sum+=values[i];
    }
    return sum;
}
console.log(sum(d));

//using IIFE function 
var e=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17];
(function(values){
    var sum=0;
    console.log("I am sum of array using IIFe functions ");
    for(var i=0;i<values.length;i++){
        sum+=values[i];
    }
    console.log(sum)

})(e)


//using arrow function
var f=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17];
var a=(values)=>{
    var sum=0;
    console.log("I am sum of array using arrow functions ");
    for(var i=0;i<values.length;i++){
        sum+=values[i];
    }
    return sum;

}
console.log(a(f));

//Return all the palindromes in an array

//using function

var a=["hi","hello","palindrome","Not","you"]
function palin(b){
    for(var a=0;a<b.length;a++){
        
    }

}
palin(a)