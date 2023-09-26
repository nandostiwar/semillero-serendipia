import cors from 'cors'
import express from 'express';
import { readFileSync, writeFileSync } from 'fs';

const app = express();
const port = 3001;


app.use(express.json());
app.use(cors());

app.post('/api/guardar-datos', (req, res) => {
  const formData = req.body;

  try {
    // Ruta al archivo 'datos.json' en la ubicación específica
    const filePath = '/api/guardar-datos';
    const data = readFileSync(filePath);
    const jsonData = JSON.parse(data);
    jsonData.push(formData);
    writeFileSync(filePath, JSON.stringify(jsonData));
    res.json({ message: 'Datos recibidos y guardados con éxito.' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error al guardar los datos.' });
  }
});

app.listen(port, () => {
  console.log(`Servidor en ejecución en http://localhost:${port}`);
});
