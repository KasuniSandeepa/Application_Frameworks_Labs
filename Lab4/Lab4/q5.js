//Import the http module from the core libraries.
const http = require('http');

//Create a httpServer that listens to port 3000 and return HTML with Hello World
//text in h1 header upon GET request

/*http.createServer((req, res) => {
    res.setHeader('Content-Type','text/html');
    res.write('<h1>Hello World</h1>');
    res.end();
}).listen(3000);*/

//Additional
http.createServer((req, res) => {
    res.setHeader('Content-Type','text/html');
    res.write('<h1>Hello World1</h1>');
    res.end();
}).listen(3001 , err=>{
    if(err){
        console.error(err);
        return;
    }

    console.log('Server is listening on port 3001');
});