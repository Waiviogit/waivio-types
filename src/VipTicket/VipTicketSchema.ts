import mongoose from "mongoose";
import { VipTicket } from "./types";

const VipTicketSchema = new mongoose.Schema<VipTicket>({
    userName: { type: String, required: true, index: true },
    ticket: {
        type: String, required: true, unique: true, index: true,
    },
    valid: { type: Boolean, default: true },
    note: { type: String },
}, { versionKey: false, timestamps: true });

export default VipTicketSchema; 