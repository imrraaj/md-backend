import { Router } from 'express';

const r = Router();

r.get('/add', async (req, res) => {
    res.json({ message: 'post/add' });
});

export default r; 