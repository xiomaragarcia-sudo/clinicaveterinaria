require('dotenv').config();
const express = require('express');
const conectarDB = require('./src/config/db');

const app = express();

// Conectar base de datos
conectarDB();

// Middleware
app.use(express.json());

// Rutas
app.use('/api/clientes',  require('./src/routes/clienteRoutes'));
app.use('/api/mascotas',  require('./src/routes/mascotaRoutes'));
app.use('/api/consultas', require('./src/routes/consultaRoutes'));
app.use('/api/productos', require('./src/routes/productoRoutes'));
app.use('/api/facturas',  require('./src/routes/facturaRoutes'));

// Ruta de prueba
app.get('/', (req, res) => {
  res.json({ mensaje: '🐾 API Clínica Veterinaria funcionando' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});