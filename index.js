const express = require('express');

//console.log(express)
const app = express();

//routing:
app.get('/', (req, res) => {
    //res.render()  
    res.send('Hello world from Express');
})

app.get('/users', (req, res) => {
    //res.render()  
    res.send('Hello world from USERS');
})

app.get('/blog', (req, res) => {
    //res.render()  
    res.send('This is Blog page');
})



app.listen(4000, () => {
    console.log('Servidor funcionando...');
})