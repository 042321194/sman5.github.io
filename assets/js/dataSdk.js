// Inisialisasi Data SDK (sinkronisasi dengan backend/kanvas data).
(function () {
  window.initDataSDK = async function initDataSDK() {
    const handler = {
      onDataChanged(data) {
        window.students.length = 0;
        window.studentMap.clear();

        data.forEach((record) => {
          window.students.push({ nisn: record.nisn, nama: record.nama, status: record.status });
          window.studentMap.set(record.nisn, record.nama);
        });

        window.updateDataSummary();
      }
    };

    const result = await window.dataSdk.init(handler);
    if (!result.isOk) {
      console.error('Data SDK init error:', result.error);
    }
  };
})();

