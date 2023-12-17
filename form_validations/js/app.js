let fullName=document.querySelector('#fullname')
let nameError=document.querySelector('#nameMsge')
let fullNamevalid=true;
let pattern1=/^[a-zA-z][a-zA-z\s][a-zA-z]{4-20}$/

let email=document.querySelector('#email');
let emailMsge=document.querySelector('#emailMsge')
let emailmsgevalid=true;

let phNum=document.querySelector('#number');
console.log(phNum);
let numMsgevalid=true;
let numMsge=document.querySelector('#numberMsge')
console.log(numMsge);

let password=document.querySelector('#password')
let passwordError=document.querySelector('#passwordMsge');
let passwordvalid=true;

let checkpassword=document.querySelector('#cpassword');
let checkpasswordMsge=document.querySelector('#cpasswordMsge')
let checkpasswordvalid=true

function validate(){
  
    if(fullName.value=="" || pattern1.test(fullName.value)==false){
        fullNamevalid=false;
        nameError.innerHTML='&#x2716; eneter valid name';
        nameError.style.color='red'
    }else{
        fullNamevalid=true;
        nameError.innerHTML='&#x2714;';
        nameError.style.color='green'
    }

    if(email.value==""){
        emailmsgevalid=false;
        emailMsge.innerHTML='&#x2716; eneter valid email'
        emailMsge.style.color='red'
    }else{
        emailmsgevalid=true;
        emailMsge.innerHTML='&#x2714;';
        emailMsge.style.color='green'
    }
    
    if(phNum.value==""){
        numMsgevalid=false;
        numMsge.innerHTML=='&#x2716; eneter valid number'
        numMsge.style.color='red'
    }else{
        numMsgevalid=true;
        numMsge.innerHTML=='&#x2714;'
        numMsge.style.color='green'
    }

    if(password.value==""){
        passwordvalid=false;
        passwordError.innerHTML='&#x2716; enter valid password';
        passwordError.style.color='red'
    }else{
        passwordvalid=true;
        passwordError.innerHTML='&#x2714;';
        passwordError.style.color='green';
    }

    if(checkpassword.value==''){
        checkpasswordvalid=false;
        checkpasswordMsge.innerHTML='&#x2716; password should not empty'
        checkpasswordMsge.style.color='red'
    }else if(checkpassword.value!=password.value){
        checkpasswordvalid=false;
        checkpasswordMsge.innerHTML='&#x2716; password should match'
        checkpasswordMsge.style.color='red' 
    }else{
        checkpasswordvalid=true;
        checkpasswordMsge.innerHTML='&#x2714;';
        checkpasswordMsge.style.color='green'  
        console.log(checkpassword.value);
    }

    if(fullNamevalid==false|| passwordvalid==false ||checkpasswordvalid===false ||emailmsgevalid==false ||numMsgevalid==false){
        return false;
    }else{
        return true;
    }
    
}
function resetform(){
    nameError.innerHTML='';
    passwordError.innerHTML='';
    numMsge.innerHTML='';
    emailMsge.innerHTML='';
    checkpasswordMsge.innerHTML=''


}