const SPEED_COEF = 2;
const STAR_WIDTH = 2;
const STARS_COUNT = 100;
const STAR_COLOR = 'white';
const SHADOW = 'rgba(0, 0, 8, .1)';

const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');
const w = canvas.width = window.innerWidth;
const h = canvas.height = window.innerHeight;
const stars = new Array(STARS_COUNT).fill(null).map(() => ({
  y: 0,
  x: Math.random() * w,
  speed: Math.random() * SPEED_COEF,
}));

window.addEventListener('resize', () => {
  w = canvas.width = window.innerWidth;
  h = canvas.height = window.innerHeight;
});

(function moveStars() {
  ctx.fillStyle = SHADOW;
  ctx.fillRect(0, 0, w, h);

  stars.forEach((s) => {
    if(s.y >= h) {
      s.y = 0;
    } else {
      s.y+= s.speed;
    }

    ctx.beginPath();
    ctx.rect(s.x, s.y, STAR_WIDTH, STAR_WIDTH);
    ctx.closePath();
    ctx.strokeStyle = STAR_COLOR;
    ctx.stroke();
  });

  requestAnimationFrame(moveStars);
})();
