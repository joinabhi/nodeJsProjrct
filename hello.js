// const http=require("http");
// const server=http.createServer((req,res)=>{
//     res.end("Hello Mr. Abhishek Gupta, aur gandu");
// })
// server.listen(8000, "127.0.0.1", ()=>{
//     console.log("listening to the port no. 8000")
// })

const http=require('http');
const fs=require('fs');
const server=http.createServer((req,res)=>{
    // console.log(req)
    // res.setHeader('content-type','text/html')
    const url=req.url;
    const method=res.method
    if(url==='/'){

        fs.readFile('message.txt', {encoding:"utf-8"},(err, data)=>{
            if(err){
                console.log(err)
            }
            console.log(`data from file`+ data)
            res.write('<html>')
            res.write('<head><title>My First Page</title></head>')
            res.write(`<body>${data}</body>`)
            res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">SEND</button></form></body>')
            res.write('</html>')
            return res.end()  
        })
       
    }
    if(url==='/message' && method==='POST'){
        const body=[]
        req.on('data',(chunk)=>{
            console.log(chunk)
            body.push(chunk)
        })
        req.on('end',()=>{
            const parsedbody=Buffer.concat(body).toString();
          
            console.log(parsedbody)
            const message=parsedbody.split('=')[1];
            fs.writeFileSync('message.txt', message, err =>{
                res.statusCode=302
                res.setHeader('Location','/');
                return res.end()
            });
        
        })
       }
       else{
        res.setHeader('content-type','text/html');
        res.write('<html>')
        res.write('<head><title>My First Page</title></head>')
        res.write('<body><h1>Hello to my hello.js server</h1></body>')
        res.write('</html>')
        res.end();
       }
    
})

server.listen(4444)







