// Get all the navigation links
const navLinks = document.querySelectorAll('.nav__link');

// Add click event listener to each link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        // Get the target section id from the link's href attribute
        const targetId = link.getAttribute('href').substring(1);

        // Scroll to the target section smoothly
        document.getElementById(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});