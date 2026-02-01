// Animate numbers in Project Snapshot stats
function animate(id, target) {
  let n = 0;
  const el = document.getElementById(id);
  const i = setInterval(() => {
    n++;
    el.textContent = n;
    if (n >= target) clearInterval(i);
  }, 30);
}

// Start animations
animate("stat1", 120);
animate("stat2", 45);
animate("stat3", 999);
