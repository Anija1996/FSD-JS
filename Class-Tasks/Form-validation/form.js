const form=document.getElementById("form");
const user=document.getElementById("user");
const email=document.getElementById("email");
const phone=document.getElementById("phone");
const pswd=document.getElementById("pswd");
const conf=document.getElementById("conf");
const final=document.getElementById("final");
const strength=document.getElementById("strength");

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const phoneRegex = /^[0-9]{10}$/;
const strongPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
const mediumPasswordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/;

//Helper Functions
function showError(fieldId,message){
    document.querySelector(`#${fieldId}-error`).textContent=message;
}

function clearError(fieldId){
    document.querySelector(`#${fieldId}-error`).textContent="";
}

//Password strength
    function passwordStrength(){
        if(strongPasswordRegex.test(pswd.value)){
            strength.textContent="Strong password";
            strength.className="text-success";
        }
        else if(mediumPasswordRegex.test(pswd.value)){
            strength.textContent="Medium strength password";
            strength.className="text-warning";
        }
        else{
            strength.textContent="Weak password";
            strength.className="text-danger";
        }
    }


//Username
function userName(user){
    user.classList.remove("is-valid", "is-invalid");
    if(user.value.trim().length===0){
        showError("user","Please enter your name");
        user.classList.add("is-invalid");
        return false;
       
    }
    else if(user.value.trim().length<3){
        showError("user","Minimum 3 characters required");
        user.classList.add("is-invalid");
        return false;

    }
    else{
        clearError("user");
        user.classList.add("is-valid");
        return true;
    }
}

//Email
function EmailID(email){
    email.classList.remove("is-valid", "is-invalid");

    if(email.value.trim().length===0){
        showError("email","Please enter an email ID");
        email.classList.add("is-invalid");
        return false;

    }
    else if(!emailRegex.test(email.value.trim())){
        showError("email","Invalid format");
        email.classList.add("is-invalid");
        return false;

    }
    else{
        clearError("email");
        email.classList.add("is-valid");
        return true;
    }
}

//Phone number
function phoneNumber(phone){
    phone.classList.remove("is-valid", "is-invalid");

    if(phone.value.trim().length===0){
        showError("phone","Please enter a phone number");
        phone.classList.add("is-invalid");
        return false;

    }
    else if(!phoneRegex.test(phone.value)){
        showError("phone","Not a valid phone number");
        phone.classList.add("is-invalid");
        return false;

    }

    else{
        clearError("phone");
        phone.classList.add("is-valid");
        return true;
    }
}

//Password
function password(pswd){
    pswd.classList.remove("is-valid", "is-invalid");

    if(pswd.value.length===0){
        showError("pswd","Please enter a password");
        pswd.classList.add("is-invalid");
        return false;

    }
    else if(pswd.value.length<6){
        showError("pswd","Minimum 6 characters required");
        pswd.classList.add("is-invalid");
        return false;

    }
    else{
        clearError("pswd");
        pswd.classList.add("is-valid");
        passwordStrength(); 
        return true;
    }
    
}

//Confirm Password
function confirmPassword(conf){
    conf.classList.remove("is-valid", "is-invalid");

    if(conf.value.trim().length===0){
        showError("conf","Please enter the confirm password");
        conf.classList.add("is-invalid");
        return false;

    }
    else if(conf.value.trim()!==pswd.value.trim()){
        showError("conf","Password does not match");
        conf.classList.add("is-invalid");
        return false;

    }
    else{
        clearError("conf");
        conf.classList.add("is-valid");
        return true;
    }
}



const valObj = [
    {field:user,fn:userName},
    {field:email,fn:EmailID},
    {field:phone,fn:phoneNumber},
    {field:pswd,fn:password},
    {field:conf,fn:confirmPassword}
];



valObj.forEach(item => {
    item.field.addEventListener('input', () => {
        item.fn(item.field);
    });
});

form.addEventListener('submit',(e)=>{
    e.preventDefault();

    userName(user);
    EmailID(email);
    phoneNumber(phone);
    password(pswd);
    confirmPassword(conf);
    let res=true;

    valObj.forEach(item => {
        const isvalid = item.fn(item.field); 
        if (isvalid === false) {
            res = false; 
        }
    });

   if (res === true) {
        final.innerHTML = "<i class='bi bi-check-circle-fill text-success me-1'></i> 🎉 Account created successfully 🎉";
        final.className = "border border-success alert-success rounded text-success p-2 mt-3 text-center fw-bold";
    }
    else{
        final.textContent="Please enter the correct details";
        final.className = "border border-danger rounded text-danger p-2 mt-3 text-center fw-bold";
    }
});



