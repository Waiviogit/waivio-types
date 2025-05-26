import { Document } from "mongoose";

export interface Blacklist extends Document {
    user: string;
    whiteList: string[];
    blackList: string[];
    followLists: string[];
    createdAt: Date;
    updatedAt: Date;
} 