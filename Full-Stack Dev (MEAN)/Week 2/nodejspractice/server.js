//create server using nodejs
const http = require('http');

//create server listening to requests on 3000 and responding with Hello World
// http.createServer((req,res) =>{
//     res.writeHead(200, {
//         "Content-Type": 'text/plain'
//     });
//     res.end('Hello World');
// }).listen(3000);


//create server using connect
const connect = require('connect');
const app = connect();

//create middleware function called logger, it logs.
function logger(req,res,next){
    console.log(req.method, req.url);
    next();
}

//create middleware function called helloworld
function helloworld(req,res,next){
    res.setHeader('Content-Type' , 'text/plain');
    res.end('Hello World');
}

//create middleware function called goodbyeworld
function goodbyeworld(req,res,next){
    res.setHeader('Content-Type' , 'text/plain');
    res.end('Bye World');
}

app.use(logger);

//mount middleware to app
app.use('/hello', helloworld);
app.use('/bye', goodbyeworld);

app.listen(3000);

console.log('Server running on 3000')