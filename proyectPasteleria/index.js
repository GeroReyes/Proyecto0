const express = require('express');
const rolRoutes = require('./routes/rolRoutes');
const puestoRoutes = require('./routes/puestoRoutes');
const puesto = require('./models/puestoModel');
const tipo_clienteRoutes = require('./routes/tipo_clienteRoutes');
const tipo_cliente = require('./models/tipo_clienteModel');
const statusRoutes = require('./routes/statusRoutes');
const status = require('./models/statusModel');
const usuariosRoutes = require('./routes/usuariosRoutes');
const empleadoRoutes = require('./routes/empleadoRoutes');
const clienteRoutes = require('./routes/clienteRoutes');
const metodo_pagoRoutes = require('./routes/metodo_pagoRoutes');
const categoriaRoutes = require('./routes/categoriaRoutes');
const productoRoutes = require('./routes/productoRoutes');
const ventaPedidoRoutes = require('./routes/venta_pedidoRoutes');

require('dotenv').config();

const app = express();
app.use(express.json());

app.use('/api', rolRoutes)
app.use('/api', puestoRoutes);
app.use('/api', tipo_clienteRoutes);
app.use('/api', statusRoutes);
app.use('/api', usuariosRoutes);
app.use('/api', empleadoRoutes);
app.use('/api', clienteRoutes);
app.use('/api', metodo_pagoRoutes);
app.use('/api', categoriaRoutes);
app.use('/api', productoRoutes);
app.use('/api', ventaPedidoRoutes);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () =>
    {
        console.log(`Server is running on port ${PORT}`);
    }
)