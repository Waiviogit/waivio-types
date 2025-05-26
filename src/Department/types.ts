import { Document } from "mongoose";

export interface Department extends Document {
    name: string;
    search: string;
    related: string[];
    objectsCount: number;
    level?: number;
    sortScore?: number;
} 