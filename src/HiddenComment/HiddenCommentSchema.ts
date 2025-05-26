import mongoose from "mongoose";
import { HiddenComment } from "./types";

const HiddenCommentSchema = new mongoose.Schema<HiddenComment>({
    userName: { type: String, required: true },
    author: { type: String, required: true },
    permlink: { type: String, required: true },
}, { versionKey: false });

HiddenCommentSchema.index({ userName: 1, author: 1, permlink: 1 }, { unique: true });

export default HiddenCommentSchema; 