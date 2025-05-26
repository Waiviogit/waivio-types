import mongoose from "mongoose";
import { COMMENT_REF_TYPES } from "../constants/common";
import { CommentRef } from "./types";

const CommentRefSchema = new mongoose.Schema<CommentRef>({
    comment_path: { type: String, required: true },
    type: { 
        type: String, 
        required: true, 
        enum: Object.values(COMMENT_REF_TYPES) 
    },
    wobjects: {
        type: String,
        required() {
            return this.type === COMMENT_REF_TYPES.postWithWobjects;
        },
    },
    name: {
        type: String,
        required() {
            return this.type === COMMENT_REF_TYPES.wobjType;
        },
    },
    root_wobj: {
        type: String,
        required() {
            return this.type === COMMENT_REF_TYPES.appendWobj
                || this.type === COMMENT_REF_TYPES.createWobj;
        },
    },
}, { timestamps: false });

CommentRefSchema.index({ comment_path: 1 }, { unique: true });

export default CommentRefSchema; 