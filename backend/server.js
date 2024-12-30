import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import formRoutes from "./routes/formRoutes.js";
import { connectDB } from "./config/db.js";
import 'dotenv/config';

// APP CONFIG
const app = express();
const port = process.env.PORT || 4000;

// MIDDLEWARE
app.use(express.json()); // Built-in middleware to parse JSON data
app.use(express.urlencoded({ extended: true })); // Built-in middleware to parse URL-encoded data
app.use(cors()); // Enable CORS (Cross-Origin Resource Sharing)

// Serve static files from the "uploads" directory
const __dirname = path.dirname(fileURLToPath(import.meta.url));
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// DB CONNECTION 
connectDB();

// API ENDPOINTS
app.use("/api/form", formRoutes);

app.get("/", (req, res) => {
    res.send("API WORKING");
});

// Start the server
app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`);
});
