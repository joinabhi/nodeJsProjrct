// const http=require("http");
// const server=http.createServer((req,res)=>{
//     res.end("Hello Mr. Abhishek Gupta, aur gandu");
// })
// server.listen(8000, "127.0.0.1", ()=>{
//     console.log("listening to the port no. 8000")
// })

const http=request('http');
const server=http.createServer((req,res)=>{
    console.log(req.url, req.method, req.header)
    res.setHeader('content-type','text/html')
    res.write('<html>')
    res.write('<head><title>My First Page</head></title>')
    res.write('<body><h1>Hello from my hello.js server</body></h1>')
    res.write('</html>')
    res.end("Hello Everyone");
})

server.listen(3000)





