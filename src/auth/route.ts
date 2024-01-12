import { Router } from 'express';

const r = Router();

r.post('/login', async (req, res) => {
    const { username, password } = req.body;
    if (username === 'admin' && password === 'admin') {
        res.json({ status: 'OK' });
    } else {
        res.json({ status: 'FAIL' });
    }

});

export default r; 