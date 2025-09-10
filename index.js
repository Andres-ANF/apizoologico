const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('¡Hola mundo! Gano LA SELE MI SOCIO')
});

app.listen(port, () => {
  console.log('La aplicación se está ejecutando por el puerto ' + port);
});
