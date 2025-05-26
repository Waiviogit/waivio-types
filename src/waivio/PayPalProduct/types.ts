import { Document } from "mongoose";

export interface PayPalProduct extends Document {
    id: string;
    description: string;
    name: string;
    create_time: string;
} 