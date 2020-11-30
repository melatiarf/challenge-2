const express = require("express") // memanggil library express js
const bodyParser = require("body-parser") // memanggil library body-parser
const cors = require("cors") // memanggil library cors
const app = express()

// penggunaan body-parser untuk ekstrak data request berformat JSON
app.use(bodyParser.json())

// penggunaan body-parser untuk ekstrak data request dari body
app.use(bodyParser.urlencoded({extended: true}))

// penggunaan cors agar end point dapat diakses oleh cross platform
app.use(cors())

//end point decimal
app.post('/decimal', (req, res) => {
  let decimal = Number(req.body.bilangan);
  let binary, octal, hexadecimal, value, arr;

  // convert ke binary
  arr = [];
  value = decimal;
  do {
    let bil = value % 2;
    arr.unshift(bil);
    value = (value - bil) / 2;
  } while (value >= 1);
  binary = arr.join('');

  // convert ke octal
  arr = [];
  value = decimal;
  do {
    let bil = value % 8;
    arr.unshift(bil);
    value = (value - bil) / 8;
  } while (value >= 1);
  octal = arr.join('');

  // convert ke hexadecimal
  arr = [];
  value = decimal;
  do {
    let bil = value % 16;
    value = (value - bil) / 16;
    switch (bil) {
      case 10:
        bil = 'A';
        break;
      case 11:
        bil = 'B';
        break;
      case 12:
        bil = 'C';
        break;
      case 13:
        bil = 'D';
        break;
      case 14:
        bil = 'E';
        break;
      case 15:
        bil = 'F';
        break;
    }
    arr.unshift(bil);
  } while (value >= 1);
  hexadecimal = arr.join('');

  let response = {
    decimal,
    binary,
    octal,
    hexadecimal,
  };

  res.json(response);
});

//end point binary
app.post('/binary', (req, res) => {
  let binary = req.body.bilangan;
  let decimal, octal, hexadecimal, arr;

  // convert ke decimal
  arr = [];
  decimal = 0;
  arr = binary.split('');
  do {
    arrLength = arr.length;
    let shifted = arr.shift();
    decimal += shifted * Math.pow(2, arrLength - 1);
  } while (arrLength > 1);

  // convert ke octal
  value = decimal;
  do {
    let bil = value % 8;
    arr.unshift(bil);
    value = (value - bil) / 8;
  } while (value >= 1);
  octal = arr.join('');

  // convert ke hexadecimal
  arr = [];
  value = decimal;
  do {
    let bil = value % 16;
    value = (value - bil) / 16;
    switch (bil) {
      case 10:
        bil = 'A';
        break;
      case 11:
        bil = 'B';
        break;
      case 12:
        bil = 'C';
        break;
      case 13:
        bil = 'D';
        break;
      case 14:
        bil = 'E';
        break;
      case 15:
        bil = 'F';
        break;
    }
    arr.unshift(bil);
  } while (value >= 1);
  hexadecimal = arr.join('');

  let response = {
    decimal,
    binary,
    octal,
    hexadecimal,
  };

  res.json(response);
});

//end point octal
app.post('/octal', (req, res) => {
  let octal = req.body.bilangan;
  let decimal, binary, hexadecimal, arr;

  // convert ke decimal
  arr = [];
  decimal = 0;
  arr = octal.split('');
  do {
    arrLength = arr.length;
    let shifted = arr.shift();
    decimal += shifted * Math.pow(8, arrLength - 1);
  } while (arrLength > 1);

  // convert ke binary
  arr = [];
  value = decimal;
  do {
    let bil = value % 2;
    arr.unshift(bil);
    value = (value - bil) / 2;
  } while (value >= 1);
  binary = arr.join('');

  // convert ke hexadecimal
  arr = [];
  value = decimal;
  do {
    let bil = value % 16;
    value = (value - bil) / 16;
    switch (bil) {
      case 10:
        bil = 'A';
        break;
      case 11:
        bil = 'B';
        break;
      case 12:
        bil = 'C';
        break;
      case 13:
        bil = 'D';
        break;
      case 14:
        bil = 'E';
        break;
      case 15:
        bil = 'F';
        break;
    }
    arr.unshift(bil);
  } while (value >= 1);
  hexadecimal = arr.join('');

  let response = {
    decimal,
    binary,
    octal,
    hexadecimal,
  };

    // memberikan response dengan format JSON yang berisi objek di atas
    res.json(response)
})

// menjalankan server pada port 8000
app.listen(8000, () => {
    console.log("Server run on port 8000");
})