// Mobile Navigation Toggle
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');

if (navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    navToggle.setAttribute('aria-expanded', navMenu.classList.contains('active'));
  });

  // Close menu when a link is clicked
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('active');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

// Keyboard Navigation - Close menu on Escape
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && navMenu?.classList.contains('active')) {
    navMenu.classList.remove('active');
    navToggle.setAttribute('aria-expanded', 'false');
  }
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (href !== '#') {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  });
});

// Button Click Handlers
document.querySelectorAll('.btn').forEach(button => {
  button.addEventListener('click', function() {
    if (this.textContent === 'Get Started') {
      document.getElementById('services').scrollIntoView({ behavior: 'smooth' });
    } else if (this.textContent === 'Contact Us') {
      showContactModal();
    }
  });
});

// Simple Contact Modal
function showContactModal() {
  const message = 'Thank you for your interest! Please contact us at hello@kartiadesigns.com.au';
  alert(message);
  console.log('Contact request initiated');
}

// Add focus visible styles for better keyboard navigation
document.addEventListener('keydown', (e) => {
  if (e.key === 'Tab') {
    document.body.classList.add('keyboard-nav');
  }
});

document.addEventListener('mousedown', () => {
  document.body.classList.remove('keyboard-nav');
});

// Intersection Observer for Scroll Animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

document.querySelectorAll('.service-card, .portfolio-card').forEach(el => {
  el.style.opacity = '0.8';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity 600ms ease, transform 600ms ease';
  observer.observe(el);
});

// Skip to main content link (accessibility)
const skipLink = document.createElement('a');
skipLink.href = '#home';
skipLink.textContent = 'Skip to main content';
skipLink.style.cssText = `
  position: absolute;
  top: -40px;
  left: 0;
  background: #0c4038;
  color: white;
  padding: 8px;
  text-decoration: none;
  z-index: 100;
`;
skipLink.addEventListener('focus', () => {
  skipLink.style.top = '0';
});
skipLink.addEventListener('blur', () => {
  skipLink.style.top = '-40px';
});
document.body.insertBefore(skipLink, document.body.firstChild);

console.log('Creative Agency Website Loaded - Brisbane Web Design System');
