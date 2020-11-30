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

// end point celcius
app.get("/convert/celcius/:c", (req,res) => {

    let c = req.params.c
    let reamur = (4/5) * c
    let fahrenheit = ( 9/5 ) * c + 32
    let k = c + 273
    
    let response = {
        celcius: c,
        result: {
            reamur: reamur,
            fahrenheit: fahrenheit, 
            kelvin: k
        }
    }
    // memberikan response dengan format JSON yang berisi objek di atas
    res.json(response)

})

//end point reamur
app.get("/convert/reamur/:r", (req,res) => {

    let r = req.params.r
    let celcius = (5/4) * r
    let kelvin = (5/4) * r + 273
    let fahrenheit = (9/4) * r + 32

    let response = {
        reamur: r,
        result: {
            celcius: celcius,
            fahrenheit: fahrenheit, 
            kelvin: kelvin
        }
    }
    // memberikan response dengan format JSON yang berisi objek di atas
    res.json(response)
})

//end point kelvin
app.get("/convert/kelvin/:k", (req,res) => {
    
    let k = req.params.k 
    let celcius = k - 273
    let reamur = (4/5) * (k-273)
    let fahrenheit = ((9/5) * (k-273)) + 32

    let response = {
        kelvin: k,
        result: {
            celcius: celcius,
            fahrenheit: fahrenheit, 
            reamur: reamur
        }
    }
    // memberikan response dengan format JSON yang berisi objek di atas
    res.json(response)
})

//end point fanrenheit
app.get("/convert/fahrenheit/:f", (req,res) => {
    
    let f = req.params.f 
    let celcius = 5/9 * (f-32) 
    let reamur = 4/9 * (f-32)
    let kelvin = ((5/9) * (f-32)) + 273

    let response = {
        fahrenheit: f,
        result: {
            celcius: celcius,
            kelvin: kelvin, 
            reamur: reamur
        }
    }
    // memberikan response dengan format JSON yang berisi objek di atas
    res.json(response)
})

// menjalankan server pada port 8000
app.listen(8000, () => {
    console.log("Server run on port 8000");
})