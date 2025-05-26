import { Document } from "mongoose";

export type PaymentType = 
    | 'review'
    | 'transfer'
    | 'campaign_server_fee'
    | 'referral_server_fee'
    | 'beneficiary_fee'
    | 'index_fee'
    | 'demo_post'
    | 'demo_user_transfer'
    | 'demo_debt';

export interface PaymentHistory extends Document {
    userName: string;
    sponsor?: string;
    type: PaymentType;
    app?: string;
    amount: number;
    is_demo_account?: boolean;
    recounted?: boolean;
    details?: Record<string, string | number | boolean>;
    withdraw?: string;
    memo?: string;
    createdAt: Date;
    updatedAt: Date;
} 