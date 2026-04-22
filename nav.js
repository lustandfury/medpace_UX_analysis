(function () {
  const inSubdir = window.location.pathname.includes('/pages/');
  const root = inSubdir ? '../' : '';

  // Inject nav styles (hardcoded so pages don't need matching CSS variables)
  const style = document.createElement('style');
  style.textContent =
    ".nav-wrapper{background:#0D1B2A;padding:12px max(64px,calc((100vw - 1280px) / 2));border-bottom:1px solid rgba(2,195,154,.2);display:flex;align-items:center;gap:24px;font-family:'DM Sans',sans-serif;}" +
    '.nav-home{font-size:13px;font-weight:600;color:#02C39A;text-decoration:none;display:flex;align-items:center;gap:6px;transition:color .2s;}' +
    '.nav-home:hover{color:#fff;}' +
    ".nav-home::before{content:'⌂';font-size:14px;}" +
    '.nav-divider{width:1px;height:20px;background:rgba(255,255,255,.2);}' +
    '.nav-dropdown{position:relative;}' +
    ".nav-toggle{background:transparent;border:none;color:#8FAAB3;font-size:13px;font-weight:600;cursor:pointer;display:flex;align-items:center;gap:8px;transition:color .2s;font-family:'DM Sans',sans-serif;}" +
    '.nav-toggle:hover{color:#02C39A;}' +
    ".nav-toggle::after{content:'▼';font-size:10px;transition:transform .2s;}" +
    '.nav-dropdown.open .nav-toggle::after{transform:rotate(180deg);}' +
    '.nav-menu{position:absolute;top:100%;left:0;background:#132233;border:1px solid rgba(2,195,154,.3);border-radius:8px;min-width:220px;margin-top:8px;display:none;flex-direction:column;z-index:1000;box-shadow:0 8px 20px rgba(0,0,0,.3);}' +
    '.nav-dropdown.open .nav-menu{display:flex;}' +
    '.nav-item{color:#8FAAB3;text-decoration:none;padding:12px 16px;font-size:13px;transition:all .2s;border-left:3px solid transparent;}' +
    '.nav-item:hover{background:rgba(2,195,154,.1);color:#02C39A;border-left-color:#028090;}' +
    '.nav-item.active{background:rgba(2,195,154,.15);color:#02C39A;border-left-color:#02C39A;}' +
    '@media(max-width:768px){.nav-wrapper{padding:12px 24px!important;gap:16px;}}';
  document.head.appendChild(style);

  // Inject nav HTML synchronously (no flash)
  const currentFile = decodeURIComponent(window.location.pathname.split('/').pop() || '');
  const navEl = document.createElement('div');
  navEl.className = 'nav-wrapper';
  navEl.innerHTML =
    '<a href="' + root + 'index.html" class="nav-home">Home</a>' +
    '<div class="nav-divider"></div>' +
    '<div class="nav-dropdown" id="nav-dropdown">' +
    '<button class="nav-toggle" id="nav-toggle">Skills &amp; Resources</button>' +
    '<div class="nav-menu" id="nav-menu"></div>' +
    '</div>';
  const currentScript = document.currentScript;
  currentScript.parentNode.insertBefore(navEl, currentScript);

  // Toggle behavior
  document.getElementById('nav-toggle').addEventListener('click', function (e) {
    e.stopPropagation();
    document.getElementById('nav-dropdown').classList.toggle('open');
  });
  document.addEventListener('click', function () {
    document.getElementById('nav-dropdown').classList.remove('open');
  });
  document.getElementById('nav-menu').addEventListener('click', function (e) {
    e.stopPropagation();
  });

  // Populate pages dropdown
  function addNavItem(filename) {
    const a = document.createElement('a');
    a.href = root + 'pages/' + encodeURIComponent(filename);
    a.className = 'nav-item';
    a.textContent = filename.replace(/\.[^/.]+$/, '');
    if (currentFile === filename) a.classList.add('active');
    document.getElementById('nav-menu').appendChild(a);
  }

  async function loadPages() {
    const menu = document.getElementById('nav-menu');

    // Try local directory listing (works with python -m http.server)
    try {
      const res = await fetch(root + 'pages/');
      if (res.ok) {
        const html = await res.text();
        const doc = new DOMParser().parseFromString(html, 'text/html');
        const files = Array.from(doc.querySelectorAll('a[href]'))
          .map(function (a) { return a.getAttribute('href'); })
          .filter(function (h) { return h && !h.startsWith('?') && !h.startsWith('/') && h !== '../' && !h.endsWith('/'); });
        if (files.length) {
          files.forEach(function (h) { addNavItem(decodeURIComponent(h)); });
          return;
        }
      }
    } catch (e) {}

    // Fall back to GitHub API (works on GitHub Pages)
    try {
      const res = await fetch('https://api.github.com/repos/lustandfury/medpace_UX_analysis/contents/pages');
      const data = await res.json();
      if (Array.isArray(data)) {
        data.filter(function (f) { return f.type === 'file'; }).forEach(function (f) { addNavItem(f.name); });
        return;
      }
    } catch (e) {}

    const p = document.createElement('a');
    p.className = 'nav-item';
    p.textContent = 'No pages yet';
    p.style.cssText = 'color:#4A6572;pointer-events:none';
    menu.appendChild(p);
  }

  loadPages();
})();
