import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import 'dotenv/config'

import { limiter, loginLimiter } from './helpers/limiters.js'
import { AuthRoutes } from './routes/auth.routes.js'
import { requestLogger } from './middlewares/loggerMiddleware.js'
import { dbConnect } from './db.js'
const app =  express()

app.use(limiter);
app.use(helmet);
app.use(express.json({limit:2}));
app.use(cors({origin : "http://localhost:5173",credentials:true}));
app.use(requestLogger);
app.use("/auth",loginLimiter);

// Routes 
app.get("/",(req,res)=>{
    return res.status(200).json({"message" : "App and API running successfully "});
})

app.use("/auth",AuthRoutes);


const port = process.env.PORT;
app.listen(port,async ()=>{
    await dbConnect();
    console.log(`server running successfully on PORT : ${port}`);
});