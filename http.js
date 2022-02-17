/**
 * 
 * Core modul : http
 * 
 * Membuat server menggunakan module http
 */

const http = require("http")

const server = http.createServer((req, res) => {
    //Inisialisasi variable yang akan di gunakan
    let data ; 

    console.log(req);

    
    /**
     * Object request itu banyak tapi yang sering dipakai itu cuman 3 yaitu :
     * url, method, headers
     */

    //create object yang berisi url, method dan header

    data = {
        url : req.url,
        method : req.method,
        header : req.headers
    }

    //Ini akan mengubah set response menjadi berupa data json
    res.setHeader("Content-Type", "application/json")

    res.end(JSON.stringify(data))
});

server.listen(3000)