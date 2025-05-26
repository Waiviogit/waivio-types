import { Document } from "mongoose";
import { PAYMENT_TYPES } from "../constants/sitesConstants";

export type PaymentType = typeof PAYMENT_TYPES[keyof typeof PAYMENT_TYPES];

export interface WebsitePayments extends Document {
    userName: string;
    type: PaymentType;
    amount: number;
    host?: string;
    countUsers?: number;
    blockNum?: number;
    description?: string;
    transferTo?: string;
    createdAt: Date;
    updatedAt: Date;
} 