const toggleBtn = document.querySelector('.toggle-btn');
const navbar = document.querySelector('.navbar');

toggleBtn.addEventListener('click', function() {
    navbar.classList.toggle('activate');
});