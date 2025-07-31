document.addEventListener('DOMContentLoaded', function() {
    // Loading screen
    setTimeout(() => {
        document.getElementById('loading').style.display = 'none';
    }, 1500);

    // Theme toggle
    const themeToggle = document.getElementById('theme-toggle');
    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        const icon = themeToggle.querySelector('i');
        if (document.body.classList.contains('dark-mode')) {
            icon.classList.replace('fa-moon', 'fa-sun');
        } else {
            icon.classList.replace('fa-sun', 'fa-moon');
        }
    });

    // Typing effect
    const typedText = document.getElementById('typed-text');
    const textArray = ["Mechanical Engineer", "CAD Designer", "Project Engineer"];
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    
    function type() {
        const currentText = textArray[textIndex];
        if (isDeleting) {
            typedText.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
        } else {
            typedText.textContent = currentText.substring(0, charIndex + 1);
            charIndex++;
        }
        
        if (!isDeleting && charIndex === currentText.length) {
            isDeleting = true;
            setTimeout(type, 1000);
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % textArray.length;
            setTimeout(type, 500);
        } else {
            setTimeout(type, isDeleting ? 50 : 150);
        }
    }
    setTimeout(type, 1000);

    // Sticky header
    window.addEventListener('scroll', () => {
        const header = document.querySelector('.header');
        header.classList.toggle('sticky', window.scrollY > 0);
    });

    // Mobile menu toggle
    const menuIcon = document.getElementById('menu-icon');
    const navbar = document.querySelector('.navbar');
    menuIcon.addEventListener('click', () => {
        menuIcon.classList.toggle('fa-times');
        navbar.classList.toggle('active');
    });

    // Close menu when clicking on nav links
    document.querySelectorAll('.navbar a').forEach(link => {
        link.addEventListener('click', () => {
            menuIcon.classList.remove('fa-times');
            navbar.classList.remove('active');
        });
    });

    // Scroll reveal animation
    const fadeElements = document.querySelectorAll('.fade-in');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    }, { threshold: 0.1 });
    
    fadeElements.forEach(element => {
        observer.observe(element);
    });

    // Form submission
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const formData = new FormData(this);
        // Here you would typically send the form data to a server
        console.log(Object.fromEntries(formData));
        alert('Message sent successfully!');
        this.reset();
    });
});