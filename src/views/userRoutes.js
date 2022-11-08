import { Router } from 'express';

const route = Router();

route.post('/create', (req, res) => {
    res.json({ ok: true, msg: 'lol' });
});

export default route;
