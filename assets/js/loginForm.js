// Logika halaman login (input NISN) + tampilan halaman hasil.
(function () {
  const form = document.getElementById('loginForm');
  const input = document.getElementById('nisnInput');
  const errorMsg = document.getElementById('errorMsg');
  const errorText = document.getElementById('errorText');
  const checkBtn = document.getElementById('checkBtn');

  // Saran: submit ditangkap manual supaya bisa tampilkan countdown.
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const val = input.value.trim();
    errorMsg.classList.add('hidden');

    if (!val) {
      errorText.textContent = 'Silakan masukkan NISN Anda.';
      errorMsg.classList.remove('hidden');
      return;
    }

    if (!/^\d{10}$/.test(val)) {
      errorText.textContent = 'NISN harus terdiri dari 10 digit angka.';
      errorMsg.classList.remove('hidden');
      return;
    }

    const nama = window.studentMap.get(val);
    if (!nama) {
      errorText.textContent = 'NISN tidak ditemukan. Periksa kembali nomor Anda.';
      errorMsg.classList.remove('hidden');
      return;
    }

    // Sembunyikan halaman login, lalu tampilkan overlay countdown.
    document.getElementById('loginPage').classList.add('hidden');

    const countdownDiv = document.createElement('div');
    countdownDiv.className = 'min-h-full flex flex-col items-center justify-center';
    countdownDiv.innerHTML = `
      <div class="text-center">
        <p class="text-yellow-500/70 text-sm font-semibold tracking-[0.3em] uppercase mb-6">Hasil Pencarian</p>
        <div class="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-yellow-500 to-yellow-600 flex items-center justify-center shadow-2xl shadow-yellow-500/50 animate-pulse">
          <span class="font-display text-7xl font-bold text-slate-900" id="countdownNumber">3</span>
        </div>
        <p class="text-slate-400 text-lg mt-8">Mengolah data...</p>
      </div>
    `;
    document.body.appendChild(countdownDiv);

    let count = 3;
    const countdownNumber = countdownDiv.querySelector('#countdownNumber');

    const interval = setInterval(() => {
      count--;
      if (count > 0) {
        countdownNumber.textContent = count;
        countdownNumber.style.animation = 'none';
        setTimeout(() => {
          countdownNumber.style.animation = 'scaleIn 0.6s ease-out forwards';
        }, 10);
      } else {
        clearInterval(interval);
        countdownDiv.remove();

        document.getElementById('resultName').textContent = nama;
        document.getElementById('resultNISN').textContent = val;
        document.getElementById('resultPage').classList.remove('hidden');
        window.launchConfetti();
        lucide.createIcons();
      }
    }, 1000);
  });

  // Hanya terima angka.
  input.addEventListener('input', () => {
    input.value = input.value.replace(/\D/g, '');
  });

  // Kembali ke halaman login.
  document.getElementById('backBtn').addEventListener('click', () => {
    document.getElementById('resultPage').classList.add('hidden');
    document.getElementById('loginPage').classList.remove('hidden');
    input.value = '';
    errorMsg.classList.add('hidden');
  });

  // (checkBtn dipertahankan supaya tidak ada perbedaan perilaku/struktur dari kode awal)
  void checkBtn;
})();

