
document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('.top.header');
    const logo = document.querySelector('.logo img');
    
    logo.addEventListener('click', function() {
        alert('Welcome to the United Nations!');
    });
}   );


const joinButton = document.querySelector('.join-button');
if (joinButton) {
    joinButton.addEventListener('click', function() {
        alert('Thank you for your interest in joining the United Nations!');
    });
}


//this function for donation form
function showDonationForm(organization) {
    const form = document.querySelector('.donation-form');
    form.style.display = 'block';
    
    const donateButton = document.querySelector('.donate-button');
    donateButton.addEventListener('click', function() {
        const amount = document.getElementById('amount').value;
        const currency = document.getElementById('currency').value;
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;

        if (amount && name && email) {
            alert(`Thank you ${name} for your donation of ${amount} ${currency} to ${organization}!`);
            form.reset();
            form.style.display = 'none';
        } else {
            alert('Please fill out all fields.');
        }
    });
}
 