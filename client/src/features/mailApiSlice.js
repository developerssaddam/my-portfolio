import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// UserRegister.
export const sendMail = createAsyncThunk(
  "mail/sendMail",
  async (data) => {
    try {
      const response = await axios.post(
        `http://localhost:5050/api/v1/mail_send`,
        data,
        {
          withCredentials: true,
        }
      );
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);