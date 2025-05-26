import { Document } from "mongoose";

export type SubscriptionStatus = 'ACTIVE' | 'CANCELLED' | 'SUSPENDED' | 'EXPIRED';

export interface PayPalSubscription extends Document {
    id: string;
    plan_id: string;
    product_id: string;
    status: SubscriptionStatus;
} 