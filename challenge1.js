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

// end point pertama
app.post("/balok", (req,res) => {
    let p = Number(req.body.p) 
    let l = Number(req.body.l) 
    let t = Number(req.body.t) 
    let luasPermukaan, volume;

    volume = p * l * t
    luasPermukaan = 2 * (p*l + p*t + l*t)

    let response = {
        panjang: p,
        lebar: l,
        tinggi: t,
        volume: volume,
        luasPermukaan: luasPermukaan
    }

    // memberikan response dengan format JSON yang berisi objek di atas
    res.json(response)
})

// end point kedua
app.post("/kubus", (req,res) => {
    let s = Number(req.body.s)
    let volume = s * s * s
    let luasPermukaan = 6 * s * s
    
    let response = {
        sisi: s,
        volume: volume,
        luasPermukaan: luasPermukaan
    }

    res.json(response)
})

// end point ketiga
app.post("/kerucut", (req,res) => {
    let r = Number(req.body.r);
    let t = Number(req.body.t);
    let s = Number(req.body.s);
    let phi, luasPermukaan, volume;

  if (r % 7 == 0) phi = 22 / 7;
  else phi = 3.14;

  volume = (phi * r * r * t) / 3;
  luasPermukaan = phi * r * r + phi * r * s;

  let response = {
    rusuk: r,
    tinggi: t,
    garisPelukis: s,
    luasPermukaan: luasPermukaan,
    volume: volume,
  };

    res.json(response)
})

// end point keempat
app.post("/tabung", (req,res) => {
    let r = Number(req.body.r)
    let t = Number(req.body.t)

    let volume = 3.14 * r * r * t
    let luaspermukaan = 2 * 3.14 * r * ( r + t)

    let response = {
        jari_jari : r,
        tinggi : t,
        volume: volume,
        luaspermukaan: luaspermukaan
    }

    res.json(response)
})

// menjalankan server pada port 8000
app.listen(8000, () => {
    console.log("Server run on port 8000");
})