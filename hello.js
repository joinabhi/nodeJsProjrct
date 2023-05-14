const http=require("http");
const server=http.createServer((req,res)=>{
    res.end("Hello Mr. Abhishek Gupta, aur gandu");
})
server.listen(8000, "127.0.0.1", ()=>{
    console.log("listening to the port no. 8000")
})



