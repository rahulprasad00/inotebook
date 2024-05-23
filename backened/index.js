import express from 'express';
import mongoose from 'mongoose';
import authRoutes from './routes/auth.js';
import notesRoutes from './routes/notes.js';

let conn = await mongoose.connect("mongodb://localhost:27017/inotebook")



const app = express()
const port = 5000

app.use(express.json());   // Middleware used to use req.body so that we can send request in json

//Available Routes
app.use('/api/auth',authRoutes)
app.use('/api/auth',notesRoutes)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})