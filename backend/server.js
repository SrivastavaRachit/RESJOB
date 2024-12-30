import express from "express"
import bodyParser from "body-parser";
import cors from "cors"
import path from "path";
import { fileURLToPath } from "url";
import formRoutes from "./routes/formRoutes.js";
import { connectDB } from "./config/db.js"
import 'dotenv/config'

// APP CONFIG
const app = express()
const port = 4000

// MIDDLEWARE
app.use(bodyParser.json());
app.use(cors())

// Serve static files from the uploads directory
const __dirname = path.dirname(fileURLToPath(import.meta.url));
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// DB CONNECTION 
connectDB();

// API ENDPOINTS
app.use("/api/form", formRoutes);

app.get("/", (req, res) => {
    res.send("API WORKING")
})

app.listen(port, () => {
    console.log(`Server Started on http://localhost:${port}`)
})