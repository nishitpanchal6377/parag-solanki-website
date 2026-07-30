// Year in footer
document.getElementById('year').textContent = new Date().getFullYear();

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// Build the seal's tick marks (36 radial ticks like an official rosette/seal)
const ticksGroup = document.getElementById('sealTicks');
if (ticksGroup) {
  const cx = 160, cy = 160, rOuter = 150, rInner = 143;
  const count = 36;
  for (let i = 0; i < count; i++) {
    const angle = (i / count) * Math.PI * 2;
    const x1 = cx + rOuter * Math.cos(angle);
    const y1 = cy + rOuter * Math.sin(angle);
    const x2 = cx + rInner * Math.cos(angle);
    const y2 = cy + rInner * Math.sin(angle);
    const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    line.setAttribute('x1', x1.toFixed(2));
    line.setAttribute('y1', y1.toFixed(2));
    line.setAttribute('x2', x2.toFixed(2));
    line.setAttribute('y2', y2.toFixed(2));
    ticksGroup.appendChild(line);
  }
}

// Mobile drawer nav
const burger = document.getElementById('burger');
const drawer = document.getElementById('drawer');
const drawerClose = document.getElementById('drawerClose');

function openDrawer() {
  drawer.classList.add('is-open');
  document.body.classList.add('no-scroll');
  burger.setAttribute('aria-expanded', 'true');
}
function closeDrawer() {
  drawer.classList.remove('is-open');
  document.body.classList.remove('no-scroll');
  burger.setAttribute('aria-expanded', 'false');
}
burger.addEventListener('click', openDrawer);
drawerClose.addEventListener('click', closeDrawer);
drawer.querySelectorAll('a').forEach(a => a.addEventListener('click', closeDrawer));

// Scroll progress bar
const progress = document.getElementById('progress');
function updateProgress() {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
  progress.style.width = pct + '%';
}
window.addEventListener('scroll', updateProgress, { passive: true });
updateProgress();

// Nav border intensifies on scroll
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.style.borderBottomColor = window.scrollY > 20 ? 'rgba(176,141,79,0.3)' : 'rgba(233,228,216,0.12)';
}, { passive: true });

// Scroll reveal
const revealEls = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });
revealEls.forEach(el => revealObserver.observe(el));

// Animated ledger counters
const counters = document.querySelectorAll('.ledger__num');
const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    const el = entry.target;
    const target = parseInt(el.dataset.count, 10);
    const suffix = el.dataset.suffix || '';
    if (prefersReducedMotion) {
      el.textContent = target + suffix;
      counterObserver.unobserve(el);
      return;
    }
    const duration = 1400;
    const start = performance.now();
    function tick(now) {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.round(eased * target).toLocaleString('en-IN') + suffix;
      if (progress < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
    counterObserver.unobserve(el);
  });
}, { threshold: 0.4 });
counters.forEach(el => counterObserver.observe(el));

// Magnetic button effect (desktop only)
if (!prefersReducedMotion && window.matchMedia('(hover: hover)').matches) {
  document.querySelectorAll('[data-magnetic]').forEach(btn => {
    btn.addEventListener('mousemove', (e) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      btn.style.transform = `translate(${x * 0.18}px, ${y * 0.35}px)`;
    });
    btn.addEventListener('mouseleave', () => {
      btn.style.transform = 'translate(0,0)';
    });
  });
}
