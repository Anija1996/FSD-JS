// let nameInput=document.getElementById("nameInput");
// let output=document.getElementById("output");
// let count=document.getElementById("count");
// nameInput.addEventListener('input',()=>{
//     output.textContent=nameInput.value;
//     count.textContent=`${nameInput.value.length} characters`;
// }
// );


//TASK 2
// let message=document.getElementById("message");
// let count=document.getElementById("count");
// message.addEventListener('input',()=>{
//     count.textContent=message.value.length;
// });


// let text=document.getElementById("text");
// let output=document.getElementById("output");
// text.addEventListener("input",()=>{
//     output.textContent=text.value;
// })

// let text=document.getElementById("text");
// let output=document.getElementById("output");
// text.addEventListener("input",()=>{
//     output.textContent=text.value.length;
// })

// let form=document.getElementById("form");
// let input=document.getElementById("input");
// let heading=document.getElementById("heading");
// form.addEventListener("submit",(e)=>{
//     e.preventDefault();
//     if(input.value.length==0){
//          heading.textContent="Please enter your name";
//     }
//     else{
//         heading.textContent=`Welcome ${input.value}`;
   
//     }
// });


// let parent=document.getElementById("parent");
// let child=document.getElementById("child");
// parent.addEventListener('click',()=>console.log("Parent Clicked"));
// child.addEventListener('click',(e)=>{
//     e.stopPropagation();
//     console.log("Button Clicked")});

let btn=document.getElementById("btn");
let heading=document.getElementById("heading");
let count=0;
btn.addEventListener('click',()=>{
    count++;
    heading.textContent=`Clicked ${count} times`;
})

