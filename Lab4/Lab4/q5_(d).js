const http = require('http');
http.createServer(((req, res) => {
    res.setHeader('Content-Type' , 'text/html');

    switch (req.method){
        case 'GET' :
            res.write('<h1>Hello World</h1>');
            res.end();
            break;
        case 'POST' :
            req.on('data' , data =>{
                res.write('<h1>Hello '+data+'</h1>');
                res.end();
            });
        case 'PUT' :
            req.on('data' , data =>{
                res.write('<h1>Hello '+data+'</h1>');
                res.end();
            });


    }
})).listen(3004,(err)=>{
    console.log('Server is litening to port 3004')
})