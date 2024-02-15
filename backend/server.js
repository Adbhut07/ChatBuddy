import express from 'express';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.routes.js';
import connectToMongoDB from "./db/db.js"

const app = express();
dotenv.config();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use("/api/auth",authRoutes);

// app.get("/",(req,res)=>{
//     res.send("Hello");
// })


app.listen(PORT, ()=>{
    connectToMongoDB()
    console.log(`server is runningh on port ${PORT}`);
});