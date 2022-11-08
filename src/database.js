import mongoose from 'mongoose';

const { MONGO_URI_DEV, NODE_ENV, MONGO_URI_PROD } = process.env;

const URL = NODE_ENV === 'development' ? MONGO_URI_DEV : MONGO_URI_PROD;

mongoose.connect(URL);

const db = mongoose.connection;

db.once('open', () => {
    console.log(`Database connected in ${NODE_ENV} mode`);
});

export default db;
