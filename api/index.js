import  Express  from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

const app = Express();
dotenv.config();

app.get('/', (req, res)=>{
    res.send('Popa')
})

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