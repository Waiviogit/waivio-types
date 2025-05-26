import { Document } from "mongoose";

export interface PageDraft extends Document {
    user: string;
    author_permlink: string;
    body: string;
    createdAt: Date;
    updatedAt: Date;
} 