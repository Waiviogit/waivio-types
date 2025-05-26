import { Document } from "mongoose";

export interface HiddenComment extends Document {
    userName: string;
    author: string;
    permlink: string;
} 