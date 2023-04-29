const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');
const w = canvas.width = window.innerWidth;
const h = canvas.height = window.innerHeight;
const random = n=>Math.random()*n;
const stars = new Array(100).fill(null).map(()=>({r: random(w), s: random(2), a: random(Math.PI*2)}));

requestAnimationFrame(loop);

window.addEventListener('resize', ()=>{
  w = canvas.width = window.innerWidth;
  h = canvas.height = window.innerHeight;
})

function loop() {
  ctx.fillStyle = 'rgba(0,0,8,.1)';
  ctx.fillRect(0,0,w,h);
  stars.forEach(e=>{
    if(e.a >= h) {
      e.a = 0;
    } else {
      e.a+= e.s;
    }
    ctx.beginPath();
    ctx.rect(e.r, e.a, 2, 2);
    ctx.closePath();
    ctx.fillStyle = 'white';
    ctx.fill();
  })
  requestAnimationFrame(loop);
}