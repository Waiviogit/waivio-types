import mongoose from "mongoose";
import { GuestSpam } from "./types";

const GuestSpamSchema = new mongoose.Schema<GuestSpam>({
    account: { type: String, required: true, index: true },
    body: { type: String, required: true },
    reason: { type: String, required: true },
}, {
    timestamps: true,
});

export default GuestSpamSchema; 