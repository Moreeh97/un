
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