import mongoose from "mongoose";
import { PayPalProduct } from "./types";

const PayPalProductSchema = new mongoose.Schema<PayPalProduct>({
    id: { type: String, required: true, index: true },
    description: { type: String, required: true },
    name: { type: String, required: true, index: true },
    create_time: { type: String, required: true },
}, { versionKey: false });

PayPalProductSchema.index({ name: 1, id: 1 }, { unique: true });

export default PayPalProductSchema; 