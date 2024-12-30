import mongoose from "mongoose";

// Define Schema
const formSchema = new mongoose.Schema({
    name: { type: String, required: true },
    college: { type: String, required: true },
    passOutYear: { type: Number, required: true },
    experience: { type: String },
    jobDescription: { type: String },
    profileImage: { type: String }, // Store filename of uploaded image
}, { timestamps: true });

// Create Model
const Form = mongoose.model("Form", formSchema);

// Save Data to Database
export const saveFormData = async (data) => {
    try {
        const form = new Form(data);
        const savedForm = await form.save();
        return { success: true, data: savedForm };
    } catch (error) {
        console.error("Error saving data to database:", error);
        return { success: false, error: error.message };
    }
};
