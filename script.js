var nameError = document.getElementById('name-error');
var emailError = document.getElementById('email-error');
var phoneError = document.getElementById('phone-error');
var passwordError = document.getElementById('password-error');
var ageError = document.getElementById('age-error');
var checkboxError = document.getElementById('checkbox-error');
var btnRegister = document.getElementById('registerbtn');

function validateName(){

    var name = document.getElementById('contact-name').value;
    
    if(name.length == 1){ 
        nameError.innerHTML = 'Fullname invalid';
        return false;
    }
    
    nameError.innerHTML = '';
    return true;
}

function validatePhone(){
    
    var phone = document.getElementById('contact-phone').value;
    
    if(phone.length == 0){
        phoneError.innerHTML = 'Phone invalid';
        return false;
    }
    
    if(!phone.match(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im)){
        phoneError.innerHTML = 'Phone invalid'
        return false;
    }
    
    if(phone.length == 11){
        phoneError.innerHTML = '';
        return true;
    }
}

function validateEmail(){
    var email = document.getElementById('contact-email').value;

    if(email.length == 0){
        emailError.innerHTML = 'Email invalid';
        return false;
    }

    if(!email.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)){
        emailError.innerHTML = 'Email invalid';
        return false;
    }
    emailError.innerHTML = '';
    return true;
}

function validatePassword(){
    var password = document.getElementById('contact-password').value;

    if(password.length < 5){
        passwordError.innerHTML = 'Password invalid';
        return false;
    }

    passwordError.innerHTML = '';
    return true;    
}

// Não sei fazer o da data

function validateCheckbox(){
    if(document.getElementById('checkbox-mark').checked){
        checkboxError.innerHTML = ''
    }
}

function registerOK(){

var IDofForm = "form";
var IDofDivWithForm = "formdiv";

document.getElementById(IDofForm).submit();
document.getElementById(IDofDivWithForm).style.visibility = "hidden"; 
}