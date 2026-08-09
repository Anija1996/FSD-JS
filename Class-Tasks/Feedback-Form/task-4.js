let card=document.querySelector("#card");
let title=document.querySelector("#title");
let name=document.querySelector("#name");
let count=document.querySelector("#count");
let highlightBtn=document.querySelector("#highlightBtn");
let form=document.querySelector("#feedbackForm");
let msg=document.querySelector("#msg");

//Change content
title.textContent="Student Feedback Form";


//highlight card
highlightBtn.addEventListener('click',(e)=>{
    e.stopPropagation();
    card.classList.toggle("highlight");
});

//Input event
name.addEventListener('input',()=>{
    count.textContent=`${name.value.length}/20 characters`;

    if(name.value.length>15){
        count.style.color="red";
    }
    else{
        count.style.color="black";
    }
});

//Submit event
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    if(name.value.length==0){
        msg.textContent="Please enter your name";
        msg.style.color="red";
    }
    else{
        msg.textContent=`Thank you, ${name.value}! Your feedback was submittted`;
        msg.style.color="green";
    }
});

//event bubbling
card.addEventListener('click',()=>{
    console.log("Card clicked");
    
})



