// Konfigurasi tampilan (editable via Element SDK).
window.defaultConfig = {
  school_name: "SMA Negeri 5 Kupang",
  academic_year: "2025/2026",
  background_color: "#020617",
  surface_color: "#0f172a",
  text_color: "#e2e8f0",
  accent_color: "#d4af37",
  success_color: "#22c55e",
  font_family: "Playfair Display",
  font_size: 16
};

window.applyConfig = function applyConfig(config) {
  const c = { ...window.defaultConfig, ...config };

  const schoolFull = c.school_name;
  const yearFull = "Tahun Pelajaran " + c.academic_year;

  document.getElementById('schoolText').textContent = schoolFull;
  document.getElementById('yearText').textContent = yearFull;
  document.getElementById('resultSchoolLabel').textContent = schoolFull;
  document.getElementById('resultYearLabel').textContent = yearFull;

  const font = c.font_family || window.defaultConfig.font_family;
  document.querySelectorAll('.font-display').forEach(el => {
    el.style.fontFamily = `${font}, serif`;
  });

  const base = c.font_size || window.defaultConfig.font_size;
  document.getElementById('titleText').style.fontSize = `${base * 2}px`;
  document.getElementById('resultName').style.fontSize = `${base * 1.75}px`;

  document.body.style.backgroundColor = c.background_color;
};

