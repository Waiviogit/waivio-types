import mongoose from "mongoose";
import { PayPalPlan } from "./types";

const PayPalPlanSchema = new mongoose.Schema<PayPalPlan>({
    id: { type: String, required: true, index: true },
    product_id: { type: String, required: true, index: true },
    name: { type: String, required: true, index: true },
    status: { type: String, required: true },
    description: { type: String, required: true },
    usage_type: { type: String, required: true },
    create_time: { type: String, required: true },
}, { versionKey: false });

export default PayPalPlanSchema; 