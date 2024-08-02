document.addEventListener('DOMContentLoaded', function() {
    // Get all nav links
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    // Get the current URL path
    const pathSegments = window.location.pathname.split('/').filter(segment => segment); // Filter out empty segments
    
    // Get the last segment of the path
    const currentPath = pathSegments[pathSegments.length - 1];
    console.log(currentPath);
    // Loop through the nav links
    navLinks.forEach(link => {
    console.log(link.getAttribute('href'));

        // Check if the href of the link matches the current path
        if (link.getAttribute('href') === currentPath) {
            link.classList.add('active');
        }
    });
});