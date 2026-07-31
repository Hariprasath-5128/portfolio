// =====================================================
// TYPED TEXT EFFECT
// =====================================================
const roles = [
    'AI & Machine Learning Engineer',
    'Generative AI & LLM Developer',
    'AI Research Enthusiast',
    'Machine Learning & GenAI Developer',
    'AI Systems Developer',
    'LLM & RAG Developer',
    'Cloud & AI Engineer',
    'AI & Cloud Computing Enthusiast',
    'Machine Learning Researcher',
    'Applied AI Developer'
];
let roleIdx = 0, charIdx = 0, deleting = false;
const typedEl = document.getElementById('typedText');

function type() {
    const current = roles[roleIdx];
    if (!deleting) {
        typedEl.textContent = current.slice(0, ++charIdx);
        if (charIdx === current.length) {
            deleting = true;
            setTimeout(type, 1800);
            return;
        }
    } else {
        typedEl.textContent = current.slice(0, --charIdx);
        if (charIdx === 0) {
            deleting = false;
            roleIdx = (roleIdx + 1) % roles.length;
        }
    }
    setTimeout(type, deleting ? 50 : 80);
}
type();

// =====================================================
// HAMBURGER / MOBILE NAV
// =====================================================
const hamburger = document.getElementById('hamburger');
const navMenu   = document.getElementById('navMenu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    navMenu.classList.toggle('open');
});

// close menu on nav-link click
navMenu.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('open');
        navMenu.classList.remove('open');
    });
});

// =====================================================
// NAVBAR SCROLL EFFECT
// =====================================================
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.pageYOffset > 80);
}, { passive: true });

// =====================================================
// SMOOTH SCROLL
// =====================================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (!target) return;
        const navH = navbar.offsetHeight;
        window.scrollTo({ top: target.offsetTop - navH, behavior: 'smooth' });
    });
});

// =====================================================
// ACTIVE NAV LINK
// =====================================================
const sections  = document.querySelectorAll('section[id]');
const navLinks  = document.querySelectorAll('.nav-link');

function setActiveLink() {
    let current = '';
    const navH = navbar.offsetHeight + 80;
    sections.forEach(sec => {
        if (window.pageYOffset >= sec.offsetTop - navH) current = sec.id;
    });
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + current) link.classList.add('active');
    });
}
window.addEventListener('scroll', setActiveLink, { passive: true });
window.addEventListener('load',   setActiveLink);

// =====================================================
// INTERSECTION OBSERVER – SCROLL ANIMATIONS
// =====================================================
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animated');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.1, rootMargin: '0px 0px -60px 0px' });

document.querySelectorAll('[data-animate]').forEach(el => observer.observe(el));

// =====================================================
// CONTACT FORM
// =====================================================
const form = document.getElementById('contactForm');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const name    = document.getElementById('name').value.trim();
    const email   = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !message) {
        showNotif('Please fill in all fields.', 'error'); return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        showNotif('Please enter a valid email address.', 'error'); return;
    }

    showNotif('Thank you! I\'ll get back to you soon 🚀', 'success');
    form.reset();
});

// =====================================================
// NOTIFICATION
// =====================================================
function showNotif(msg, type) {
    document.querySelector('.notification')?.remove();
    const el = Object.assign(document.createElement('div'), {
        className: `notification ${type}`,
        textContent: msg
    });
    el.style.animation = 'slideIn 0.4s ease';
    document.body.appendChild(el);
    setTimeout(() => {
        el.style.animation = 'slideOut 0.4s ease forwards';
        setTimeout(() => el.remove(), 400);
    }, 5000);
}

// notification keyframes
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn  { from { opacity:0; transform:translateX(60px); } to { opacity:1; transform:none; } }
    @keyframes slideOut { from { opacity:1; transform:none; } to { opacity:0; transform:translateX(60px); } }
`;
document.head.appendChild(style);

// =====================================================
// ORB / PARALLAX ON MOUSE MOVE (subtle)
// =====================================================
const orbs = document.querySelectorAll('.orb');
document.addEventListener('mousemove', e => {
    const x = (e.clientX / window.innerWidth  - 0.5) * 20;
    const y = (e.clientY / window.innerHeight - 0.5) * 20;
    orbs.forEach((orb, i) => {
        const factor = (i + 1) * 0.4;
        orb.style.transform = `translate(${x * factor}px, ${y * factor}px)`;
    });
}, { passive: true });
