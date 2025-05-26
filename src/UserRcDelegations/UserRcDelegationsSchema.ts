import mongoose from "mongoose";
import { UserRcDelegations } from "./types";

const UserRcDelegationsSchema = new mongoose.Schema<UserRcDelegations>({
    delegator: { type: String, required: true },
    delegatee: { type: String, required: true, index: true },
    rc: { type: Number, default: 0 },
}, { timestamps: false, versionKey: false });

UserRcDelegationsSchema.index({ delegator: 1, delegatee: 1 }, { unique: true });

export default UserRcDelegationsSchema; 