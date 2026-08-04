/* ===================================================
   PORTFOLIO — STYLE.CSS  v2
   Pure black · sharp corners · GitHub Copilot aesthetic
   =================================================== */

*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

:root {
  --bg-canvas:      #000000;
  --bg-subtle:      #0a0a0a;
  --bg-muted:       #111111;
  --bg-card:        #0d0d0d;
  --border-default: #21262d;
  --border-muted:   #161b22;
  --fg-default:     #e6edf3;
  --fg-muted:       #8b949e;
  --fg-subtle:      #484f58;
  --accent-green:   #3fb950;
  --accent-dim:     #238636;
  --accent-bg:      #0d2016;
  --accent-text:    #56d364;
  --blue-link:      #58a6ff;
  --font-base: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  --font-mono: 'Fira Code', 'SF Mono', 'Cascadia Code', 'Consolas', monospace;
  --nav-h:    60px;
  --subnav-h: 44px;
}

html { font-size: 16px; scroll-behavior: smooth; scrollbar-width: thin; scrollbar-color: #21262d #000; }
body { font-family: var(--font-base); background: var(--bg-canvas); color: var(--fg-default); line-height: 1.6; -webkit-font-smoothing: antialiased; overflow-x: hidden; }
::selection { background: var(--accent-dim); color: #fff; }
a { color: inherit; text-decoration: none; }
img { max-width: 100%; display: block; }
ul { list-style: none; }
button { cursor: pointer; font-family: inherit; }
::-webkit-scrollbar { width: 6px; height: 6px; }
::-webkit-scrollbar-track { background: #000; }
::-webkit-scrollbar-thumb { background: #21262d; }
::-webkit-scrollbar-thumb:hover { background: #30363d; }

/* ===================================================
   NAV
   =================================================== */
#navbar {
  position: fixed; top: 0; left: 0; right: 0; z-index: 100;
  background: rgba(0,0,0,0.88);
  backdrop-filter: blur(14px);
  border-bottom: 1px solid var(--border-default);
}
.nav-inner {
  display: flex; align-items: center; gap: 20px;
  max-width: 1280px; margin: 0 auto; padding: 0 24px;
  height: var(--nav-h);
}
.nav-logo { display: flex; align-items: center; gap: 10px; font-size: 15px; font-weight: 700; flex-shrink: 0; }
.nav-name { display: block; color: var(--fg-default); letter-spacing: -0.02em; }
.nav-name-accent { color: var(--accent-green); }
.nav-links { display: flex; align-items: center; gap: 8px; margin-left: 20px; }
.nav-link { display: flex; align-items: center; gap: 4px; font-size: 14px; font-weight: 500; color: var(--fg-default); padding: 6px 4px; transition: color .15s; white-space: nowrap; }
.nav-link:hover { color: rgba(255, 255, 255, 0.7); }
.nav-link.active { color: var(--fg-default); }
.nav-chevron { opacity: 0.5; transition: transform .2s; }
.nav-link:hover .nav-chevron { transform: translateY(1px); }
.nav-actions { display: flex; align-items: center; gap: 8px; margin-left: auto; }
.nav-cta-ghost { font-size: 13px; font-weight: 500; color: var(--fg-default); padding: 5px 14px; border: 1px solid var(--border-default); transition: border-color .15s; }
.nav-cta-ghost:hover { border-color: var(--fg-muted); }
.nav-cta-primary { font-size: 13px; font-weight: 600; color: #fff; background: var(--accent-dim); padding: 5px 14px; border: 1px solid var(--accent-dim); transition: background .15s; }
.nav-cta-primary:hover { background: #2ea043; }
.hamburger { display: none; flex-direction: column; gap: 5px; background: none; border: none; padding: 4px; margin-left: auto; }
.hamburger span { display: block; width: 22px; height: 2px; background: var(--fg-default); transition: transform .2s, opacity .2s; }
.hamburger.open span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
.hamburger.open span:nth-child(2) { opacity: 0; }
.hamburger.open span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }

.sub-nav { border-top: 1px solid var(--border-default); background: rgba(0,0,0,0.95); }
.sub-nav-inner { display: flex; align-items: center; max-width: 1280px; margin: 0 auto; padding: 0 24px; height: var(--subnav-h); overflow-x: auto; scrollbar-width: none; }
.sub-nav-inner::-webkit-scrollbar { display: none; }
.sub-link { font-size: 13px; font-weight: 500; color: var(--fg-muted); padding: 0 14px; height: var(--subnav-h); display: flex; align-items: center; border-bottom: 2px solid transparent; transition: color .15s, border-color .15s; white-space: nowrap; }
.sub-link:hover { color: var(--fg-default); }
.sub-link.active { color: var(--fg-default); border-bottom-color: var(--accent-green); }

/* ===================================================
   BUTTONS
   =================================================== */
.btn-primary { display: inline-flex; align-items: center; gap: 8px; font-size: 14px; font-weight: 600; color: #fff; background: var(--accent-dim); padding: 10px 20px; border: 1px solid var(--accent-dim); transition: background .15s, box-shadow .15s; }
.btn-primary:hover { background: #2ea043; box-shadow: 0 0 20px rgba(63,185,80,.2); }
.btn-ghost { display: inline-flex; align-items: center; gap: 8px; font-size: 14px; font-weight: 600; color: var(--fg-default); background: transparent; padding: 10px 20px; border: 1px solid var(--border-default); transition: border-color .15s; }
.btn-ghost:hover { border-color: var(--fg-muted); }

/* ===================================================
   HERO
   =================================================== */
.hero {
  background: var(--bg-canvas);
  border-bottom: 1px solid var(--border-default);
  position: relative;
  overflow: hidden;
  padding-top: calc(var(--nav-h) + var(--subnav-h));
}
.hero::before {
  content: '';
  position: absolute; top: 0; left: 0; right: 0; bottom: 0;
  background: radial-gradient(ellipse 50% 60% at 75% 50%, rgba(88,28,135,.06) 0%, transparent 70%),
              radial-gradient(ellipse 30% 40% at 20% 80%, rgba(63,185,80,.04) 0%, transparent 60%);
  pointer-events: none;
}
.hero-grid {
  display: grid; grid-template-columns: 1fr 1fr; gap: 0;
  width: 100%; max-width: 1280px; margin: 0 auto;
  padding: 64px 24px 72px; align-items: center; position: relative; z-index: 1;
}
.hero-left { padding-right: 56px; }

.section-eyebrow { display: flex; align-items: center; gap: 8px; font-size: 11px; font-weight: 700; font-family: var(--font-mono); letter-spacing: .12em; color: var(--fg-muted); margin-bottom: 20px; text-transform: uppercase; }
.eyebrow-dot { width: 8px; height: 8px; background: var(--accent-green); border-radius: 50%; box-shadow: 0 0 8px var(--accent-green); animation: pulse-dot 2s ease-in-out infinite; flex-shrink: 0; }
@keyframes pulse-dot { 0%,100% { box-shadow: 0 0 4px var(--accent-green); } 50% { box-shadow: 0 0 14px var(--accent-green); } }

.hero-headline {
  font-size: clamp(44px, 6vw, 80px);
  font-weight: 900; line-height: 1.02; letter-spacing: -.03em;
  color: var(--fg-default); margin-bottom: 20px;
}
.name-accent { color: var(--accent-green); }

.hero-right-mobile { display: none; margin-bottom: 28px; }

.hero-sub { font-size: 16px; color: var(--fg-muted); max-width: 440px; margin-bottom: 28px; line-height: 1.7; }
.hero-ctas { display: flex; align-items: center; gap: 10px; margin-bottom: 24px; flex-wrap: wrap; }

/* Social icons */
.hero-socials { display: flex; align-items: center; gap: 8px; margin-bottom: 20px; flex-wrap: wrap; }
.social-icon-btn {
  display: inline-flex; align-items: center; gap: 7px;
  font-size: 12px; font-weight: 600; font-family: var(--font-mono);
  color: var(--fg-muted);
  padding: 6px 12px;
  border: 1px solid var(--border-default);
  transition: border-color .15s, color .15s, background .15s;
}
.social-icon-btn:hover { border-color: var(--fg-muted); color: var(--fg-default); background: var(--bg-muted); }
#hero-li:hover { border-color: #0A66C2; color: #0A66C2; }
#hero-lc:hover { border-color: #FFA116; color: #FFA116; }

.hero-note { font-size: 12px; color: var(--fg-muted); }
.hero-note a { color: var(--blue-link); transition: color .15s; }
.hero-note a:hover { color: #79c0ff; }

/* IDE Frame */
.hero-right-desktop { display: flex; justify-content: center; }
.ide-frame { width: 100%; max-width: 580px; border: 1px solid var(--border-default); background: #0d1117; overflow: hidden; box-shadow: 0 24px 80px rgba(0,0,0,.8), 0 0 40px rgba(63,185,80,.04); }
.ide-titlebar { display: flex; align-items: center; gap: 6px; padding: 10px 14px; background: #161b22; border-bottom: 1px solid var(--border-default); }
.ide-dot { width: 10px; height: 10px; border-radius: 50%; }
.ide-dot.red { background: #ff5f57; } .ide-dot.yellow { background: #febc2e; } .ide-dot.green { background: #28c840; }
.ide-title { margin-left: 8px; font-size: 12px; font-family: var(--font-mono); color: var(--fg-muted); }
.ide-badge { margin-left: auto; font-size: 11px; font-weight: 600; color: var(--accent-green); font-family: var(--font-mono); }
.ide-body { display: flex; min-height: 500px; }
.ide-sidebar { width: 148px; border-right: 1px solid var(--border-default); padding: 12px 0; flex-shrink: 0; background: #0d1117; }
.ide-file { display: flex; align-items: center; gap: 7px; padding: 7px 14px; font-size: 11px; font-family: var(--font-mono); color: var(--fg-muted); cursor: pointer; transition: background .1s, color .1s; }
.ide-file:hover { background: #1c2128; color: var(--fg-default); }
.ide-file.active { background: #1c2128; color: var(--fg-default); }
.ide-editor { flex: 1; position: relative; overflow: hidden; }

/* IDE Panels */
.ide-panel { position: absolute; inset: 0; opacity: 0; pointer-events: none; transition: opacity 0.3s ease, transform 0.4s cubic-bezier(0.2, 0.8, 0.2, 1); transform: translateY(20px) scale(0.98); }
.ide-panel.active { opacity: 1; pointer-events: auto; transform: translateY(0) scale(1); }

/* Profile image panel */
.hero-profile-img { width: 100%; height: 100%; object-fit: cover; object-position: top center; min-height: 500px; }
.ide-overlay-chat { position: absolute; bottom: 0; left: 0; right: 0; background: linear-gradient(to top, rgba(13,17,23,.97) 0%, rgba(13,17,23,.5) 70%, transparent 100%); padding: 24px 16px 16px; text-align: center; }
.chat-icon { display: flex; justify-content: center; margin-bottom: 6px; }
.chat-title { font-size: 14px; font-weight: 700; color: var(--fg-default); }
.chat-sub { font-size: 11px; color: var(--fg-muted); margin-top: 2px; font-family: var(--font-mono); }

/* Code viewer panels */
.code-viewer { height: 100%; min-height: 440px; overflow-y: auto; background: #0d1117; padding: 16px; }
.code-viewer::-webkit-scrollbar { width: 4px; }
.code-viewer::-webkit-scrollbar-thumb { background: #21262d; }
.code-block { font-family: var(--font-mono); font-size: 11.5px; line-height: 1.8; white-space: pre-wrap; word-break: break-all; }
.c-bracket { color: #e6edf3; }
.c-key     { color: #79c0ff; }
.c-str     { color: #a5d6ff; }
.c-num     { color: #ff7b72; }
.c-bool    { color: #ff7b72; }
.c-punct   { color: #e6edf3; }
.c-comment { color: #6e7681; font-style: italic; }

/* ===================================================
   SECTION SCAFFOLDING
   =================================================== */
.section-block { border-bottom: 1px solid var(--border-default); }
.section-alt { background: #06080f; } /* Dark blue-black alt section */
.section-container { max-width: 1280px; margin: 0 auto; padding: 88px 24px; }
.section-eyebrow-center { display: flex; align-items: center; justify-content: center; gap: 8px; font-size: 11px; font-weight: 700; font-family: var(--font-mono); letter-spacing: .12em; color: var(--fg-muted); margin-bottom: 18px; text-transform: uppercase; }
.section-eyebrow-left { display: flex; align-items: center; gap: 8px; font-size: 11px; font-weight: 700; font-family: var(--font-mono); letter-spacing: .12em; color: var(--fg-muted); margin-bottom: 14px; text-transform: uppercase; }
.section-headline { font-size: clamp(28px, 3.5vw, 48px); font-weight: 800; letter-spacing: -.02em; color: var(--fg-default); text-align: center; margin-bottom: 14px; line-height: 1.1; }
.section-headline-left { font-size: clamp(24px, 3vw, 40px); font-weight: 800; letter-spacing: -.02em; color: var(--fg-default); margin-bottom: 12px; line-height: 1.1; }
.text-center { text-align: center; }
.section-sub { font-size: 15px; color: var(--fg-muted); text-align: center; max-width: 580px; margin: 0 auto 56px; line-height: 1.7; }
.section-sub-left { font-size: 14px; color: var(--fg-muted); max-width: 480px; line-height: 1.7; margin-bottom: 40px; }
.section-cta-row { display: flex; justify-content: center; margin-top: 40px; }
.certs-header-row { margin-bottom: 52px; }

/* ===================================================
   FEATURES (3 col - About Me Summary)
   =================================================== */
.features-grid-3 { display: grid; grid-template-columns: repeat(3,1fr); max-width: 1280px; margin: 0 auto; }
.feat-card { padding: 44px 36px; border-right: 1px solid var(--border-default); transition: background .2s; }
.feat-card:last-child { border-right: none; border-right: 1px solid var(--border-default); } /* Add border for grid consistency */
.feat-card:last-child { border-right: none; }
.feat-card:hover { background: var(--bg-muted); }
.feat-card h3 { font-size: 17px; font-weight: 700; color: var(--fg-default); margin: 14px 0 10px; }
.feat-card p { font-size: 13px; color: var(--fg-muted); line-height: 1.7; }

/* ===================================================
   ICON BOXES
   =================================================== */
.feat-icon-box { width: 36px; height: 36px; background: var(--accent-bg); border: 1px solid rgba(63,185,80,.18); display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
.feat-icon-box.small { width: 26px; height: 26px; }

/* ===================================================
   STATS CAROUSEL — AT A GLANCE (Focused Animation)
   =================================================== */
.stats-carousel-section {
  background: var(--bg-canvas);
  border-bottom: 1px solid var(--border-default);
  overflow: hidden;
}

.stats-carousel-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1280px;
  margin: 0 auto;
  padding: 40px 24px 12px;
}

.stats-label {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 11px;
  font-weight: 700;
  font-family: var(--font-mono);
  letter-spacing: 0.12em;
  color: var(--fg-muted);
}

.stats-nav-btns { display: flex; gap: 8px; }
.stats-nav-btn {
  width: 28px; height: 28px;
  display: flex; align-items: center; justify-content: center;
  background: none;
  border: 1px solid var(--border-default);
  color: var(--fg-muted);
  transition: border-color .15s, color .15s, background .15s;
}
.stats-nav-btn:hover { border-color: var(--accent-green); color: var(--accent-green); background: var(--accent-bg); }

.stats-carousel-track-wrapper {
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 24px 0 40px;
  overflow: hidden;
}

/* 
  Cover-Flow Style
*/
.stats-carousel-track {
  display: flex;
  gap: 32px;
  transition: transform 0.8s cubic-bezier(0.25, 1, 0.5, 1); /* Smooth focus transition */
  cursor: grab;
  user-select: none;
  align-items: center;
}
.stats-carousel-track.dragging { cursor: grabbing; transition: none; }

.stat-slide {
  flex: 0 0 50%;
  max-width: 500px;
  padding: 48px 32px;
  border: 1px solid var(--border-default);
  transition: background 0.8s, transform 0.8s cubic-bezier(0.25, 1, 0.5, 1), opacity 0.8s;
  opacity: 0.3;
  transform: scale(0.8);
  text-align: center;
  background: var(--bg-card);
  border-radius: 12px;
}

.stat-slide.active {
  opacity: 1;
  transform: scale(1);
  background: var(--bg-subtle);
  border-color: var(--accent-green);
  box-shadow: 0 0 40px rgba(63,185,80,.05);
}

.stat-slide-num {
  font-size: clamp(48px, 6vw, 72px);
  font-weight: 900;
  font-family: var(--font-mono);
  color: var(--fg-default);
  letter-spacing: -0.03em;
  line-height: 1;
  margin-bottom: 12px;
  transition: color 0.8s;
}
.stat-slide.active .stat-slide-num { color: var(--accent-green); }

.stat-slide-lbl {
  font-size: 16px;
  font-weight: 700;
  color: var(--fg-default);
  margin-bottom: 8px;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  font-family: var(--font-mono);
}

.stat-slide-sub {
  font-size: 14px;
  color: var(--fg-muted);
  font-family: var(--font-mono);
}

.stats-carousel-dots {
  display: flex;
  align-items: center;
  gap: 8px;
  justify-content: center;
  padding: 0 0 40px;
}
.stat-dot {
  width: 6px; height: 6px;
  border-radius: 50%;
  background: var(--border-default);
  border: none;
  transition: background 0.3s, transform 0.3s;
}
.stat-dot.active { background: var(--accent-green); transform: scale(1.5); }

/* ===================================================
   SKILLS GRID (4 col - ENLARGED)
   =================================================== */
.skills-feature-grid { display: grid; grid-template-columns: repeat(4,1fr); border: 1px solid var(--border-default); }
.skill-feat-card { padding: 56px 40px; border-right: 1px solid var(--border-default); display: flex; flex-direction: column; transition: background .2s; }
.skill-feat-card:last-child { border-right: none; }
.skill-feat-card:hover { background: var(--bg-muted); }
.skill-feat-top { display: flex; align-items: center; gap: 12px; margin-bottom: 24px; }
.skill-tag-label { font-size: 11px; font-weight: 700; font-family: var(--font-mono); color: var(--fg-muted); border: 1px solid var(--border-default); padding: 4px 10px; letter-spacing: .08em; text-transform: uppercase; }
.skill-feat-card h3 { font-size: 22px; font-weight: 700; color: var(--fg-default); margin-bottom: 12px; line-height: 1.3; }
.skill-feat-card p { font-size: 15px; color: var(--fg-muted); line-height: 1.7; flex: 1; }

@keyframes blink { 
  0%, 100% { opacity: 1; } 
  50% { opacity: 0; } 
}

/* ===================================================
   TECH STRIP (ROTATING LOGOS - NO CSS ANIMATION HERE ANYMORE?)
   =================================================== */
.tech-strip-wrapper { border-bottom: 1px solid var(--border-default); background: var(--bg-canvas); overflow: hidden; padding: 48px 0; position: relative; }
.tech-strip-wrapper::before,.tech-strip-wrapper::after { content: ''; position: absolute; top: 0; bottom: 0; width: 120px; z-index: 2; pointer-events: none; }
.tech-strip-wrapper::before { left: 0; background: linear-gradient(to right, var(--bg-canvas), transparent); }
.tech-strip-wrapper::after  { right: 0; background: linear-gradient(to left, var(--bg-canvas), transparent); }

.tech-strip-content {
  display: flex;
  width: max-content;
}

.tech-strip-item {
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-shrink: 0;
  gap: 16px;
  padding-right: 16px;
}

@keyframes marquee {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}

.animate-marquee {
  animation: marquee 40s linear infinite;
}

.tech-strip-wrapper:hover .animate-marquee {
  animation-play-state: paused;
}
.tech-chip { display: inline-flex; align-items: center; gap: 18px; font-size: 18px; font-weight: 600; font-family: var(--font-mono); color: var(--fg-muted); padding: 18px 36px; border: 1px solid var(--border-muted); background: var(--bg-subtle); white-space: nowrap; transition: color .15s, border-color .15s, transform .15s; }
.tech-chip:hover { color: var(--fg-default); border-color: var(--border-default); transform: translateY(-2px); }
.tech-chip svg, .tech-chip img { flex-shrink: 0; width: 32px !important; height: 32px !important; }

/* ===================================================
   PROJECTS GRID (3 col)
   =================================================== */
.projects-grid { display: grid; grid-template-columns: repeat(3,1fr); border-top: 1px solid var(--border-default); border-left: 1px solid var(--border-default); }
.project-featured { order: -1; }
.project-card { padding: 36px 28px; border-right: 1px solid var(--border-default); border-bottom: 1px solid var(--border-default); display: flex; flex-direction: column; transition: background .2s; }
.project-card:hover { background: var(--bg-muted); }
.project-card.project-featured { background: linear-gradient(135deg,rgba(13,32,22,.6) 0%,var(--bg-canvas) 100%); }
.project-card.project-featured:hover { background: linear-gradient(135deg,rgba(13,32,22,.9) 0%,var(--bg-muted) 100%); }
.proj-top { display: flex; align-items: flex-start; justify-content: space-between; margin-bottom: 14px; }
.proj-num { font-size: 11px; font-weight: 700; font-family: var(--font-mono); color: var(--fg-subtle); letter-spacing: .1em; }
.proj-actions { display: flex; align-items: center; gap: 8px; }
.proj-badge-featured { font-size: 10px; font-weight: 700; font-family: var(--font-mono); color: var(--accent-text); border: 1px solid rgba(63,185,80,.3); padding: 2px 7px; text-transform: uppercase; }
.proj-icon-link { width: 28px; height: 28px; border: 1px solid var(--border-default); display: flex; align-items: center; justify-content: center; color: var(--fg-muted); transition: border-color .15s, color .15s; }
.proj-icon-link:hover { border-color: var(--fg-muted); color: var(--fg-default); }
.proj-category-label { font-size: 10px; font-weight: 700; font-family: var(--font-mono); color: var(--fg-muted); border: 1px solid var(--border-default); padding: 3px 7px; margin-bottom: 12px; display: inline-block; text-transform: uppercase; }
.project-card h3 { font-size: 16px; font-weight: 700; color: var(--fg-default); margin-bottom: 8px; line-height: 1.3; }
.project-card p { font-size: 13px; color: var(--fg-muted); line-height: 1.7; flex: 1; margin-bottom: 14px; }
.proj-tags { display: flex; flex-wrap: wrap; gap: 5px; margin-bottom: 16px; }
.ptag { font-size: 10px; font-weight: 500; font-family: var(--font-mono); color: var(--fg-muted); border: 1px solid var(--border-muted); padding: 2px 7px; }
.card-arrow { display: inline-flex; align-items: center; justify-content: center; width: 28px; height: 28px; border: 1px solid var(--border-default); color: var(--fg-muted); transition: border-color .15s, color .15s, background .15s; margin-top: auto; }
.card-arrow:hover { border-color: var(--accent-green); color: var(--accent-green); background: var(--accent-bg); }

@keyframes fadeInProject {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
.extra-project.show {
  display: flex !important;
  animation: fadeInProject 0.5s ease forwards;
}

/* ===================================================
   CERTIFICATIONS
   =================================================== */
.certs-grid { display: grid; grid-template-columns: repeat(3,1fr); border-top: 1px solid var(--border-default); border-left: 1px solid var(--border-default); }
.cert-card { padding: 36px 28px; border-right: 1px solid var(--border-default); border-bottom: 1px solid var(--border-default); display: flex; flex-direction: column; transition: background .2s; }
.cert-card:hover { background: var(--bg-muted); }
.cert-card-top { display: flex; align-items: center; gap: 12px; margin-bottom: 18px; }
.cert-card h3 { font-size: 16px; font-weight: 700; color: var(--fg-default); margin-bottom: 8px; line-height: 1.3; flex: 1; }
.cert-issuer-line { font-size: 12px; color: var(--fg-muted); margin-bottom: 18px; font-family: var(--font-mono); }

/* ===================================================
   FAQ & CONTACT
   =================================================== */
.faq-layout { display: grid; grid-template-columns: 180px 1fr; border: 1px solid var(--border-default); margin-bottom: 72px; }
.faq-sidebar { border-right: 1px solid var(--border-default); padding: 28px 0; }
.faq-category { font-size: 11px; font-weight: 700; font-family: var(--font-mono); letter-spacing: .08em; text-transform: uppercase; color: var(--fg-muted); background: none; border: none; border-left: 2px solid transparent; padding: 10px 20px; text-align: left; transition: color .15s, border-color .15s, background .15s; width: 100%; }
.faq-category:hover { color: var(--fg-default); background: var(--bg-muted); }
.faq-category.active { color: var(--fg-default); border-left-color: var(--accent-green); background: var(--bg-muted); }
.faq-group-label { display: block; font-size: 11px; font-weight: 700; font-family: var(--font-mono); letter-spacing: .1em; color: var(--fg-subtle); padding: 20px 28px 10px; border-bottom: 1px solid var(--border-muted); }
.faq-item { border-bottom: 1px solid var(--border-muted); }
.faq-item:last-child { border-bottom: none; }
.faq-q { width: 100%; display: flex; align-items: center; justify-content: space-between; gap: 16px; padding: 18px 28px; font-size: 14px; font-weight: 500; color: var(--fg-default); background: none; border: none; text-align: left; transition: background .15s; cursor: pointer; }
.faq-q:hover { background: var(--bg-muted); }
.faq-chevron { flex-shrink: 0; transition: transform .2s; }
.faq-q[aria-expanded="true"] .faq-chevron { transform: rotate(180deg); }
.faq-a { padding: 0 28px 18px; font-size: 13px; color: var(--fg-muted); line-height: 1.7; }

.contact-form-section { border: 1px solid var(--border-default); padding: 44px; background: var(--bg-muted); }
.contact-form-heading { font-size: 20px; font-weight: 700; color: var(--fg-default); margin-bottom: 28px; }
.contact-layout { display: grid; grid-template-columns: 1fr 2fr; gap: 44px; align-items: start; }
.contact-intro-text { font-size: 14px; color: var(--fg-muted); line-height: 1.7; margin-bottom: 24px; }
.contact-links { display: flex; flex-direction: column; gap: 10px; }
.contact-link-item { display: flex; align-items: center; gap: 10px; font-size: 13px; color: var(--fg-muted); padding: 9px 12px; border: 1px solid var(--border-muted); transition: border-color .15s, color .15s, background .15s; }
.contact-link-item:hover { border-color: var(--border-default); color: var(--fg-default); background: var(--bg-canvas); }
.contact-form { display: flex; flex-direction: column; gap: 18px; }
.form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; }
.form-group { display: flex; flex-direction: column; gap: 6px; }
.form-group label { font-size: 11px; font-weight: 700; font-family: var(--font-mono); color: var(--fg-muted); letter-spacing: .05em; text-transform: uppercase; }
.form-group input, .form-group textarea { background: var(--bg-canvas); border: 1px solid var(--border-default); color: var(--fg-default); font-family: var(--font-base); font-size: 14px; padding: 10px 12px; outline: none; transition: border-color .15s, box-shadow .15s; resize: vertical; border-radius: 0; }
.form-group input::placeholder, .form-group textarea::placeholder { color: var(--fg-subtle); }
.form-group input:focus, .form-group textarea:focus { border-color: var(--accent-green); box-shadow: 0 0 0 2px rgba(63,185,80,.1); }

/* ===================================================
   FOOTER
   =================================================== */
.site-footer { background: var(--bg-subtle); border-top: 1px solid var(--border-default); }
.footer-inner { max-width: 1280px; margin: 0 auto; padding: 44px 24px 28px; }
.footer-top { display: flex; align-items: center; gap: 28px; flex-wrap: wrap; padding-bottom: 28px; border-bottom: 1px solid var(--border-default); margin-bottom: 20px; }
.footer-logo { display: flex; align-items: center; gap: 8px; font-size: 14px; font-weight: 700; color: var(--fg-default); flex-shrink: 0; }
.footer-links-group { display: flex; align-items: center; flex-wrap: wrap; margin-right: auto; }
.footer-link { font-size: 13px; color: var(--fg-muted); padding: 4px 12px; border-right: 1px solid var(--border-muted); transition: color .15s; }
.footer-link:last-child { border-right: none; }
.footer-link:hover { color: var(--fg-default); }
.footer-social { display: flex; gap: 8px; }
.footer-social-link { width: 32px; height: 32px; border: 1px solid var(--border-default); display: flex; align-items: center; justify-content: center; color: var(--fg-muted); transition: border-color .15s, color .15s, background .15s; }
.footer-social-link:hover { border-color: var(--fg-muted); color: var(--fg-default); background: var(--bg-muted); }
.footer-bottom { display: flex; align-items: center; justify-content: space-between; font-size: 12px; color: var(--fg-subtle); font-family: var(--font-mono); flex-wrap: wrap; gap: 8px; }

/* ===================================================
   SCROLL ANIMATIONS
   =================================================== */
[data-animate] { opacity: 0; transform: translateY(20px); transition: opacity .5s ease, transform .5s ease; }
[data-animate].visible { opacity: 1; transform: translateY(0); }

/* ===================================================
   MOBILE NAV
   =================================================== */
@media (max-width: 900px) {
  .nav-links { display: none; position: fixed; top: var(--nav-h); left: 0; right: 0; background: #000; border-bottom: 1px solid var(--border-default); flex-direction: column; align-items: flex-start; padding: 12px 0; z-index: 99; }
  .nav-links.open { display: flex; }
  .nav-link { width: 100%; padding: 12px 24px; border-bottom: 1px solid var(--border-muted); }
  .nav-actions { display: none; }
  .hamburger { display: flex; }
}

/* ===================================================
   RESPONSIVE
   =================================================== */
@media (max-width: 1100px) {
  .skills-feature-grid { grid-template-columns: repeat(2,1fr); }
  .skill-feat-card:nth-child(2) { border-right: none; }
  .skill-feat-card:nth-child(1),.skill-feat-card:nth-child(2) { border-bottom: 1px solid var(--border-default); }
  .skill-feat-card:nth-child(4) { border-right: none; }
}

@media (max-width: 960px) {
  .features-grid-3 { grid-template-columns: 1fr; }
  .feat-card { border-right: none; border-bottom: 1px solid var(--border-default); }
  .feat-card:last-child { border-bottom: none; }
  .hero-grid { grid-template-columns: 1fr; padding: 48px 24px 56px; }
  .hero-left { padding-right: 0; }
  .hero-right-desktop { display: none; }
  .hero-right-mobile { display: block; }
  .contact-layout { grid-template-columns: 1fr; gap: 28px; }
}

@media (max-width: 768px) {
  :root { --nav-h: 54px; --subnav-h: 40px; }
  .section-container { padding: 60px 16px; }
  .hero-headline { font-size: 44px; }
  .projects-grid { grid-template-columns: 1fr; border-top: 1px solid var(--border-default); border-left: 1px solid var(--border-default); }
  .project-card { border-right: 1px solid var(--border-default); border-bottom: 1px solid var(--border-default); }
  .certs-grid { grid-template-columns: 1fr; border-top: 1px solid var(--border-default); border-left: 1px solid var(--border-default); }
  .cert-card { border-right: 1px solid var(--border-default); border-bottom: 1px solid var(--border-default); }
  
  .faq-layout { grid-template-columns: 1fr; }
  .faq-sidebar { border-right: none; border-bottom: 1px solid var(--border-default); display: flex; flex-wrap: wrap; padding: 12px; }
  .faq-category { border-left: none; border-bottom: 2px solid transparent; padding: 8px 14px; width: auto; }
  .faq-category.active { border-left: none; border-bottom-color: var(--accent-green); }
  .contact-form-section { padding: 28px 20px; }
  .form-row { grid-template-columns: 1fr; }
  .footer-top { flex-direction: column; align-items: flex-start; }
  .footer-links-group { margin-right: 0; }
  .footer-bottom { flex-direction: column; gap: 4px; }
  
  .skills-feature-grid { grid-template-columns: 1fr; }
  .skill-feat-card { border-right: none; border-bottom: 1px solid var(--border-default); padding: 32px 24px; }
  .skill-feat-card:last-child { border-bottom: none; }
  .stat-slide { flex: 0 0 80%; padding: 32px 16px; }
}

@media (max-width: 480px) {
  .hero-headline { font-size: 36px; }
  .hero-ctas { flex-direction: column; align-items: flex-start; }
  .hero-socials { gap: 6px; }
  .social-icon-btn { font-size: 11px; padding: 5px 10px; }
  .stats-carousel-track-wrapper { padding: 16px 16px 32px; }
}

/* ===================================================
   PUBLICATIONS
   =================================================== */
.pub-card { border: 1px solid var(--border-default); background: var(--bg-subtle); padding: 40px; display: flex; gap: 36px; transition: background .2s, border-color .2s; }
.pub-card:hover { background: var(--bg-muted); border-color: rgba(63,185,80,.3); }
.pub-journal-badge { display: flex; flex-direction: column; align-items: center; gap: 10px; flex-shrink: 0; width: 80px; padding-top: 4px; }
.pub-journal-name { font-size: 10px; font-weight: 700; font-family: var(--font-mono); color: var(--fg-muted); text-align: center; letter-spacing: .06em; text-transform: uppercase; }
.pub-body { flex: 1; }
.pub-category-label { font-size: 11px; font-weight: 700; font-family: var(--font-mono); color: var(--accent-green); text-transform: uppercase; letter-spacing: .1em; display: block; margin-bottom: 12px; }
.pub-title { font-size: 20px; font-weight: 700; color: var(--fg-default); line-height: 1.3; margin-bottom: 16px; }
.pub-abstract { font-size: 14px; color: var(--fg-muted); line-height: 1.8; margin-bottom: 20px; }
.pub-tags { display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 24px; }
.pub-footer { display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 12px; }
.pub-meta { font-size: 12px; font-family: var(--font-mono); color: var(--fg-muted); }
.pub-link-btn { font-size: 13px; padding: 8px 18px; }

/* ===================================================
   EXPERIENCE
   =================================================== */
.experience-timeline { display: flex; flex-direction: column; }
.exp-card { display: flex; gap: 24px; }
.exp-card-left { display: flex; flex-direction: column; align-items: center; gap: 0; flex-shrink: 0; }
.exp-org-logo { flex-shrink: 0; }
.exp-timeline-line { width: 2px; flex: 1; background: var(--border-default); margin-top: 12px; min-height: 40px; }
.exp-card-body { border: 1px solid var(--border-default); background: var(--bg-subtle); padding: 36px; flex: 1; margin-bottom: 32px; transition: background .2s, border-color .2s; }
.exp-card-body:hover { background: var(--bg-muted); border-color: rgba(63,185,80,.2); }
.exp-header { display: flex; justify-content: space-between; align-items: flex-start; gap: 16px; margin-bottom: 20px; flex-wrap: wrap; }
.exp-role { font-size: 18px; font-weight: 700; color: var(--fg-default); margin-bottom: 4px; }
.exp-org { font-size: 14px; color: var(--fg-muted); }
.exp-meta { display: flex; flex-direction: column; align-items: flex-end; gap: 8px; flex-shrink: 0; }
.exp-duration { font-size: 12px; font-family: var(--font-mono); color: var(--fg-muted); white-space: nowrap; }
.exp-time-left { width: 140px; text-align: right; color: #fff; font-size: 13px; font-family: var(--font-mono); margin-top: 10px; flex-shrink: 0; line-height: 1.6; }
.exp-badge-active { font-size: 11px; font-weight: 700; color: var(--accent-green); background: var(--accent-bg); border: 1px solid rgba(63,185,80,.3); padding: 3px 10px; font-family: var(--font-mono); white-space: nowrap; }
.exp-bullets { list-style: none; padding: 0; margin-bottom: 20px; display: flex; flex-direction: column; gap: 12px; }
.exp-bullets li { font-size: 14px; color: var(--fg-muted); line-height: 1.7; padding-left: 20px; position: relative; }
.exp-bullets li::before { content: '→'; position: absolute; left: 0; color: var(--accent-green); font-weight: 700; }
.exp-bullets strong { color: var(--fg-default); }
.exp-tags { display: flex; flex-wrap: wrap; gap: 8px; }

/* ===================================================
   PROJECT DETAIL BUTTON & MODAL
   =================================================== */
.proj-detail-btn { background: none; border: 1px solid var(--border-default); color: var(--fg-muted); transition: color .15s, border-color .15s, transform .15s; display: flex; align-items: center; justify-content: center; width: 32px; height: 32px; cursor: pointer; }
.proj-detail-btn:hover { color: var(--accent-green); border-color: rgba(63,185,80,.4); transform: translateX(2px); }
.proj-github-link { color: var(--fg-muted) !important; }
.proj-github-link:hover { color: var(--fg-default) !important; }

.proj-modal-overlay { position: fixed; inset: 0; z-index: 200; background: rgba(0,0,0,0.85); backdrop-filter: blur(8px); display: flex; align-items: center; justify-content: center; padding: 24px; opacity: 0; pointer-events: none; transition: opacity .3s ease; }
.proj-modal-overlay.open { opacity: 1; pointer-events: all; }
.proj-modal { background: #0d1117; border: 1px solid var(--border-default); max-width: 680px; width: 100%; max-height: 80vh; overflow-y: auto; padding: 40px; position: relative; transform: translateY(32px) scale(0.95); transition: transform .4s cubic-bezier(0.175, 0.885, 0.32, 1.275), opacity .4s ease; opacity: 0; }
.proj-modal-overlay.open .proj-modal { transform: translateY(0) scale(1); opacity: 1; }

/* Staggered animation for modal body children */
.proj-modal > * { opacity: 0; transform: translateY(15px); transition: opacity 0.4s ease, transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275); }
.proj-modal-overlay.open .proj-modal > * { opacity: 1; transform: translateY(0); }
.proj-modal-overlay.open .proj-modal > *:nth-child(1) { transition-delay: 0.1s; }
.proj-modal-overlay.open .proj-modal > *:nth-child(2) { transition-delay: 0.15s; }
.proj-modal-overlay.open .proj-modal > *:nth-child(3) { transition-delay: 0.2s; }
.proj-modal-overlay.open .proj-modal > *:nth-child(4) { transition-delay: 0.25s; }
.proj-modal-overlay.open .proj-modal > *:nth-child(5) { transition-delay: 0.3s; }
.proj-modal-overlay.open .proj-modal > *:nth-child(6) { transition-delay: 0.35s; }
.proj-modal-close { position: absolute; top: 16px; right: 16px; background: none; border: 1px solid var(--border-default); color: var(--fg-muted); width: 32px; height: 32px; display: flex; align-items: center; justify-content: center; cursor: pointer; transition: border-color .15s, color .15s; }
.proj-modal-close:hover { border-color: var(--fg-muted); color: var(--fg-default); }
.proj-modal-body h2 { font-size: 22px; font-weight: 700; color: var(--fg-default); margin-bottom: 8px; }
.proj-modal-body .pm-category { font-size: 11px; font-weight: 700; color: var(--accent-green); font-family: var(--font-mono); text-transform: uppercase; letter-spacing: .1em; display: block; margin-bottom: 16px; }
.proj-modal-body p { font-size: 14px; color: var(--fg-muted); line-height: 1.8; margin-bottom: 20px; }
.proj-modal-body .pm-tags { display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 24px; }
.proj-modal-body .pm-link { display: inline-flex; align-items: center; gap: 8px; font-size: 13px; font-weight: 600; color: #fff; background: var(--accent-dim); padding: 9px 18px; border: 1px solid var(--accent-dim); transition: background .15s; text-decoration: none; }
.proj-modal-body .pm-link:hover { background: #2ea043; }

/* ===================================================
   SCROLL ANIMATIONS (re-trigger on enter AND leave)
   =================================================== */
[data-animate] { opacity: 0; transform: translateY(28px); transition: opacity .55s ease, transform .55s cubic-bezier(0.2,0.8,0.2,1); }
[data-animate="fade-left"] { transform: translateX(-28px); }
[data-animate].is-visible { opacity: 1; transform: none; }

/* ===================================================
   FOOTER LOGO WITH NAME
   =================================================== */
.footer-logo { display: flex; align-items: center; gap: 10px; font-size: 15px; font-weight: 700; color: var(--fg-default); }

/* ===================================================
   CERT CARD TOP — for logos instead of icon boxes
   =================================================== */
.cert-card-top { display: flex; align-items: center; gap: 16px; margin-bottom: 20px; flex-wrap: wrap; }

/* ===================================================
   TECH STRIP — actual images
   =================================================== */
.tech-chip img { object-fit: contain; flex-shrink: 0; }

