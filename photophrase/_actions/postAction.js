"use server";

import PostModel from "../models/postModels";
import connectDB from "../config/database";

export async function getPost() {
  try {
    await connectDB();

    return { msg: "GET" };
  } catch (error) {
    return {
      errMsg: error.message,
    };
  }
}
