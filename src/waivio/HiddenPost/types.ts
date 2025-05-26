import { Document } from "mongoose";

export interface HiddenPost extends Document {
    userName: string;
    postId: string;
} 