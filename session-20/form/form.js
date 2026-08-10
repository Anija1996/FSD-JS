const form=document.querySelector("#loginForm");
const username=document.querySelector("#username");
const email=document.querySelector("#email");
const pswd=document.querySelector("#pswd");
const conf=document.querySelector("#conf");
const btn=document.querySelector("#btn");
const last=document.querySelector("#last");
const regExp=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;


//helper function
function showError(fieldId, msg){

    const input = document.querySelector(`#${fieldId}`);
    const error = document.querySelector(`#${fieldId}-error`);

    error.textContent = msg;

    input.className = "form-control is-invalid";
}


function clearError(fieldId){

    const input = document.querySelector(`#${fieldId}`);
    const error = document.querySelector(`#${fieldId}-error`);

    error.textContent = "";

    input.className = "form-control is-valid";
}


    //Username
    function userName(username){
        if(username.value.trim().length===0){
            showError("username","Name required");
        }
        else if(username.value.trim().length<3){
            showError("username","Minimum 3 characters required");
        }
        else {
            clearError("username");
        }
    }

    //Email ID
    function emailId(email){
        if(email.value.trim().length===0){
            showError("email","Email ID required");
        }
        else if(!regExp.test(email.value.trim())){
            showError("email","Invalid ID");
        }
        else{
            clearError("email");
        }
    }

    //Password
    function password(pswd){
        if(pswd.value.trim().length===0){
            showError("pswd","Password required");
        }
        else if(pswd.value.trim().length<8){
            showError("pswd","Minimum 8 characters required");
        }
        else{
            clearError("pswd");
        }
    }

     //Confirm Password

    function confirmPassword(conf){
        if(conf.value.trim().length===0){
            showError("conf","Confirm password required");
        }
        else if(conf.value.trim() !== pswd.value.trim()){
            showError("conf","Password mismatch");
        }
        else{
           clearError("conf");
        }
    }
    
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    userName(username);
    emailId(email);
    password(pswd);
    confirmPassword(conf);
   
});


username.addEventListener('input',()=>{
    userName(username);
});

email.addEventListener('input',()=>{
    emailId(email);
});

pswd.addEventListener('input',()=>{
    password(pswd);
});

conf.addEventListener('input',()=>{
    confirmPassword(conf);
});


