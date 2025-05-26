import { Document } from "mongoose";

export interface PlacesApiAccess extends Document {
    userName: string;
    date: string;
    type: string;
    count: number;
} 