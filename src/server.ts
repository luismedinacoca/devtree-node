import express from 'express';
import router from './router';

const app = express();

//app.get('/', router);
/*
    with app.get('/', router);
    Get access to home ('/') only.
    For '/nosotros' or '/blog', it will not work.
 */
app.use(router);

app.use('/ecommerce', () => {
    console.log("Desde Ecommerce!")
})

export default app;