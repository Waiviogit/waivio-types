import { Document } from "mongoose";

export interface UserCommentDraft extends Document {
    user: string;
    author: string;
    permlink: string;
    body: string;
    createdAt: Date;
    updatedAt: Date;
} 