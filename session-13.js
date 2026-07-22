//JavaScript - Synchronous, Single-threaded, Loosely-typed

// VARIABLES - Data storage
// var, let and cosnt

//var - allows redeclaration and reassigning
// var data=10;
// console.log(data);

//let - allows reassigning but redeclaration not possible
// let data1="Anija";
// console.log(data1);

//const - reassigning and redeclartion not possible
// const data2=true;
// console.log(data2);


//DATATYPES

//1.Number
// let a=1;
// console.log(a, typeof a);

//2.String
// let b="Sarath";
// console.log(b, typeof b);

//3. Boolean
// let c=true;
// console.log(c, typeof c)

//4.Object
// let d={
//     name: 'Sathwik',
//     class: 'E86',
//     mob: 123456,
//     isMentor: "Karthik"
// }
// console.log("My class is "+d.class +" and my mentor is "+ d.isMentor);

//5.Array
// let e=[1,2,3,4,true,"Anija",10];
// console.log(e,typeof e); //type is object due to its value index pair, which is similar to object key-value pair

//6.Undefined
// let data;
// console.log(data,typeof data);

//7.null
// let value=null;
// console.log(value, typeof value); //type is objet which is a bug in javascript

// Two types of datatypes

//1. Primitive datatypes - can store one value at a time, value is stored
//number, string, boolean

//2. Non-primitive datatypes - can store more than one value, reference is stored
// Object, array, function

// Function - a block of code
// var data = {name:'Sarath'}
// var newData=data; // here the reference(memory address) of data is stores. So, even after assigning , newData has the value of data
// data.name='Sathwik'
// console.log(data, newData);

// Type Conversion - Converting a data from one datatype to another forcefully

// let age=Number("35");
// console.log(typeof age);

// console.log(Number("abc")); //NaN
// console.log(Number("")); //0

// console.log(Number(true)); //1
// console.log(Number(false)); //0

// console.log(typeof String(true)); //string
// console.log(typeof null); //object

// console.log(String(undefined)); //undefined
// console.log(String(null)); //null


// console.log(Boolean(1)); //true
// console.log(Boolean(0)); //false

// console.log(typeof Boolean("true")); //Boolean
// console.log(typeof Boolean("false")); //Boolean

// console.log(typeof Boolean("1")); //Boolean

// console.log( Boolean("11")); //Boolean //true

// console.log(Boolean("null")); //true
// console.log(Boolean("")); //false
// console.log(Boolean("NaN")); //true
// console.log(Boolean("undefined")); //true

// Type Coersion
// console.log("10"+2);//str 102
// console.log("10"+25);//str 1025
// console.log("10"+2+3);//str 1023
// console.log("10"+"2"+"6");//str 1026
// console.log("true"+2+3);//str true23

// console.log("10"-2); // 8 num

// console.log("5"*2); //10 num
// console.log("10"/2); //5 num

// Operators

// Arithmetic Operators - +,-,*,/,%,**

// console.log(10+5); //15
// console.log(10-5); //5
// console.log(10*5); //50
// console.log(10/5); //2
// console.log(11%5); //1
// console.log(10**5); //100000 - 10^5

//Comparison Operators - >,<,>=,<=,==,===,!==

// console.log(10>5); //true
// console.log(10<5); //false
// console.log(10>=5); //true
// console.log(10<=10); //true
// console.log(10=="10"); //true
// console.log(10==="10"); //false

// Assignment Operators +=,-=,*=,/=

// let a=50;
// a+=10
// console.log(a); //60

// let a=50;
// a-=10
// console.log(a); //40

// let a=50;
// a*=10
// console.log(a); //500

// let a=50;
// a/=10
// console.log(a); //5

// Logical Operators - &&,||,!

// console.log(true&&false); //false
// console.log(true||false); //true
// console.log(10>5 && 10<3); //false
// console.log(10>5 || 10<3); //true
// console.log(!true); //fasle
// console.log(!false); //true

//Conditional Operators - if, if else, if else if(else-if ladder)

//if 
// let score=70;
// if(score>40)
// {
//     console.log("Passed");
    
// }
// console.log("All the Best!!!!!");

//if else

// let score=35;
// if(score>40){
//     console.log("Passed");
    
// }
// else{
//     console.log("Failed");
    
// }
// console.log("All the Best!!!!!");


// else if ladder

// let score=70;
// if(score>=90)
// {
//     console.log("A+");
    
// } else if(score>=80){
//     console.log("A");
    
// } else if(score>=70){
//     console.log("B+");
    
// } else if(score>=60){
//     console.log("B");
    
// }else if(score>=50){
//     console.log("C+");
    
// } else if(score>=40){
//     console.log(C);
    
// } else{
//     console.log("failed");
    
// }
// console.log("All the Best!!!!!");

// Switch Statements

// let day="Sunday";
// switch(day){
//     case "Monday":
//         console.log("Start of work week");
//         break;
//     case "Friday":
//         console.log("End of work week");
//         break;
//     case "Saturday":
//     case "Sunday":
//         console.log("Weekend");
//         break;
//     default:
//         console.log("Invalid Week Day"); 
// }
// console.log("Have A Nice Day!");













