import mongoose from "mongoose";
import { Delegation } from "./types";

const DelegationSchema = new mongoose.Schema<Delegation>({
    delegator: { type: String, required: true, index: true },
    delegatee: { type: String, required: true, index: true },
    vesting_shares: { type: Number, required: true },
    delegation_date: { type: String, required: true },
}, { 
    timestamps: false,
    versionKey: false 
});

DelegationSchema.index({ delegator: 1, delegatee: 1 }, { unique: true });

export default DelegationSchema; 