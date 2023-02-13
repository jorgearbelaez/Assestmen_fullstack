import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import textsRouter from "./routes/texts"


const app = express()

app.use(express.json())

dotenv.config()

app.use(cors());

app.use('/api/texts', textsRouter)

const PORT = process.env.PORT || 4000

app.listen(PORT, ()=>{
    console.log(`server is running on port ${PORT}`)
})
