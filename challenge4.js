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

//end point bmi
app.get("/bmi/", (req,res) => {
    // mengambil nilai panjang dari body
    
    let r = Number(req.body.berat) 
    let t = Number(req.body.tinggi)
    
    let bmi = r/t;
  
	if (bmi < 18.5) {
		keterangan = "Kekurangan Berat Badan";
	}else if ((bmi >= 18.5, bmi <= 24.9)){
		keterangan = "Normal (Ideal)";
	}else if ((bmi >= 25.0, bmi <= 29.0)){
		keterangan = "Kelebihan Berat Badan";
	}else {
		keterangan = "Kegemukan (Obesitas)";
	}
    
    let response = {keterangan

}
     // memberikan response dengan format JSON yang berisi objek di atas
	 res.json(response)
	})
	
	// menjalankan server pada port 8000
	app.listen(8000, () => {
		console.log("Server run on port 8000");
	})