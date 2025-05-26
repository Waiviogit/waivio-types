import { Document } from "mongoose";

export interface UserExpertise extends Document {
    user_name: string;
    author_permlink: string;
    weight: number;
} 