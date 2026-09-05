/**
 * ==========================================================================
 * SHREYA GUPTA PORTFOLIO - INTERACTIVE JAVASCRIPT & 3D EFFECTS
 * ==========================================================================
 * Features:
 * - 3D Mousemove Card Tilt & Elevation Effect
 * - Mobile Navigation Drawer Toggle
 * - Scroll Spy Active Link Highlighting
 * - Interactive Contact Form Handler
 * - Smooth Scrolling Logic
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Initialize Lucide Icons if loaded via CDN
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }

  // 2. Mobile Drawer Navigation Toggle
  const mobileToggle = document.getElementById('mobile-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  const menuIcon = document.getElementById('menu-icon');

  if (mobileToggle && mobileMenu) {
    mobileToggle.addEventListener('click', () => {
      const isOpen = mobileMenu.classList.toggle('open');
      if (menuIcon && typeof lucide !== 'undefined') {
        menuIcon.setAttribute('data-lucide', isOpen ? 'x' : 'menu');
        lucide.createIcons();
      }
    });

    // Close menu when clicking any link
    const mobileLinks = mobileMenu.querySelectorAll('.mobile-nav-link');
    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.remove('open');
        if (menuIcon && typeof lucide !== 'undefined') {
          menuIcon.setAttribute('data-lucide', 'menu');
          lucide.createIcons();
        }
      });
    });
  }

  // 3. Navbar Scroll Shadow Effect
  const header = document.getElementById('main-header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
      header.style.boxShadow = '0 10px 25px rgba(15, 23, 42, 0.08)';
      header.style.background = 'rgba(255, 255, 255, 0.96)';
    } else {
      header.style.boxShadow = 'var(--shadow-sm)';
      header.style.background = 'rgba(255, 255, 255, 0.94)';
    }
  });

  // 4. Interactive 3D Card Tilt Effect
  const tiltCards = document.querySelectorAll('.tilt-card, .glass-card-3d');

  tiltCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left; // Mouse position within card
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      // Calculate tilt angles (max 8 deg rotation)
      const rotateX = ((y - centerY) / centerY) * -6;
      const rotateY = ((x - centerX) / centerX) * 6;

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px) scale(1.01)`;
      card.style.transition = 'transform 0.1s ease';
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px) scale(1)';
      card.style.transition = 'transform 0.5s ease, border-color 0.3s ease, box-shadow 0.3s ease';
    });
  });

  // 5. Scroll Spy - Highlight Active Navigation Link
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.desktop-nav .nav-link');

  window.addEventListener('scroll', () => {
    let current = '';
    const scrollPosition = window.scrollY + 200;

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;

      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });

  // 6. Interactive Contact Form Submission Handler
  const contactForm = document.getElementById('contact-form');
  const formStatus = document.getElementById('form-status');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const submitBtn = contactForm.querySelector('button[type="submit"]');

      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<i data-lucide="loader-2" class="animate-spin"></i> Sending...';
        if (typeof lucide !== 'undefined') lucide.createIcons();
      }

      // Simulate network request timeout
      setTimeout(() => {
        if (formStatus) {
          formStatus.className = 'form-status-msg success';
          formStatus.innerHTML = '✨ Thank you! Your message has been sent successfully. Shreya will respond soon.';
        }
        contactForm.reset();

        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerHTML = '<i data-lucide="check"></i> Message Sent!';
          if (typeof lucide !== 'undefined') lucide.createIcons();

          setTimeout(() => {
            submitBtn.innerHTML = '<i data-lucide="send"></i> Send Message';
            if (typeof lucide !== 'undefined') lucide.createIcons();
          }, 3000);
        }
      }, 1000);
    });
  }
});
