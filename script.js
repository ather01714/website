document.addEventListener('DOMContentLoaded', () => {
    
    // --- Mobile Menu Toggle ---
    const mobileMenu = document.getElementById('mobile-menu');
    const navMenu = document.querySelector('.nav-menu');

    mobileMenu.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    // --- Scroll Animations (Intersection Observer) ---
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.scroll-anim').forEach((el) => {
        observer.observe(el);
    });

    // --- Modal Logic (Admission) ---
    const modal = document.getElementById('admissionModal');
    const btn = document.getElementById('applyBtn');
    const span = document.getElementsByClassName('close-modal')[0];

    if(btn) {
        btn.onclick = function() {
            modal.style.display = 'flex';
        }
    }

    if(span) {
        span.onclick = function() {
            modal.style.display = 'none';
        }
    }

    // --- Modal Logic (Admin) ---
    const adminModal = document.getElementById('adminModal');
    const adminBtn = document.getElementById('adminLoginBtn');
    const adminClose = document.getElementById('closeAdmin');

    if(adminBtn) {
        adminBtn.onclick = function(e) {
            e.preventDefault();
            adminModal.style.display = 'flex';
        }
    }

    if(adminClose) {
        adminClose.onclick = function() {
            adminModal.style.display = 'none';
        }
    }

    // Close modal when clicking outside
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
        if (event.target == adminModal) {
            adminModal.style.display = 'none';
        }
    }

    // --- Typing Animation (Director Section) ---
    const textToType = "Welcome to Norshunda Computer Training Centre. We are dedicated to building a skilled nation through quality technical education.";
    const typingElement = document.getElementById('typing-effect');
    let i = 0;

    function typeWriter() {
        if (i < textToType.length) {
            typingElement.innerHTML += textToType.charAt(i);
            i++;
            setTimeout(typeWriter, 50);
        }
    }
    
    // Trigger typing when section is in view
    const directorSection = document.getElementById('director');
    let hasTyped = false;

    if (directorSection) {
        const typeObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !hasTyped) {
                    typeWriter();
                    hasTyped = true;
                }
            });
        });
        typeObserver.observe(directorSection);
    }
});