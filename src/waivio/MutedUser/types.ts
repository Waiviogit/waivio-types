import { Document } from "mongoose";

export interface MutedUser extends Document {
    userName: string;
    mutedBy: string;
    mutedForApps: string[];
} 