import mongoose from "mongoose";
import fs from "fs/promises"; // Use promises for async file operations

// Define the schema
const formSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        college: { type: String, required: true },
        passOutYear: { type: Number, required: true },
        jobDescription: { type: String },
        profileImage: { type: String, required: true },
    },
    { timestamps: true }
);

// Middleware to delete the image file after a document is deleted
formSchema.post("findOneAndDelete", async function (doc) {
    if (doc) {
        const filePath = `uploads/${doc.profileImage}`;
        try {
            await fs.unlink(filePath); // Asynchronously delete the file
            console.log(`Deleted file: ${filePath}`);
        } catch (error) {
            console.error(`Error deleting file: ${filePath}`, error);
        }
    }
});

// Create the model
const Form = mongoose.model("Form", formSchema);

// Function to save form data
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

// Export the Form model
export { Form };
