var http=require('http')
var fs=require('fs')
var url=require('url')


http.createServer(function(req,res)
{
    var q=url.parse(req.url,true)
    
    if (q.path=='/index')
        {
           fs.readFile('index.html',function (err,data)
           {
             res.writeHead(200,{'Content-Type':'text/html'})
             res.write(data)
             res.end()
           }
        )
        }
   
        if (q.path=='/login')
        {
           fs.readFile('login.html',function (err,data)
           {
             res.writeHead(200,{'Content-Type':'text/html'})
             res.write(data)
             res.end()
           }
        )
        }
   
        
} 
   ).listen(8080)

