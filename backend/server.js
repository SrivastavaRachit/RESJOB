import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js"
import 'dotenv/config'

// APP CONFIG
const app = express()
const port = 4000

// MIDDLEWARE
app.use(express.json())
app.use(cors())

// DB CONNECTION 
connectDB();

// API ENDPOINTS
app.get("/", (req, res) => {
    res.send("API WORKING")
})

app.listen(port, () => {
    console.log(`Server Started on http://localhost:${port}`)
})