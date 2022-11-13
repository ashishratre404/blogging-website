import  express  from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

import authRoute from './routes/auth.js';
import userRoute from './routes/users.js';

const app = express();
app.use(express.json());
dotenv.config();

app.use('/api/auth', authRoute);
app.use('/api/user', userRoute);

const connect = async () => {
    try {
        mongoose.connect(process.env.MONGO_URL);
        console.log('Connected to the database');
    } catch (error) {
        console.log(error)
    }
}

app.listen(5000, ()=>{
    connect();
    console.log('Server is up and running');
})