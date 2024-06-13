import asyncHandler from "express-async-handler";
import { mailSend } from "../utils/mailSend.js";

// Create mailSend Controller.
export const mailSendController = asyncHandler(async (req, res) => {
  // Get Data.
  const { name, email, subject, text } = req.body;
  // Validation.
  if (!name || !email || !subject || !text) {
    return res.status(400).json({ message: "All fields are required." });
  }

  const data = { name, email, subject, text };
  try {
    await mailSend(data);
    res.status(200).json({ data, message: "Your message sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    res
      .status(500)
      .json({ message: "Failed to send message. Please try again later." });
  }
});
