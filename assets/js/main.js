// Animate numbers or track button click
document.getElementById("trackBtn").addEventListener("click", () => {
  alert("PNR tracking coming soon 🚀");
});

// Simple train parallax on scroll
const train = document.getElementById("train");
window.addEventListener("scroll", () => {
  const scroll = window.scrollY;
  train.style.transform = `translateX(${scroll * 1.5}px)`;
});
