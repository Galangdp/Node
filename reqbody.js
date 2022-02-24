/**
 * 
 * Request Body 
 * 
 * kita akan menampilkan cara untuk membaca request body pada server
 * 
 * terdapat 2 bentuk transaksi data antara data dan client dan server :
 * upload : mengirim data dari client ke server
 * download : menerima data dari server ke lain
 * 
 * stream yaitu kegiatan transaksi dari awal sampai selesai, meliputi :
 * 
 * 1. mulai inisialisasi data ke tujuan
 * 2. pemisahan data yang akan dikirim menjadi bagian kecil (chunk)
 * 3. pengiriman data berbentuk chunk ke tujuan disebut dengan buffering
 * 4. kalau done dibuffer semua, proses data agar utuh lagi.
 * 
 * note )
 * Chunks memiliki tipe data Buffer
 * Chunks dikumpulkan pada sebuah array
 */

const http = require("http")
const querystring = require("querystring")
const server = http.createServer((req,res) =>{
    let urlReq,
    methodReq,
    dataReq

    const chunkArr = [];
    const dataResponse = {}

    res.setHeader("Content-Type", "application/json")

    urlReq = req.url
    methodReq = req.method ?? "get"

    if(urlReq.toLowerCase() === "/login"){
        if(methodReq.toLowerCase() === "post"){
            dataResponse.data = "Ini Adalah Halaman Login"
        }else if(methodReq.toLowerCase() === "post"){
            //Buffering data body.
            req.on("data",(chunk) => {           //on untuk ngebentuk chunk(yang pecah pecah)
                chunkArr.push(chunk)    //maka akan menambahkan data chunk ke chunkArr
            })
        }else{
            dataResponse.data = "Ubah method ke GET atau POST"
        }
    }else{
        dataResponse.data = "Gunakan endpoint /login"
    }
    req.on("end", () => {
        if (chunkArr.length !== 0) {
          dataReq = Buffer.concat(chunkArr).toString()     //Untuk menggabungi String
          console.log(dataReq)

          let requestObj = querystring.parse(dataReq)

          dataResponse.data = requestObj
        }
        return res.end(JSON.stringify(dataResponse))
      })
})

server.listen(3000)