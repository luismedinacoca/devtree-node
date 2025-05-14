//const express = require('express');   // CJS: Common JS
import express from 'express'           // ESM: EcmaScript Modules

//console.log(express)
const app = express();

//routing:
app.get('/', (req, res) => {
    //res.render()  
    res.send('Hello world from Express / Typescript');
})

app.get('/users', (req, res) => {
    //res.render()  
    res.send('Hello world from Users');
})


//const port = 3000;
const port = process.env.PORT || 4000;

app.listen(port, () => {
    console.log('Servidor funcionando en el port: ', port);
})