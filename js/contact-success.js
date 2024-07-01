let firstName = localStorage.getItem('firstName');
let lastName = localStorage.getItem('lastName');
let email = localStorage.getItem('email');
let message = localStorage.getItem('message');

let successInfo = document.getElementById('success-info');
successInfo.innerHTML = `<p><strong>Name:</strong> ${firstName} ${lastName}</p><p><strong>Email:</strong> ${email}</p><p><strong>Message:</strong> ${message}</p>`;

