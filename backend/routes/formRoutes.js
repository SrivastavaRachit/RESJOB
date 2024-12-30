import express from "express";
import multer from "multer";
import { submitForm } from "../controllers/formController.js";

const router = express.Router();

// Multer configuration
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads/");
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`);
    },
});

const upload = multer({ storage });

// Route to handle form submission
router.post("/submit", upload.single("profileImage"), submitForm);

export default router;
