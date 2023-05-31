// Importando los módulos express y fs
const express = require('express');
const fs = require('fs');

//Creando una aplicación con express
const app = express();

// Creando una función que abre un archivo html para mostrarlo en el servidor
const openHtml = (mypage) => { 
  //Creando una ruta para el servidor, en este caso la raíz '/'
  app.get('/', (req, res) => {
    // Leeyendo el archivo html utilizando el módulo fs
    fs.readFile(`${__dirname}/${mypage}`, (err, data) => {
      //Si ocurre un error al leer el archivo, devolvemos una respuesta con un código 500 y un mensaje de error
      if (err) {
        res.writeHead(500);
        return res.end('Error loading index.html');
      } else {
        //Si todo funciona correctamente, devolvemos una respuesta con un código 200 y el contenido del archivo html
        res.writeHead(200);
        res.end(data);
      }
    });
  });
}

//Llamando a la función openHtml para mostrar el archivos html
openHtml('index.html');

//Iniciando el servidor en el puerto 3000
app.listen(3000, () => {
  console.log('listen on port', 3000);
});