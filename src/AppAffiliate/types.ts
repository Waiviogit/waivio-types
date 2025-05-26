import { Document } from "mongoose";

export interface AppAffiliate extends Document {
    countryCode?: string;
    type?: string;
    host: string;
    affiliateCode: string;
    createdAt: Date;
    updatedAt: Date;
} 