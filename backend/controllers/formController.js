import { saveFormData } from "../models/formModel.js";

export const submitForm = async (req, res) => {
    const { name, college, passOutYear, experience, jobDescription } = req.body;
    const profileImage = req.file ? req.file.filename : null;

    try {
        const result = await saveFormData({
            name,
            college,
            passOutYear,
            experience,
            jobDescription,
            profileImage,
        });

        if (result.success) {
            res.status(200).json({
                message: "Form submitted successfully!",
                data: result.data,
            });
        } else {
            res.status(500).json({ message: result.error || "Failed to submit form." });
        }
    } catch (error) {
        res.status(500).json({ message: "Server error. Please try again later." });
    }
};
