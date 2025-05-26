import mongoose from "mongoose";
import { HiddenPost } from "./types";

const HiddenPostSchema = new mongoose.Schema<HiddenPost>({
    userName: { type: String, required: true },
    postId: { type: String, required: true },
}, { versionKey: false });

HiddenPostSchema.index({ userName: 1, postId: 1 }, { unique: true });

export default HiddenPostSchema; 