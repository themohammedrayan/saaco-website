document.getElementById('yr').textContent = new Date().getFullYear();

var header = document.getElementById('header');
var scrollTopBtn = document.getElementById('scrollTop');
if (scrollTopBtn) {
  window.addEventListener('scroll', function() {
    if (header) header.classList.toggle('scrolled', window.scrollY > 12);
    scrollTopBtn.classList.toggle('visible', window.scrollY > 400);
  });
  scrollTopBtn.addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

var toggle = document.getElementById('menuToggle');
var navLinksEl = document.getElementById('navLinks');
if (toggle && navLinksEl) {
  toggle.addEventListener('click', function() { navLinksEl.classList.toggle('open'); });
  navLinksEl.querySelectorAll('a').forEach(function(a) {
    a.addEventListener('click', function() { navLinksEl.classList.remove('open'); });
  });
}

var io = new IntersectionObserver(function(entries) {
  entries.forEach(function(e) {
    if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
  });
}, { threshold: 0.1 });
document.querySelectorAll('.reveal:not(.in)').forEach(function(el) { io.observe(el); });

function animateCounter(el) {
  var target = parseInt(el.dataset.target, 10);
  var suffix = el.dataset.suffix || '';
  var duration = 1600;
  var start = performance.now();
  function step(now) {
    var p = Math.min((now - start) / duration, 1);
    var ease = 1 - Math.pow(1 - p, 3);
    el.textContent = Math.round(ease * target) + suffix;
    if (p < 1) requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
}
var counterObs = new IntersectionObserver(function(entries) {
  entries.forEach(function(e) {
    if (e.isIntersecting && e.target.dataset.target) {
      animateCounter(e.target);
      counterObs.unobserve(e.target);
    }
  });
}, { threshold: 0.5 });
document.querySelectorAll('[data-target]').forEach(function(el) { counterObs.observe(el); });

var waBtn = document.getElementById('waQuoteBtn');
if (waBtn) {
  function updateWaLink() {
    var name = document.getElementById('name').value.trim();
    var phone = document.getElementById('phone').value.trim();
    var service = document.getElementById('service').value;
    var msg = document.getElementById('msg').value.trim();
    var text = 'Hello SAACO, I would like to request a quote.';
    if (name) text += '\n\nName: ' + name;
    if (phone) text += '\nPhone: ' + phone;
    if (service) text += '\nService: ' + service;
    if (msg) text += '\nDetails: ' + msg;
    waBtn.href = 'https://wa.me/966590246464?text=' + encodeURIComponent(text);
  }
  ['name', 'phone', 'service', 'msg'].forEach(function(id) {
    document.getElementById(id).addEventListener('input', updateWaLink);
  });
  updateWaLink();

  var form = document.getElementById('quoteForm');
  var note = document.getElementById('formNote');
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    updateWaLink();
    window.open(waBtn.href, '_blank', 'noopener');
    note.textContent = "Opening WhatsApp — we'll be with you shortly!";
    note.style.color = '#37e0e0';
    setTimeout(function() {
      note.textContent = 'We typically respond within one business day.';
      note.style.color = '';
    }, 5000);
  });
}

function buildNet(svg, count, w, h) {
  var NS = 'http://www.w3.org/2000/svg';
  svg.setAttribute('viewBox', '0 0 ' + w + ' ' + h);
  var pts = [];
  for (var i = 0; i < count; i++) { pts.push({ x: Math.random() * w, y: Math.random() * h }); }
  for (var i = 0; i < pts.length; i++) {
    for (var j = i + 1; j < pts.length; j++) {
      var dx = pts[i].x - pts[j].x, dy = pts[i].y - pts[j].y;
      if (Math.hypot(dx, dy) < w * 0.16) {
        var l = document.createElementNS(NS, 'line');
        l.setAttribute('x1', pts[i].x); l.setAttribute('y1', pts[i].y);
        l.setAttribute('x2', pts[j].x); l.setAttribute('y2', pts[j].y);
        l.setAttribute('stroke', 'rgba(31,196,196,0.35)');
        l.setAttribute('stroke-width', '0.7');
        svg.appendChild(l);
      }
    }
  }
  pts.forEach(function(p) {
    var c = document.createElementNS(NS, 'circle');
    c.setAttribute('cx', p.x); c.setAttribute('cy', p.y);
    c.setAttribute('r', 1.4 + Math.random() * 2.2);
    c.setAttribute('fill', 'rgba(31,196,196,0.7)');
    svg.appendChild(c);
  });
}

var heroNetEl = document.getElementById('heroNet');
if (heroNetEl) buildNet(heroNetEl, 46, 1200, 720);
var pageNetEl = document.getElementById('pageNet');
if (pageNetEl) buildNet(pageNetEl, 24, 1200, 300);
document.querySelectorAll('.net2,.net4').forEach(function(svg) { buildNet(svg, 34, 800, 600); });
