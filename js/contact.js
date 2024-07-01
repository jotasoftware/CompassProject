let form = document.getElementById('form')
let btnForm = document.querySelector('form button')

form.addEventListener('input', check)
btnForm.addEventListener('click', buttonClick)

function check(e){
    let idInput = e.target.id
    let valueInput = e.target.value
    let validate = true;
    switch (idInput){
        case 'first-name':
            validate = validateName(valueInput)
            break;
        case 'last-name':
            validate = validateName(valueInput)
            break;
        case 'email-address':
            validate = validateEmailAddress(valueInput)
            break;
        case 'message':
            validate = validateMessage(valueInput)
            break;
    }
    if(!validate){
        if(e.target.style.borderColor != "red"){
            e.target.style.borderColor = "red"
        }
    }else{
        if(e.target.style.borderColor == "red"){
            e.target.style.borderColor = "#CECECE";
        }
    }   
    if(validateAll() && form.elements[4].classList.contains('form-section-button-disabled')){
        form.elements[4].classList.remove('form-section-button-disabled');
        form.elements[4].classList.add('form-section-button-activated');
    }else if(!validateAll() && form.elements[4].classList.contains('form-section-button-activated')){
        form.elements[4].classList.add('form-section-button-disabled');
        form.elements[4].classList.remove('form-section-button-activated');
    }
}

function buttonClick(e){
    e.preventDefault();
    if(btnForm.classList.contains('form-section-button-activated')){
        let firstName = form.elements[0].value;
        let lastName = form.elements[1].value;
        let email = form.elements[2].value;
        let message = form.elements[3].value;

        firstName = firstName.split(' ').map(n => n.charAt(0).toUpperCase() + n.slice(1).toLowerCase()).join(' ');
        lastName = lastName.split(' ').map(n => n.charAt(0).toUpperCase() + n.slice(1).toLowerCase()).join(' ');

        localStorage.setItem('firstName', firstName);
        localStorage.setItem('lastName', lastName);
        localStorage.setItem('email', email);
        localStorage.setItem('message', message);
        window.location.href = 'success.html';
    }
}

function validateName(name){
    let regex = /^[A-Za-zÀ-ÿ\s]+$/;
    return regex.test(name)
}

function validateEmailAddress (email) {
    let regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
}

function validateMessage (message) {
    let regex = /^.{10,}$/;
    return regex.test(message);
}

function validateAll(){
    return validateName(form.elements[0].value) && validateName(form.elements[1].value) && validateEmailAddress(form.elements[2].value) && validateMessage(form.elements[3].value)
}