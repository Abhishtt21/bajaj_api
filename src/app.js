const express = require('express');
const bfhlRoutes = require('./routes/bfhlRoutes');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());


app.use('/bfhl', bfhlRoutes);


app.use((err, req, res, next) => {
    return res.status(500).json({ is_success: false, message: err.message });
});

module.exports = app;
