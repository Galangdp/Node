/**
 * URL Querry String
 * 
 * Pasangan antara key - value yang ada di URL
 * 
 * contoh : url google.com
 * 
 * awal = https://www.google.com/
 * ketika di searching = https://www.google.com/search?q=rumaysho
 * 
 * tanda tanya (?) adalah pemisah antara url dengan query.
 * 
 * dalam kasus ini,
 * q = key
 * rumaysho = value
 * 
 * fungsi query disini adalah untuk mengirim data ke server dengan menggunakan method GET
 * 
 */

const http = require("http")

// modul querystring untuk membuat object dari query yang di url
const querystring = require("querystring")

// modul url untuk mengekstract query pada url
const url = require("url")

const server = http.createServer((req,res)=>{
    let urlRequest, //urlRequest berisi path url di request
    urlObj, //urlObj berisi url yang telah diproses
    urlQuery, //urlQuery berisi object dari query
    dataResponse //object dari query yang telah diparsing

    res.setHeader("Content-Type", "application/json")

    urlRequest = req.url
    //ubah string urlRequest jadi bentuk object

    urlObj = url.parse(urlRequest)
    console.log(urlObj)

    urlQuery = urlObj.query

    // Jika tidak ada query pada url maka kirim pemberitahuan
  if (!urlQuery) {
    dataResponse = {
      data: "Query string not found",
    };

    // Kirim data ke klien
    return res.end(JSON.stringify(dataResponse));
  }
    dataResponse = querystring.parse(urlQuery)
    return res.end(JSON.stringify(dataResponse));

})

server.listen(3000)