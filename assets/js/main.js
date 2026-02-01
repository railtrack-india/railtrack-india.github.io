// ===== TRAIN PARALLAX =====
const train = document.getElementById('train');
window.addEventListener('scroll', () => {
  const scroll = window.scrollY;
  train.style.transform = `translateX(${scroll*1.8}px) rotate(-2deg)`;
});

// ===== SCROLLYTELLING =====
const features = document.querySelectorAll('.feature-tell');
window.addEventListener('scroll', () => {
  features.forEach(f => {
    const top = f.getBoundingClientRect().top;
    if(top < window.innerHeight - 100){
      f.classList.add('show');
    }
  });
});
