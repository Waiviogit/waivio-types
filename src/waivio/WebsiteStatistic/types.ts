import { Document } from "mongoose";

export interface WebsiteStatistic extends Document {
    host: string;
    visits?: number;
    buyAction?: number;
    buyActionUniq?: number;
    conversion?: number;
    conversionUniq?: number;
    createdAt: Date;
    updatedAt: Date;
} 