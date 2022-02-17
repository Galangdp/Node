 // Challenge Respon Data
 const http = require("http");

 const server = http.createServer((req, res) => {
   let url, 
    method, 
    dataResponse; 

   res.setHeader("Content-Type", "application/json");
 
   url = req.url;
 
   method = req.method ?? "get";
 
   if (url === "/") {
     dataResponse = {
       data: "Ini adalah Homepage",
     };

   } else if (url === "/login") {
       
     if (method === "POST") {
       dataResponse = {
         data: "anda berhasil menambahkan data dengan method POST",
       };
     } else {
       dataResponse = {
         data: "Maaf ubah dlu ke pake method POST",
       };
     }
   } else {
     dataResponse = {
       data: "Halaman Tidak Ditemukan",
     };
   }
   return res.end(JSON.stringify(dataResponse));
 
 });
 
 server.listen(3000);
 