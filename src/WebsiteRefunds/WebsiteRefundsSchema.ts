import mongoose from "mongoose";
import { REFUND_TYPES, REFUND_STATUSES } from "../constants/sitesConstants";
import { WebsiteRefunds } from "./types";

const WebsiteRefundsSchema = new mongoose.Schema<WebsiteRefunds>({
    userName: { type: String, required: true, index: true },
    type: { type: String, enum: Object.values(REFUND_TYPES), required: true },
    status: { type: String, enum: Object.values(REFUND_STATUSES), default: REFUND_STATUSES.PENDING },
    blockNum: { type: Number, required: true },
    description: { type: String, default: '' },
    rejectMessage: { type: String, default: '' },
}, { timestamps: true });

export default WebsiteRefundsSchema; 