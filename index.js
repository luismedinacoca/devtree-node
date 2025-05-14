const express = require('express');

//console.log(express)
const app = express();

//routing:
app.get('/', (req, res) => {
    //res.render()  
    res.send('Hello world from Express');
})



app.listen(4000, () => {
    console.log('Servidor funcionando...');
})