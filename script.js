
// Particles
const canvas = document.getElementById('particles');
const ctx = canvas.getContext('2d');
let w,h, particles=[];
function resize(){ w=canvas.width=window.innerWidth; h=canvas.height=window.innerHeight }
window.addEventListener('resize', resize); resize();
function spawn(){
  particles = Array.from({length: 90}, () => ({ 
    x: Math.random()*w, y: Math.random()*h, 
    r: Math.random()*2+0.5, 
    vx: (Math.random()-0.5)*0.2, vy:(Math.random()-0.5)*0.2, 
    a: Math.random()*1 
  }));
}
spawn();
function step(){
  ctx.clearRect(0,0,w,h);
  ctx.fillStyle='rgba(178,108,255,0.7)';
  for(const p of particles){ 
    p.x+=p.vx; p.y+=p.vy; 
    if(p.x<0||p.x>w) p.vx*=-1; 
    if(p.y<0||p.y>h) p.vy*=-1;
    ctx.globalAlpha = 0.2 + 0.8*Math.abs(Math.sin(p.a));
    p.a += 0.005;
    ctx.beginPath(); ctx.arc(p.x,p.y,p.r,0,Math.PI*2); ctx.fill();
  }
  requestAnimationFrame(step);
}
step();

// Puzzle
const slots = document.querySelectorAll('.slot');
const pieces = document.querySelectorAll('.piece');
let placed=0;

pieces.forEach(p => { 
  p.addEventListener('dragstart', e => { e.dataTransfer.setData('id', p.dataset.id); }); 
});

slots.forEach(s => { 
  s.addEventListener('dragover', e => { e.preventDefault(); s.classList.add('active'); });
  s.addEventListener('dragleave', () => s.classList.remove('active'));
  s.addEventListener('drop', e => {
    e.preventDefault();
    s.classList.remove('active');
    const id = e.dataTransfer.getData('id');
    if(s.dataset.match===id && !s.firstChild){
      const el = document.querySelector(`.piece[data-id="${id}"]`);
      el.draggable=false;
      el.style.cursor='default';
      el.style.transform='scale(1)';
      s.appendChild(el);
      placed++;
      if(placed === 6) document.getElementById('unlock').classList.remove('hidden');
    }
  });
});
