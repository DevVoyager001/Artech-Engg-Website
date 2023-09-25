
    // Smooth scrolling when clicking on links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });





// Function to add the "active" class to the appropriate navigation link
function setActiveLink() {
    const sections = document.querySelectorAll("section"); // Get all sections
    const navLinks = document.querySelectorAll(".nav-link"); // Get all navigation links

    // Check which section is currently in the viewport
    sections.forEach(section => {
        const rect = section.getBoundingClientRect();

        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
            // Remove "active" class from all navigation links
            navLinks.forEach(link => {
                link.classList.remove("active");
            });

            // Add "active" class to the corresponding navigation link
            const link = document.querySelector(`[href="#${section.id}"]`);
            if (link) {
                link.classList.add("active");
            }
        }
    });
}

// Add scroll event listener to call setActiveLink function
window.addEventListener("scroll", setActiveLink);

// Call setActiveLink function initially to set the active link on page load
setActiveLink();






