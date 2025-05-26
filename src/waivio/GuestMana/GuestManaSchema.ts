import mongoose from "mongoose";
import { GuestMana } from "./types";

const GuestManaSchema = new mongoose.Schema<GuestMana>({
    account: { type: String, required: true },
    mana: { type: Number, required: true },
    lastManaUpdate: { type: Number, default: 0 },
    importAuthorization: { type: Boolean, default: true },
}, {
    timestamps: false,
});

GuestManaSchema.index({ account: 1 }, { unique: true });

export default GuestManaSchema; 