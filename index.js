const express = require('express');
const app = express();
const port = 3000;

const generateMessage = require('./lab2');
app.get('/hello-world', function(req,res)
{
    generateMessage().then((body) => {
    console.log(body);
    res.send(body)
    }) 
});

app.listen(port, function() {
    console.log("Server Started");
});