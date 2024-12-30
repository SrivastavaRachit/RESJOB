import fs from 'fs';
import { saveFormData , Form} from "../models/formModel.js";

export const submitForm = async (req, res) => {
    const { name, college, passOutYear, jobDescription } = req.body;
    // Check if a file is uploaded
    if (!req.file) {
        return res.status(400).json({ message: "Profile image is required." });
    }
    const profileImage = req.file.filename; // or convert to Base64 if needed
    // Validate required fields
    if (!name || !college || !passOutYear) {
        return res.status(400).json({ message: "Please provide all required fields (name, college, passOutYear)." });
    }
    const formData = {
        name,
        college,
        passOutYear,
        jobDescription,
        profileImage,
    };
    try {
        const result = await saveFormData(formData);

        if (result.success) {
            return res.status(200).json({
                message: "Form submitted successfully!",
                data: result.data,
            });
        } else {
            return res.status(500).json({ message: result.error || "Failed to submit form." });
        }
    } catch (error) {
        console.error("Error in submitForm:", error);
        return res.status(500).json({ message: "Server error. Please try again later." });
    }
};

export const getFormData = async (req, res) => {
    try {
        const forms = await Form.find({});
        const result = forms.map((form) => ({
            ...form._doc,
            profileImage: `data:image/jpeg;base64,${fs.readFileSync(`uploads/${form.profileImage}`, 'base64')}`, // Return Base64 image for UI
        }));
        return res.status(200).json(result);
    } catch (error) {
        console.error("Error fetching form data:", error);
        return res.status(500).json({ message: "Failed to fetch form data." });
    }
};

export const deleteForm = async (req, res) => {
    const { id } = req.params;

    try {
        // Find the form by ID
        const form = await Form.findById(id);

        if (!form) {
            return res.status(404).json({ message: "Form not found." });
        }

        // Delete the file from the disk
        const filePath = `uploads/${form.profileImage}`;
        if (fs.existsSync(filePath)) {
            fs.unlinkSync(filePath);
        }

        // Remove the form from the database
        await Form.findByIdAndDelete(id);

        return res.status(200).json({ message: "Form and associated image deleted successfully." });
    } catch (error) {
        console.error("Error deleting form:", error);
        return res.status(500).json({ message: "Failed to delete form." });
    }
};