(function() {
  var topbarHTML = '<div class="topbar"><div class="wrap"><div class="tb-group"><a class="tb-item" href="tel:+966590246464"><svg viewBox="0 0 24 24"><path d="M3 5c0 9 7 16 16 16l3-3-4-3-2 2c-3-1-6-4-7-7l2-2-3-4-5 1z"/></svg>0590 246 464</a><a class="tb-item" href="mailto:admin@saaco.tech"><svg viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></svg>admin@saaco.tech</a></div><div class="tb-group secondary"><span class="tb-item"><svg viewBox="0 0 24 24"><path d="M12 21s-7-5.3-7-11a7 7 0 0 1 14 0c0 5.7-7 11-7 11z"/><circle cx="12" cy="10" r="2.4"/></svg>Jeddah, Saudi Arabia</span><span class="cr">CR 4030504859</span></div></div></div>';

  var navHTML = '<header id="header"><div class="wrap"><nav><a class="brand" href="index.html"><img class="logo-mark" src="logo.png" alt="SAACO logo" /><span class="brand-text"><b>SAACO</b><span>IT &amp; Security Solutions</span></span></a><div class="nav-links" id="navLinks"><a href="index.html#about">About</a><a href="services.html">Services</a><a href="projects.html">Projects</a><a href="contact.html" class="btn btn-primary nav-cta">Get a Quote</a></div><button class="menu-toggle" id="menuToggle" aria-label="Menu"><span></span><span></span><span></span></button></nav></div></header>';

  var footerHTML = '<footer><div class="wrap"><div class="foot-top"><div class="foot-brand"><div class="brand"><img class="logo-mark" src="logo.png" alt="SAACO logo" style="border-radius:8px;background:#fff;" /><span class="brand-text"><b>SAACO</b><span style="color:var(--teal)">IT &amp; Security Solutions</span></span></div><p>Sultan Ali Bin Ahmad Al Asmari Commercial Establishment. Connecting networks and securing futures across Saudi Arabia.</p></div><div class="foot-col"><h4>Company</h4><a href="index.html#about">About Us</a><a href="services.html">Services</a><a href="projects.html">Projects</a><a href="brands.html">Brands</a><a href="contact.html">Contact</a></div><div class="foot-col"><h4>Contact</h4><a href="tel:+966590246464">0590 246 464</a><a href="tel:+966552151564">0552 151 564</a><a href="mailto:admin@saaco.tech">admin@saaco.tech</a><a href="https://wa.me/966590246464" target="_blank" rel="noopener">WhatsApp Us</a><span>Jeddah, Saudi Arabia</span></div></div><div class="foot-bottom"><span>&copy; <span id="yr"></span> SAACO — Sultan Ali Bin Ahmad Al Asmari Commercial &middot; CR 4030504859</span><span class="ar">مؤسسة سلطان علي بن أحمد الأسمري التجارية</span></div></div></footer>';

  var tr = document.getElementById('topbar-root');
  var nr = document.getElementById('nav-root');
  var fr = document.getElementById('footer-root');
  if (tr) tr.outerHTML = topbarHTML;
  if (nr) nr.outerHTML = navHTML;
  if (fr) fr.outerHTML = footerHTML;

  var page = (window.location.pathname.split('/').pop() || 'index.html').toLowerCase();
  var activeMap = {
    'services.html': 'Services',
    'projects.html': 'Projects',
    'contact.html': 'Get a Quote'
  };
  var activeText = activeMap[page];
  if (activeText) {
    document.querySelectorAll('.nav-links a').forEach(function(a) {
      if (a.textContent.trim() === activeText) a.classList.add('active');
    });
  }
})();
