document.addEventListener("DOMContentLoaded", function () {
    console.log("Portfolio website loaded successfully");

    // Smooth scrolling for navigation (if added later)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute("href")).scrollIntoView({
                behavior: "smooth"
            });
        });
    });
});