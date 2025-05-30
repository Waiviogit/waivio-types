import mongoose from "mongoose";
import { WebsitePayments } from "./types";
import {PAYMENT_TYPES} from "../../constants/general";

const WebsitePaymentsSchema = new mongoose.Schema<WebsitePayments>({
    userName: { type: String, required: true, index: true },
    type: { type: String, enum: Object.values(PAYMENT_TYPES), required: true },
    amount: { type: Number, required: true },
    host: { type: String },
    countUsers: { type: Number },
    blockNum: { type: Number },
    description: { type: String },
    transferTo: { type: String },
}, { timestamps: true });

WebsitePaymentsSchema.index({ createdAt: -1 });

export default WebsitePaymentsSchema;
