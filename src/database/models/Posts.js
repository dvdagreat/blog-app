import mongoose from "mongoose";

const PostSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    published_date: {
      type: String,
    },
    status: {
      type: String,
      enum: ["published", "unpublished"],
      default: "published",
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    author: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Posts", PostSchema);
