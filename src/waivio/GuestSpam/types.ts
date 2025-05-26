import { Document } from "mongoose";

export interface GuestSpam extends Document {
    account: string;
    body: string;
    reason: string;
    createdAt: Date;
    updatedAt: Date;
} 