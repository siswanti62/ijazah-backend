const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

const dataIjazah = [
  { id: 1, nama: "Ahmad", nomorIjazah: "1234567890" },
  { id: 2, nama: "Fatimah", nomorIjazah: "0987654321" },
  { id: 3, nama: "Budi", nomorIjazah: "1122334455" }
];

// Endpoint utama
app.get('/api/ijazah', (req, res) => {
  const query = req.query.q?.toLowerCase() || "";
  const hasil = dataIjazah.filter(item =>
    item.nama.toLowerCase().includes(query) ||
    item.nomorIjazah.includes(query)
  );
  res.json(hasil);
});

app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});