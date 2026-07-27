// const companyName="abc";
// function showCompanyName(){
//     console.log("Company name is ",companyName);    
// }
// showCompanyName();
// console.log(companyName);


// function showTotal(){
//     //Function scope
//     let total=500;
//     console.log("Function Inside, Total = ",total);    
// }
// showTotal();
// let total=1000;
// console.log("Function outside, Total = ",total);

// if(100>20){
//     //Block scope
//     let city = "Banglore";
//     console.log("City : ",city);    
// }
// console.log("Outside City : ",city); //do not work because the varaible city is declared with let which is a block scope

// if(100>20){
//     //Block scope
//     var city = "Banglore";
//     console.log("City : ",city);    
// }
// console.log("Outside city : ", city); // this will work because the variable city is declared with var which is a global scope

// Closure
// let country="India";
// function outerFn(){
//     let state="Kerala";
//     function innerFn(){
//         console.log("Country : ",country);
//         console.log("State : ",state);
//     }
//     innerFn();
// }
// outerFn();

// function outer(){
//     function inner(){
//         let age=25;
//     }
//     inner();
//     console.log("Age : ",age);
// }
// outer();

// function counter(){
//     let count=0;
//     return function(){
//         count++;
//         console.log(count);        
//     }
// }
// const increment = counter();
// increment();
// increment();
// increment();

// function counter(){
//     let count=0;
//     return function(){
//         count++;
//         console.log(count);        
//     }
// }
// const increment1 = counter();
// const increment2 = counter();
// increment1();
// increment2();
// increment1();
// increment2();

//Hoisting
// console.log(score);// TDZ(Temporal Dead Zone)
// var score=98;
// console.log(score);


// console.log(score);// TDZ(Temporal Dead Zone)
// let score=98;
// console.log(score);

// console.log(score);// TDZ(Temporal Dead Zone)
// const score=98;
// console.log(score);

// greeting();
// function greeting(){
//     console.log("Hello!!!!!!!!");
    
// }

greeting();
const greeting = () => {
    console.log("Hello!!!!!!!!"); 
}