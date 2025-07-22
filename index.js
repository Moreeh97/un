
document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('.top.header');
    const logo = document.querySelector('.logo img');
    
    logo.addEventListener('click', function() {
        alert('Welcome to the United Nations!');
    });
}   );


const donateButtons = document.querySelectorAll('[id$="-donate"]');

const donationForm = document.getElementById('donationForm');

donateButtons.forEach(button => {
  button.addEventListener('click', function (e) {
    e.preventDefault();
    donationForm.style.display = 'block';
    donationForm.scrollIntoView({ behavior: 'smooth' });
  });
});

 donateButtons.forEach(button => {
  button.addEventListener('click', function (e) {
    e.preventDefault();
    donationForm.classList.add('show');
    donationForm.scrollIntoView({ behavior: 'smooth' });
  });
});
