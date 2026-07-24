//FUNCTION - Reusable block of code.

//Function without parameter

//Function declaration
// function greet() {
//     console.log("Hello! Welcome Back");
// }
// console.log("Hai");
//Function call
// greet();

//Fucnction with parameter

//Function parameter-name
// function displayName(name) {
//     console.log(name);
// }

// //Function argument-Anija, Sarath, Sathwik
// displayName("Anija");
// displayName("Sarath");
// displayName("Sathwik");

//Function with two parameters

// function displayName(fname,lname){
//     console.log("My first name is "+fname+ " and last name is "+lname);
// }
// displayName("Anija", "Sarath")

// Function with return statement

// function add(a,b,c) {
//    sum=a+b+c;
//     return sum;
// }
// result=add(10,20,30);
// // console.log("Result="+result);

// function assignmentSum(a,b) {
//     a+=10;
//     b*=20;
//     return [a,b];
// }
// result=assignmentSum(20,60);
// value1=result[0];
// value2=result[1];
// console.log("The value of a now is "+value1+" and the value of b now is "+value2);

//Function Expression

// const greet=function () {
//     console.log("Anija Sarath");
    
// }
// greet();

//Arrow function without parameter 

// const greet = () => {
//     console.log("Anija Sarath");
// }
// greet();

//Arrow function with parameter having only one statement inside function 

// const sum = (a,b) => a+b;
// result = sum(50,60);
// console.log("Result = "+result);

// const sum = (a,b) => {
//     a+=2;
//     b*=a;
//     return [a,b,a+b];
// }
// result = sum(12,20);
// console.log("Now \n"+"the value of a is "+result[0]+"\nthe value of b is "+result[1]+"\nthe sum of a and b is "+result[2]);

// const gradeCheck = (score) => {
//     if(score>=90) return "A";
//     if(score>=80) return "A+";
//     if(score>=70) return "B";
//     if(score>=60) return "B+";
//     if(score>=50) return "C";
//     if(score>=40) return "C+";
//     return "E"
// }
// result = gradeCheck(75);
// console.log("Your grade is "+result);
// if(
//     (result=="A+") || 
//     (result=="A") || 
//     (result=="B") || 
//     (result=="B+") || 
//     (result=="C+") || 
//     (result=="C")) {
//    console.log("Passed!\nCongratulations!!\nEligible for Higher Studies!!!");
// }
// else{
//     console.log("Failed!\nBetter luck next time!");
    
// }

const weekDay = (day) => {
    if(day==1) return "SUNDAY";
    if(day==2) return "MONDAY";
    if(day==3) return "TUESDAY";
    if(day==4) return "WEDNESDAY";
    if(day==5) return "THURSDAY";
    if(day==6) return "FRIDAY";
    if(day==7) return "SATURDAY";
    return "Invalid Week Day"
}
result = weekDay(5);
console.log("The day is "+result);
