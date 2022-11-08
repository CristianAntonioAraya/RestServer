import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import userRoute from './views/userRoutes.js';

const app = express();

// * settings

app.set('port', process.env.PORT);

// * Middlewares
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));

app.use('/user', userRoute);
app.get('/api', (req, res) => {
    res.json({ ok: true, msg: 'Api Online!' });
});

export default app;
