//Challenge buat http
const alan = require("http")

const vian = alan.createServer((req, res) => {
    let data ; 

    console.log(req);

    data = {
        url : req.url,
        method : req.method,
        header : req.headers
    }

    res.setHeader("Content-Type", "application/json")

    res.end(JSON.stringify(data))
});

vian.listen(3000)