import connectDB from "../../config";
import GeneratedModel from "../../models/GeneratedModels";

export default async function handler(req, res) {
  await connectDB();

  if (req.method === "GET") {
    try {
      const generatedAPI = await GeneratedModel.find({}); // Fetch all generated
      res.status(200).json({ success: true, data: generatedAPI });
    } catch (error) {
      res.status(400).json({ success: false, message: error.message });
    }
  } else {
    res.status(405).json({ success: false, message: "Method not allowed" });
  }
}
