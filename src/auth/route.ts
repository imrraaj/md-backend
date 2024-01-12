import { Router } from 'express';

const r = Router();

r.get('/login', async (req, res) => {
    res.json({ message: 'auth/login' });
});

export default r; 