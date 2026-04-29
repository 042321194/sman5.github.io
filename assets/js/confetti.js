// Confetti dekoratif saat siswa berhasil dicek.
window.launchConfetti = function launchConfetti() {
  const colors = ['#d4af37','#22c55e','#f0c75e','#ffffff','#60a5fa','#f472b6'];
  for (let i = 0; i < 60; i++) {
    const el = document.createElement('div');
    el.className = 'confetti-piece';
    el.style.left = Math.random() * 100 + '%';
    el.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    el.style.borderRadius = Math.random() > 0.5 ? '50%' : '2px';
    el.style.width = (6 + Math.random() * 8) + 'px';
    el.style.height = (6 + Math.random() * 8) + 'px';
    el.style.animationDuration = (2 + Math.random() * 3) + 's';
    el.style.animationDelay = Math.random() * 1.5 + 's';
    document.body.appendChild(el);
    setTimeout(() => el.remove(), 5000);
  }
};

