import express from "express";
import fetch from "node-fetch";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static("public"));

app.get("/weather", async (req, res) => {
  const { lat, lon } = req.query;
  try {
    const response = await fetch(`https://api.bmkg.go.id/pelayanan-data-cuaca?lat=${lat}&lon=${lon}`);
    const data = await response.json();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: "Gagal mengambil data BMKG" });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("Server berjalan di port", PORT));
