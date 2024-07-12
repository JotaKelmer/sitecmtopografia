document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const dropdownMenu = document.querySelector('.dropdown-menu');

    hamburger.addEventListener('click', () => {
        dropdownMenu.classList.toggle('show');
    });

    document.querySelectorAll('.dropdown-menu a').forEach(function(link) {
        link.addEventListener('click', function() {
            dropdownMenu.classList.remove('show');
        });
    });
});
