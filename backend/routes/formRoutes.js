import express from "express";
import multer from "multer";
import { submitForm } from "../controllers/formController.js";

const router = express.Router();

// Multer configuration for file storage
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads/");
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`);
    },
});
const upload = multer({ storage });

// Middleware for handling form submission with file upload
router.post("/create", upload.single("profileImage"), submitForm);  // Handles a single file upload (profileImage)

export default router;
