import mongoose from "mongoose";
import { PaymentHistory, PaymentType } from "./types";

const PaymentHistorySchema = new mongoose.Schema<PaymentHistory>({
    userName: { type: String, required: true, index: true },
    sponsor: { type: String, index: true },
    type: {
        type: String,
        enum: [
            'review',
            'transfer',
            'campaign_server_fee',
            'referral_server_fee',
            'beneficiary_fee',
            'index_fee',
            'demo_post',
            'demo_user_transfer',
            'demo_debt',
        ] as PaymentType[],
        required: true,
    },
    app: { type: String },
    amount: { type: Number, required: true },
    is_demo_account: { type: Boolean, default: false },
    recounted: { type: Boolean, default: false },
    details: { type: Object },
    withdraw: { type: String },
    memo: { type: String },
}, {
    timestamps: true,
});

PaymentHistorySchema.index({ createdAt: -1 });

export default PaymentHistorySchema; 