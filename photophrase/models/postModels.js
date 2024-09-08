import { Schema, model, models } from "mongoose";

const postSchema = new Schema(
  {
    image: {
      type: String,
      required: true,
    },
  },

  { timestamps: true }
);

const PostModel = models.post || model("post", postSchema);

export default PostModel;
