import mongoose from "mongoose";

const formSchema = new mongoose.Schema({
    name: { type: String, required: true },
    college: { type: String, required: true },
    passOutYear: { type: Number, required: true },
    jobDescription: { type: String },
    profileImage: { type: String, required: true },
}, { timestamps: true });

const Form = mongoose.model("Form", formSchema);

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
