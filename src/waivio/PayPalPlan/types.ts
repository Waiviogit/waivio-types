import { Document } from "mongoose";

export interface PayPalPlan extends Document {
    id: string;
    product_id: string;
    name: string;
    status: string;
    description: string;
    usage_type: string;
    create_time: string;
} 