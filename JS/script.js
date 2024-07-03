document.addEventListener("DOMContentLoaded", function() {
    const navbarLinks = document.querySelectorAll('.navbar a');
    
    navbarLinks.forEach(elem => {
        elem.addEventListener('click', function(event) {
            event.preventDefault();
            const targetSectionId = elem.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetSectionId);
            
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});
