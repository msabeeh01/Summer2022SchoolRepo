const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req,res) => {
    res.send('Hello World');
})

app.get('/info', (req,res) => {
    res.send('information');
})

app.listen(port, () =>{
    console.log("Port 3000");
})