let subscribeInput = document.getElementById('subscribe-input')
let subscribeBtn = document.getElementById('subscribe-button')

subscribeInput.addEventListener('input', checkInput)
subscribeBtn.addEventListener('click', subscribeBtnClick)

function checkInput(e) {
    if(validateEmailAddress(e.target.value) && subscribeBtn.classList.contains('subscribe-button-disabled')){
        subscribeBtn.classList.remove('subscribe-button-disabled');
        subscribeBtn.classList.add('subscribe-button-activated');
    }else if(!validateEmailAddress(e.target.value) && subscribeBtn.classList.contains('subscribe-button-activated')){
        subscribeBtn.classList.add('subscribe-button-disabled');
        subscribeBtn.classList.remove('subscribe-button-activated');
    }
}

function subscribeBtnClick (e){
    e.preventDefault();
    if(subscribeBtn.classList.contains('subscribe-button-activated')){
        window.location.href = 'error.html';
    }
}



function validateEmailAddress (email) {
    let regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
}
