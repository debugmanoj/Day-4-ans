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

//Q3.SUm of all numbers in array

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

//using anonymous function



const groceryshop =[{item: "Apple" , price: 25, category: "fruits"},{item: "salt" ,price: 50, category: "misc"},{item : "tomato" , price: 129, category:" nvegetables " },]
//!without destructuring
//!with destructuring
const [ {item,price,secondobject},items]= groceryshop
console. log(item);
console. log(price);
console.log(items.item);

const arr=["guvi"]

console.log("I am in palindrome question using anonymous function");
var a=function(palin){
    var result=[]
    for(let i=0;i<palin.length;i++){
        let b=palin[i].split("").reverse().join("");
        if(b===palin[i]){
            result.push(b);
        }
    }
    return result
}
console.log(a(["manoj","kumar","dad"]));

console.log("I am in palindrome question using IIFE function");

(function(palin){
    var result=[]
    for(let i=0;i<palin.length;i++){
        let b=palin[i].split("").reverse().join("");
        if(b===palin[i]){
            result.push(b);
        }
    }
    console.log(result);
})(["manoj","kumar","dad"])
console.log("I am in palindrome question using arrow function");
var a=((palin)=>{
    var result=[]
    for(let i=0;i<palin.length;i++){
        let b=palin[i].split("").reverse().join("");
        if(b===palin[i]){
            result.push(b);
        }
    }
    return result
})
console.log(a(["manoj","kumar","dad"]));
var arr1=[1,3,5,7]
var arr2=[2,4,6,8]
var arr3=[...arr1,...arr2]
arr3.sort()
console.log(arr3);
var median=(arr3.length/2)-1
console.log(arr3[median]);
var b=[10,20,30,40,50,60];
console.log(b);
var c=(function(arr){
    var k=3
    for(var i=0;i<k;i++){
        arr.push(arr[i])
    }
    for(var i=0;i<k;i++){
        arr.shift(arr[i])
    }
})
c(b);
console.log(b);