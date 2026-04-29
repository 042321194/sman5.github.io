// Ringkasan data admin (total siswa & terakhir diperbarui).
window.updateDataSummary = function updateDataSummary() {
  document.getElementById('studentCount').textContent = window.students.length;
  document.getElementById('lastUpdated').textContent = new Date().toLocaleString('id-ID');
};

