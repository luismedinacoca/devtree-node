import { Router } from 'express'
const router = Router();

router.get('/', (req, res) => {
    res.send('Hello world from Home');
})

router.get('/nosotros', (req, res) => {
    res.send('Hello world from Nosotros');
})

router.get('/blog', (req, res) => {
    res.send('Hello world from Blog');
})

export default router;
