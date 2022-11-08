import 'dotenv/config';
import app from './src/app.js';
import './src/database.js';

console.log(process.env.NODE_ENV);

app.listen(app.get('port'), () => {
    console.log('hola');
});
