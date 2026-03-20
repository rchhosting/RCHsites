/* ═══ RCHsites — Shared Scripts ═══ */
document.addEventListener('DOMContentLoaded', () => {

  // ── PERSPECTIVE GRID ──
  const gc = document.getElementById('gridCanvas');
  if (gc) {
    const gx = gc.getContext('2d');
    let scrollY = 0, frame = 0;
    function resizeG() { gc.width = window.innerWidth; gc.height = window.innerHeight; }
    resizeG(); window.addEventListener('resize', resizeG);

    function drawGrid() {
      gx.clearRect(0, 0, gc.width, gc.height);
      const cx = gc.width/2, cy = gc.height*0.3;
      const cols = 30, rows = 22, spread = gc.width*1.3, depth = gc.height*1.6;
      const warp = 0.55 + Math.sin(frame*0.006)*0.06 + scrollY*0.0002;
      gx.strokeStyle = 'rgba(74,143,231,0.04)'; gx.lineWidth = 0.6;
      for (let r=0; r<rows; r++) {
        const t=r/rows, p=Math.pow(t,warp), y=cy+p*depth, xs=spread*(0.2+p*0.8);
        gx.beginPath(); gx.moveTo(cx-xs/2,y); gx.lineTo(cx+xs/2,y); gx.stroke();
      }
      for (let c=0; c<=cols; c++) {
        const t=c/cols-0.5; gx.beginPath();
        for (let r=0; r<rows; r++) {
          const rt=r/rows, p=Math.pow(rt,warp), y=cy+p*depth, xs=spread*(0.2+p*0.8), x=cx+t*xs;
          if(r===0) gx.moveTo(x,y); else gx.lineTo(x,y);
        }
        gx.stroke();
      }
      frame++; requestAnimationFrame(drawGrid);
    }
    drawGrid();

    window.addEventListener('scroll', () => { scrollY = window.scrollY; }, { passive: true });
  }

  // ── NAV ──
  const nav = document.querySelector('nav');
  window.addEventListener('scroll', () => {
    if (nav) nav.classList.toggle('scrolled', window.scrollY > 30);
  }, { passive: true });

  const toggle = document.querySelector('.n-toggle');
  if (toggle) toggle.addEventListener('click', () => {
    document.querySelector('.n-links').classList.toggle('open');
  });

  // ── SCROLL REVEALS ──
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('vis'); });
  }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
  document.querySelectorAll('.rv,.rv-l,.rv-r').forEach(el => obs.observe(el));

  // ── SMOOTH SCROLL ──
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const t = document.querySelector(a.getAttribute('href'));
      if (t) { e.preventDefault(); t.scrollIntoView({ behavior: 'smooth' }); }
    });
  });
});
