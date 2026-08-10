// classList 
// ----------
//  Property of an HTML Element. It contains all the CSS classes that are assigned to that Element.
// It is the list of CSS classes attached to an HTML element and JS uses it to add remove or toggle those classes
//classList lets us add, remove or toggle CSS classes using JS.

// classList.add()
//----------------
// Syntax: 
// Element.classList.add("className");


// let btn=document.getElementById("Btn");
// let heading=document.getElementById("heading");
// btn.addEventListener('click',()=>{
//     heading.classList.add("red");
// });

// let btn=document.getElementById("btn");
// let heading=document.getElementById("heading");
// btn.addEventListener('click',()=>heading.classList.add("red"));

// let btn=document.getElementById("btn");
// let heading=document.getElementById("heading");
// btn.addEventListener('click',()=>heading.classList.add("big"));

// let btn=document.getElementById("btn");
// let para=document.getElementById("para");
// btn.addEventListener('click',()=>para.classList.add("highlight"));

// let btn=document.getElementById("btn");
// btn.addEventListener('click',()=>btn.classList.add("round"));

// let btn=document.getElementById("btn");
// let heading=document.getElementById("heading");
// btn.addEventListener('click',()=>{
//     heading.classList.add("red");
//     heading.classList.add("big");
//     heading.classList.add("center");
// });




//classList.remove()
//------------------

//TASK 1
// let btn=document.getElementById("btn");
// let heading=document.getElementById("heading");
// btn.addEventListener('click',()=>heading.classList.remove("red"));

//TASK 2
// let btn=document.getElementById("btn");
// let heading=document.getElementById("heading");
// btn.addEventListener('click',()=>heading.classList.remove("big"));

//TASK 3
// let btn=document.getElementById("btn");
// let heading=document.getElementById("heading");
// btn.addEventListener('click',()=>heading.classList.remove("center"));


//TASK 4
// let btn=document.getElementById("btn");
// let heading=document.getElementById("heading");
// btn.addEventListener('click',()=>heading.classList.remove("red","big"));


//classList.toggle
// TASK 5
// let btn1=document.getElementById("btn1");
// let heading=document.getElementById("heading");
// btn1.addEventListener('click',()=>heading.classList.toggle("red"));

// TASK 6
// let btn1=document.getElementById("btn1");
// let heading=document.getElementById("heading");
// btn1.addEventListener('click',()=>heading.classList.toggle("big"));

// TASK 7
// let btn2=document.getElementById("btn2");
// let para=document.getElementById("para");
// btn2.addEventListener('click',()=>para.classList.toggle("highlight"));

// TASK 8
// let btn3=document.getElementById("btn3");
// btn3.addEventListener('click',()=>btn3.classList.toggle("round"));

//classList.contains()

//TASK 9
// let heading=document.getElementById("heading");
// const res = heading.classList.contains("red");
// if(res==true){
//     console.log("Red class exists");
    
// }
// else{
//     console.log("Red class does not exists")
// }

// TASK 10
// let btn=document.getElementById("btn1");
// const res = btn.classList.contains("round");
// if(res==true){
//     console.log("Round class found");
    
// }
// else{
//     console.log("Round class not found")
// }

// //TASK 11
// let heading=document.getElementById("heading");
// const res = heading.classList.contains("big");
// if(res==true){
//     console.log("Heading is big");
    
// }
// else{
//     console.log("Heading is not big");
// }

//TASK 12
// let para=document.getElementById("para");
// const res = para.classList.contains("highlight");
// if(res==true){
//     console.log("Paragraph is highlighted");
    
// }
// else{
//     console.log("Paragraph is not highlighted")
// }

