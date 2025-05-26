import mongoose from "mongoose";
import { PayPalSubscription, SubscriptionStatus } from "./types";

const PayPalSubscriptionSchema = new mongoose.Schema<PayPalSubscription>({
    id: { type: String, required: true, index: true },
    plan_id: { type: String, required: true, index: true },
    product_id: { type: String, required: true, index: true },
    status: { type: String, default: 'ACTIVE' as SubscriptionStatus },
}, { versionKey: false });

export default PayPalSubscriptionSchema; 