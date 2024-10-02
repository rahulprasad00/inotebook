import 'dotenv/config';  
import express from 'express';
import mongoose from 'mongoose';
import authRoutes from './routes/auth.js';
import notesRoutes from './routes/notes.js';
import cors from 'cors';

// const connurl = process.env.MONGO_URI;
// console.log(connurl)
let conn = await mongoose.connect("mongodb+srv://rahulrnc03:mongoosedb@inotebook.vx7mo.mongodb.net/inotebook")



const app = express()
const port = process.env.PORT || 5000;

// Add this to handle OPTIONS requests for CORS preflight
app.options('*', cors({
    origin: ["https://inotebook-frontend-zeta.vercel.app"],  // Your frontend domain
    methods: ["POST", "GET", "PUT", "DELETE"],
    credentials: true
}));

         // npm i cors in backend folder to prevent CORS Policy error during API Calls
app.use(express.json());   // Middleware used to use req.body so that we can send request in json

//Available Routes
app.use('/api/auth',authRoutes)
app.use('/api/notes',notesRoutes)

app.listen(port, () => {
    console.log(`iNotebook backend listening on port ${port}`)
})