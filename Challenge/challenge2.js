//Challenge Respon Halaman
const alan = require("http");

 const vian = alan.createServer((req, res) => {
   let url, dataResponse;
   res.setHeader("Content-Type", "application/json");
   url = req.url;

   //ROUTING
   if (url === "/") {
     dataResponse = {
       data: "Ini adalah Homepage",
     };
   } else if (url.toLowerCase() === "/login") {
     
     dataResponse = {
       data: "Ini adalah halaman Login",
     };
   } else if (url.toLowerCase() === "/register") {

     dataResponse = {
       data: "Ini adalah halaman Register",
     };
   } else {
    
     dataResponse = {
       data: "Halaman Tidak Ditemukan",
     };
   }
 
   return res.end(JSON.stringify(dataResponse));
 
   
 });
 
 vian.listen(3000);