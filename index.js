const express = require('express');
require('dotenv').config();

const app = express();

app.get('', (req, res) => {
  res.json({ version: "1.0.0" });
})

app.get('api/', (req, res) => {
  res.json({ message: "prueba" })
})

app.listen(process.env.PORT, () => {
  console.log(`Listening at http://localhost:${process.env.PORT}`)
})