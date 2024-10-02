import 'dotenv/config';  
import express from 'express';
import mongoose from 'mongoose';
import authRoutes from './routes/auth.js';
import notesRoutes from './routes/notes.js';
import cors from 'cors';

const connurl = process.env.MONGO_URI;
let conn = await mongoose.connect(connurl)



const app = express()
const port = process.env.PORT || 3000;

app.use(cors())            // npm i cors in backend folder to prevent CORS Policy error during API Calls
app.use(express.json());   // Middleware used to use req.body so that we can send request in json

//Available Routes
app.use('/api/auth',authRoutes)
app.use('/api/notes',notesRoutes)

app.listen(port, () => {
    console.log(`iNotebook backend listening on port ${port}`)
})