import { NextApiRequest, NextApiResponse } from "next";
import { IncomingForm, File } from "formidable";
import fs from "fs";
import fetch from "node-fetch";

export const config = {
  api: {
    bodyParser: false, // Disable bodyParser to handle form data
  },
};

type CaptionResponse = {
  caption: string;
};

const query = async (filePath: string): Promise<CaptionResponse> => {
  try {
    const data = fs.readFileSync(filePath); // Read file as binary buffer
    const response = await fetch(
      "https://api-inference.huggingface.co/models/Salesforce/blip-image-captioning-base",
      {
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_HUGGING_FACE_TOKEN}`,
        },
        method: "POST",
        body: data,
      }
    );

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(
        `API request failed with status ${response.status}: ${errorText}`
      );
    }

    const result = await response.json();
    console.log("API Response:", result); // Log the entire response

    // Update this line to check the correct property
    if (!result || !Array.isArray(result) || !result[0].generated_text) {
      throw new Error("Caption is undefined in the API response.");
    }

    return { caption: result[0].generated_text }; // Return the correct property
  } catch (error) {
    console.error("Error in query function:", error); // Log the error
    throw error; // Rethrow the error to be handled in the handler
  }
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const form = new IncomingForm();

  form.parse(req, async (err, fields, files) => {
    if (err) {
      console.error("Error parsing the file:", err);
      return res.status(500).json({ error: "Error parsing the file." });
    }

    const file = Array.isArray(files.file) ? files.file[0] : files.file;

    if (!file) {
      console.error("No file uploaded");
      return res.status(400).json({ error: "No file uploaded" });
    }

    const filePath = (file as File).filepath;
    console.log("File path:", filePath); // Log the file path

    // Check if file exists
    if (!fs.existsSync(filePath)) {
      console.error("File does not exist:", filePath);
      return res.status(400).json({ error: "File does not exist." });
    }

    try {
      const result = await query(filePath);
      console.log("Caption generated:", result.caption);
      return res.status(200).json({ caption: result.caption });
    } catch (error) {
      console.error("Error during caption generation:", error);
      return res
        .status(500)
        .json({ error: error.message || "Internal Server Error" });
    }
  });
}
