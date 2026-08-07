/* =====================================================
   PORTFOLIO — SCRIPT.JS v3
   Stats carousel + IDE file panels + modal + animations
   ===================================================== */
'use strict';

/* ── Project detail data ── */
const PROJECT_DATA = {
  '01': {
    title: 'Real-Time Plant Disease Detection System',
    category: 'Computer Vision / IoT',
    description: 'Real-time plant disease monitoring system using ESP32-CAM hardware and a fine-tuned 15M-parameter Vision Transformer (ViT) model trained on the PlantVillage dataset. Achieves approximately 80% accuracy in multi-class disease classification with integrated fertilizer recommendations delivered via a web dashboard.',
    longDesc: 'The system streams live video from an ESP32-CAM mounted above crops to a FastAPI backend, which preprocesses frames and runs inference through the ViT model. Detected diseases are mapped to a curated recommendation database to provide actionable fertilizer and treatment guidance in real-time.',
    tags: ['ViT', 'ESP32-CAM', 'IoT', 'FastAPI', 'Python', 'PyTorch'],
    github: 'https://github.com/Hariprasath-5128/Plant_Monitoring_VIT'
  },
  '02': {
    title: 'Syntax AI – Autonomous Code Refactoring Tool',
    category: 'AI Agents',
    description: 'AI-powered autonomous code refactoring, error detection, and code generation tool built on Python AI agents. Leverages LLMs to understand code semantics, suggest structural improvements, detect anti-patterns, and auto-generate boilerplate with SQL backend persistence and a web interface.',
    longDesc: 'Built with a multi-agent architecture where specialized agents handle different refactoring concerns: syntax analysis, semantic understanding, test generation, and documentation. Results are stored in a SQL database enabling history and diff tracking.',
    tags: ['AI Agents', 'Python', 'SQL', 'LLMs', 'FastAPI'],
    github: 'https://github.com/Hariprasath-5128/Syntax-AI'
  },
  '03': {
    title: 'SERA – Self-Evolving Retrieval-Augmented Generation',
    category: 'Adaptive RAG',
    description: 'An intelligent, self-evolving RAG framework for medical knowledge retrieval. Features adaptive retrieval strategies, Super-Node synthesis for knowledge compression, and a validation-driven learning loop that improves response accuracy over time through interaction feedback.',
    longDesc: 'SERA uses ChromaDB for vector storage with adaptive indexing that reorganizes embeddings based on query patterns. The validation pipeline scores LLM responses against medical ground truth and adjusts retrieval weights accordingly, creating a continuously improving system.',
    tags: ['RAG', 'ChromaDB', 'FastAPI', 'Vector DBs', 'Local LLM', 'Python'],
    github: 'https://github.com/Hariprasath-5128/SERA'
  },
  '04': {
    title: 'Multimodal Marine Species Identification',
    category: 'Multimodal AI',
    description: 'Cross-modal AI system for marine mammal identification combining audio and image modalities. Integrates a Large Language Model (LLM), Large Vision Model (LVM), and Large Audio Model (LAM) through a unified alignment architecture enabling zero-shot cross-modal retrieval.',
    longDesc: 'Implemented supervised contrastive learning to align audio and visual embeddings into a shared semantic space. Test-Time Augmentation (TTA) and Query Expansion techniques significantly improved identification robustness across the MBARI and FathomNet marine datasets.',
    tags: ['Multimodal', 'Contrastive Learning', 'Audio ML', 'Computer Vision', 'Zero-Shot', 'TTA'],
    github: 'https://github.com/Hariprasath-5128/Multimodal_marine'
  },
  '05': {
    title: 'AI Self-Healing Kubernetes Autoscaler',
    category: 'Cloud Native AI',
    description: 'AI-powered Kubernetes autoscaler that dynamically prioritizes workloads based on real-time CPU metrics. The custom AI prediction engine anticipates load spikes before they occur, enabling proactive resource allocation and automatic self-healing when pods fail.',
    longDesc: 'Built on Minikube with a custom Kubernetes operator that interfaces with the AI prediction engine. The engine uses a lightweight LSTM model trained on historical CPU patterns to predict future load and pre-scale pods 30-60 seconds ahead of demand, reducing latency by ~40%.',
    tags: ['Kubernetes', 'Docker', 'Minikube', 'Python', 'LSTM', 'AI/ML'],
    github: 'https://github.com/Hariprasath-5128/k8s-ai-self-healing-autoscaler'
  },
  '06': {
    title: 'Self-Evolving Cryptographic Primitives with DRL',
    category: 'Deep Reinforcement Learning',
    description: 'Deep Reinforcement Learning agents that dynamically evolve cryptographic primitives in response to adversarial attacks and environmental shifts. Demonstrates the feasibility of adaptive cryptographic systems that can autonomously strengthen themselves against novel threats.',
    longDesc: 'Agents trained using Proximal Policy Optimization (PPO) in a custom cryptographic environment. The reward function is designed to maximize encryption strength while minimizing computational cost, resulting in primitives that adapt their key schedules and substitution boxes dynamically.',
    tags: ['Deep RL', 'PPO', 'Python', 'Cryptography', 'Adversarial ML'],
    github: 'https://github.com/Hariprasath-5128/Self-Evolving-Cryptographic-Primitives-with-DRL'
  },
  '07': {
    title: 'CNN Based Weather Prediction',
    category: 'Deep Learning',
    description: 'Convolutional Neural Network model for accurate multi-step weather prediction utilizing spatial data mapping and large-scale meteorological datasets. Outperforms traditional numerical weather prediction baselines on short-range forecasting tasks.',
    longDesc: 'The model leverages 2D convolutions applied to spatial weather grids from ERA5 reanalysis data, capturing regional weather patterns and teleconnections. Multi-task learning predicts temperature, precipitation, and wind simultaneously from the same backbone.',
    tags: ['CNN', 'TensorFlow', 'Deep Learning', 'Meteorology', 'Python'],
    github: 'https://github.com/Hariprasath-5128/CNN_Based_Weather_Prediction'
  },
  '08': {
    title: 'Sleeping Monitor',
    category: 'Computer Vision',
    description: 'Real-time wearable-free sleep monitoring system using computer vision and video analysis. Tracks sleep posture transitions, restlessness, and estimates sleep quality without any physical sensors or body-attached hardware.',
    longDesc: 'Uses MediaPipe Pose for skeleton extraction and a custom temporal model to classify 6 sleep positions with 87% accuracy. Generates nightly sleep reports with posture timeline, disturbance counts, and actionable recommendations.',
    tags: ['OpenCV', 'MediaPipe', 'Python', 'Computer Vision', 'Signal Processing'],
    github: 'https://github.com/Hariprasath-5128/Sleeping-Monitor'
  },
  '09': {
    title: 'Fabric Text Detection',
    category: 'OCR / Image Processing',
    description: 'Specialized OCR pipeline engineered to accurately extract printed text from heavily textured and folded fabric materials — a uniquely challenging domain where standard OCR models fail due to non-planar surfaces and texture interference.',
    longDesc: 'Combines geometric correction with texture suppression preprocessing before passing to a fine-tuned CRNN-CTC model. Achieves 91% character accuracy on the custom fabric dataset vs 34% for Tesseract baseline.',
    tags: ['OCR', 'CRNN', 'Image Processing', 'OpenCV', 'Python', 'Deep Learning'],
    github: 'https://github.com/Hariprasath-5128/fabric_text_detection'
  }
};

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initSubNavHighlight();
  initHamburger();
  initStatsCarousel();
  initIDEFileSwitcher();
  initScrollAnimations();
  initContactForm();
  initProjectsShowMore();
  initTypewriter();
  initProjectModals();
  initTechStripMarquee();
});

/* ─────────────────────────────────────────────────────
   TECH STRIP MARQUEE
   ───────────────────────────────────────────────────── */
function initTechStripMarquee() {
  const content = document.getElementById('techStripContent');
  const item = document.getElementById('techStripItem');
  if (content && item) {
    const clone = item.cloneNode(true);
    content.appendChild(clone);
  }
}

/* ─────────────────────────────────────────────────────
   TYPEWRITER EFFECT
   ───────────────────────────────────────────────────── */
function initTypewriter() {
  const typedTextSpan = document.querySelector(".typing-text");
  if (!typedTextSpan) return;

  const textArray = [
    "AI & Machine Learning Developer.",
    "Generative AI Enthusiast.",
    "LLM & RAG Developer.",
    "Computer Vision Enthusiast.",
    "Multimodal AI Enthusiast.",
    "Cloud-Native AI Enthusiast.",
    "Data Science Enthusiast.",
    "AI Research Enthusiast.",
    "Competitive Programmer."
  ];
  const typingDelay = 80;
  const erasingDelay = 40;
  const newTextDelay = 2000;
  let textArrayIndex = 0;
  let charIndex = 0;

  function type() {
    if (charIndex < textArray[textArrayIndex].length) {
      typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
      charIndex++;
      setTimeout(type, typingDelay);
    } else {
      setTimeout(erase, newTextDelay);
    }
  }

  function erase() {
    if (charIndex > 0) {
      typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
      charIndex--;
      setTimeout(erase, erasingDelay);
    } else {
      textArrayIndex++;
      if (textArrayIndex >= textArray.length) textArrayIndex = 0;
      setTimeout(type, typingDelay + 500);
    }
  }

  setTimeout(type, newTextDelay);
}

/* ─────────────────────────────────────────────────────
   PROJECTS SHOW MORE
   ───────────────────────────────────────────────────── */
function initProjectsShowMore() {
  const btn = document.getElementById('btnShowMore');
  const extras = document.querySelectorAll('.extra-project');
  if (!btn || !extras.length) return;

  let isShowingAll = false;

  btn.addEventListener('click', () => {
    isShowingAll = !isShowingAll;
    
    extras.forEach(proj => {
      if (isShowingAll) {
        proj.style.display = '';
        requestAnimationFrame(() => {
          proj.style.opacity = '0';
          proj.style.transform = 'translateY(20px)';
          requestAnimationFrame(() => {
            proj.style.transition = 'opacity .4s ease, transform .4s ease';
            proj.style.opacity = '1';
            proj.style.transform = 'translateY(0)';
          });
        });
      } else {
        proj.style.display = 'none';
        proj.style.transition = '';
        proj.style.opacity = '';
        proj.style.transform = '';
      }
    });

    if (isShowingAll) {
      btn.innerHTML = 'Show Less Projects';
    } else {
      btn.innerHTML = 'Show More Projects';
      document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
    }
  });
}

/* ─────────────────────────────────────────────────────
   PROJECT MODALS
   ───────────────────────────────────────────────────── */
function initProjectModals() {
  const overlay = document.getElementById('projModalOverlay');
  const modal = document.getElementById('projModal');
  const closeBtn = document.getElementById('projModalClose');
  const body = document.getElementById('projModalBody');
  if (!overlay || !modal || !body) return;

  function openModal(projId) {
    const data = PROJECT_DATA[projId];
    if (!data) return;

    body.innerHTML = `
      <span class="pm-category">${data.category}</span>
      <h2>${data.title}</h2>
      <p>${data.description}</p>
      <p>${data.longDesc}</p>
      <div class="pm-tags">
        ${data.tags.map(t => `<span class="ptag">${t}</span>`).join('')}
      </div>
      <a href="${data.github}" target="_blank" rel="noopener" class="pm-link">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z"/></svg>
        View on GitHub
      </a>
    `;

    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';

    // Trap focus
    setTimeout(() => closeBtn.focus(), 50);
  }

  function closeModal() {
    overlay.classList.remove('open');
    document.body.style.overflow = '';
  }

  // Bind detail buttons
  document.querySelectorAll('.proj-detail-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      openModal(btn.dataset.project);
    });
  });

  // Close handlers
  closeBtn.addEventListener('click', closeModal);
  overlay.addEventListener('click', e => {
    if (e.target === overlay) closeModal();
  });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeModal();
  });
}

/* ─────────────────────────────────────────────────────
   NAVBAR
   ───────────────────────────────────────────────────── */
function initNavbar() {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;
  window.addEventListener('scroll', () => {
    navbar.style.boxShadow = window.scrollY > 10
      ? '0 1px 0 rgba(255,255,255,0.03)'
      : 'none';
  }, { passive: true });
}

/* ─────────────────────────────────────────────────────
   SUB-NAV HIGHLIGHT
   ───────────────────────────────────────────────────── */
function initSubNavHighlight() {
  const sections  = ['home', 'about', 'stats-section', 'skills', 'publications', 'projects', 'experience', 'certifications', 'contact'];
  const navLinks  = document.querySelectorAll('.nav-link');
  const subLinks  = document.querySelectorAll('.sub-link');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const id = entry.target.id;
      [...navLinks, ...subLinks].forEach(link => {
        const href = link.getAttribute('href');
        link.classList.toggle('active', href === `#${id}`);
      });
    });
  }, { rootMargin: '-30% 0px -60% 0px' });

  sections.forEach(id => {
    const el = document.getElementById(id);
    if (el) observer.observe(el);
  });

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
      closeMobileNav();
    });
  });
}

/* ─────────────────────────────────────────────────────
   HAMBURGER
   ───────────────────────────────────────────────────── */
function initHamburger() {
  const hamburger = document.getElementById('hamburger');
  const navLinks  = document.getElementById('navLinks');
  if (!hamburger || !navLinks) return;

  hamburger.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    hamburger.classList.toggle('open', isOpen);
    hamburger.setAttribute('aria-expanded', String(isOpen));
  });

  document.addEventListener('click', e => {
    if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
      closeMobileNav();
    }
  });
}

function closeMobileNav() {
  const hamburger = document.getElementById('hamburger');
  const navLinks  = document.getElementById('navLinks');
  if (!navLinks) return;
  navLinks.classList.remove('open');
  hamburger && hamburger.classList.remove('open');
  hamburger && hamburger.setAttribute('aria-expanded', 'false');
}

/* ─────────────────────────────────────────────────────
   STATS CAROUSEL — True seamless infinite auto-rotate
   ───────────────────────────────────────────────────── */
function initStatsCarousel() {
  const track = document.getElementById('statsTrack');
  const originalSlides = Array.from(document.querySelectorAll('.stat-slide'));
  const dots = document.querySelectorAll('.stat-dot');
  const prevBtn = document.getElementById('statsPrev');
  const nextBtn = document.getElementById('statsNext');
  if (!track || !originalSlides.length) return;

  // Clone all slides and append them for seamless infinite scroll
  originalSlides.forEach(slide => {
    const clone = slide.cloneNode(true);
    clone.classList.add('clone-slide');
    track.appendChild(clone);
  });

  const slides = document.querySelectorAll('.stat-slide');
  const totalOriginal = originalSlides.length;

  let current = 0;
  let autoTimer = null;
  let isDragging = false;
  let startX = 0;
  let hasDragged = false;
  let isTransitioning = false;

  function getSlideWidth() {
    return slides[0].getBoundingClientRect().width;
  }

  function updateActiveStates(realIndex) {
    originalSlides.forEach((s, i) => s.classList.toggle('active', i === realIndex));
    dots.forEach((d, i) => d.classList.toggle('active', i === realIndex));
    // Also update clones
    slides.forEach((s, i) => {
      if (i >= totalOriginal) s.classList.toggle('active', (i - totalOriginal) === realIndex);
    });
  }

  function goTo(index, animate = true) {
    if (isTransitioning && animate) return;
    
    current = index;
    const trackWidth = track.parentElement.getBoundingClientRect().width;
    const slide = slides[current];
    const slideW = slide.getBoundingClientRect().width;
    const centerOffset = (trackWidth / 2) - (slide.offsetLeft + (slideW / 2));
    
    track.style.transition = animate ? 'transform 0.4s ease' : 'none';
    track.style.transform = `translateX(${centerOffset}px)`;
    
    const realIndex = current % totalOriginal;
    updateActiveStates(realIndex);

    if (animate) {
      isTransitioning = true;
      setTimeout(() => {
        isTransitioning = false;
        // Seamless jump
        if (current >= totalOriginal) {
          goTo(current - totalOriginal, false);
        } else if (current < 0) {
          // This case happens if dragging backwards from 0, though not used in next/prev as strictly
        }
      }, 400); // matches CSS transition duration
    }
  }

  function next() {
    if (isTransitioning) return;
    goTo(current + 1);
  }

  function prev() {
    if (isTransitioning) return;
    if (current === 0) {
      // Jump to clone instantly, then animate to real previous
      goTo(totalOriginal, false);
      // Wait a tick for jump to apply
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          goTo(totalOriginal - 1, true);
        });
      });
    } else {
      goTo(current - 1);
    }
  }

  function startAuto() {
    clearInterval(autoTimer);
    autoTimer = setInterval(next, 2500);
  }

  function stopAuto() { clearInterval(autoTimer); }

  prevBtn && prevBtn.addEventListener('click', () => { stopAuto(); prev(); startAuto(); });
  nextBtn && nextBtn.addEventListener('click', () => { stopAuto(); next(); startAuto(); });

  dots.forEach(dot => {
    dot.addEventListener('click', () => {
      stopAuto();
      const dotIndex = parseInt(dot.dataset.dot);
      // If we are currently in the clone set, jump to real set first
      if (current >= totalOriginal) goTo(current - totalOriginal, false);
      setTimeout(() => goTo(dotIndex, true), 10);
      startAuto();
    });
  });

  // Drag / Swipe
  function onDragStart(e) {
    if (isTransitioning) return;
    isDragging = true;
    hasDragged = false;
    startX = e.type === 'touchstart' ? e.touches[0].clientX : e.clientX;
    track.classList.add('dragging');
    stopAuto();
  }

  function onDragMove(e) {
    if (!isDragging) return;
    const x = e.type === 'touchmove' ? e.touches[0].clientX : e.clientX;
    const dx = x - startX;
    if (Math.abs(dx) > 4) hasDragged = true;
    
    // If dragging backwards from 0, jump to clone instantly
    if (current === 0 && dx > 0) {
      goTo(totalOriginal, false);
      startX = x; // reset origin
      return;
    }
    // If dragging forwards from last clone, jump to real 0
    if (current === totalOriginal * 2 - 1 && dx < 0) {
       goTo(totalOriginal - 1, false);
       startX = x;
       return;
    }

    const trackWidth = track.parentElement.getBoundingClientRect().width;
    const slide = slides[current];
    const slideW = slide.getBoundingClientRect().width;
    const baseOffset = (trackWidth / 2) - (slide.offsetLeft + (slideW / 2));
    
    track.style.transition = 'none';
    track.style.transform = `translateX(${baseOffset + dx}px)`;
  }

  function onDragEnd(e) {
    if (!isDragging) return;
    isDragging = false;
    track.classList.remove('dragging');

    const x = e.type === 'touchend' ? e.changedTouches[0].clientX : e.clientX;
    const dx = x - startX;
    const slideW = getSlideWidth();

    if (hasDragged) {
      if (dx < -slideW * 0.15) next();
      else if (dx > slideW * 0.15) prev();
      else goTo(current, true);
    } else {
      goTo(current, true);
    }
    startAuto();
  }

  track.addEventListener('mousedown', onDragStart);
  window.addEventListener('mousemove', onDragMove);
  window.addEventListener('mouseup', onDragEnd);
  track.addEventListener('touchstart', onDragStart, { passive: true });
  track.addEventListener('touchmove', onDragMove, { passive: true });
  track.addEventListener('touchend', onDragEnd);
  track.setAttribute('tabindex', '0');
  track.addEventListener('keydown', e => {
    if (e.key === 'ArrowLeft') { stopAuto(); prev(); startAuto(); }
    if (e.key === 'ArrowRight') { stopAuto(); next(); startAuto(); }
  });

  track.addEventListener('mouseenter', stopAuto);
  track.addEventListener('mouseleave', startAuto);

  // Init
  goTo(0, false);
  startAuto();

  window.addEventListener('resize', () => goTo(current, false), { passive: true });
}

/* ─────────────────────────────────────────────────────
   IDE FILE SWITCHER
   ───────────────────────────────────────────────────── */
function initIDEFileSwitcher() {
  const files     = document.querySelectorAll('.ide-file');
  const panels    = document.querySelectorAll('.ide-panel');
  const fileTitle = document.getElementById('ideCurrentFile');

  const fileNames = {
    portfolio: 'portfolio.py',
    projects:  'projects.json',
    skills:    'skills.yaml',
  };

  files.forEach(file => {
    const handler = () => {
      const target = file.dataset.file;
      files.forEach(f => f.classList.remove('active'));
      file.classList.add('active');
      if (fileTitle) fileTitle.textContent = fileNames[target] || target;
      panels.forEach(panel => {
        const isTarget = panel.id === `panel-${target}`;
        panel.classList.toggle('active', isTarget);
      });
    };

    file.addEventListener('click', handler);
    file.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); handler(); }
    });
  });
}



/* ─────────────────────────────────────────────────────
   SCROLL ANIMATIONS — re-trigger on enter AND leave
   ───────────────────────────────────────────────────── */
function initScrollAnimations() {
  const els = document.querySelectorAll('[data-animate]');
  if (!els.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        const delay = (i % 4) * 80;
        setTimeout(() => entry.target.classList.add('is-visible'), delay);
      } else {
        // Remove class when scrolled out so it re-animates on next scroll-in
        entry.target.classList.remove('is-visible');
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

  els.forEach(el => observer.observe(el));
}

/* ─────────────────────────────────────────────────────
   CONTACT FORM
   ───────────────────────────────────────────────────── */
function initContactForm() {
  const form   = document.getElementById('contactForm');
  const submit = document.getElementById('cf-submit');
  if (!form || !submit) return;

  form.addEventListener('submit', e => {
    e.preventDefault();
    const name    = document.getElementById('cf-name').value.trim();
    const email   = document.getElementById('cf-email').value.trim();
    const message = document.getElementById('cf-message').value.trim();
    if (!name || !email || !message) return;

    submit.disabled = true;
    submit.innerHTML = '<span>Sending…</span>';

    setTimeout(() => {
      const sub  = encodeURIComponent(`Portfolio Contact from ${name}`);
      const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
      window.location.href = `mailto:hariprasath1528@gmail.com?subject=${sub}&body=${body}`;

      submit.innerHTML = `<span>Sent ✓</span><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>`;
      submit.style.background = '#2ea043';
      form.reset();

      setTimeout(() => {
        submit.disabled = false;
        submit.innerHTML = `Send Message <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>`;
        submit.style.background = '';
      }, 3500);
    }, 700);
  });
}

/* ─────────────────────────────────────────────────────
   KEYBOARD — ESC closes modal and mobile nav
   ───────────────────────────────────────────────────── */
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeMobileNav();
});
