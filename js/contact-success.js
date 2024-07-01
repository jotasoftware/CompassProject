let firstName = localStorage.getItem('firstName');
let lastName = localStorage.getItem('lastName');
let email = localStorage.getItem('email');
let message = localStorage.getItem('message');
let successInfo = document.getElementById('success-info');

if(firstName != undefined){
    successInfo.innerHTML = `<p><strong>Name:</strong> ${firstName} ${lastName}</p><p><strong>Email:</strong> ${email}</p><p><strong>Message:</strong> ${message}</p>`;
    localStorage.removeItem('firstName');
    localStorage.removeItem('lastName');
    localStorage.removeItem('message');
}else{
    successInfo.innerHTML = `<h2>You were subscribed</h2><p><strong>Email:</strong> ${email}</p>`;
}
localStorage.removeItem('email');

