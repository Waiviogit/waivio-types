import mongoose from "mongoose";
import { UserExpertise } from "./types";

const UserExpertiseSchema = new mongoose.Schema<UserExpertise>({
    user_name: { type: String, required: true },
    author_permlink: { type: String, required: true },
    weight: { type: Number, default: 0 },
}, { timestamps: false });

UserExpertiseSchema.index({ user_name: 1 });
UserExpertiseSchema.index({ author_permlink: 1, user_name: 1 }, { unique: true });
UserExpertiseSchema.index({ author_permlink: 1, _id: 1 });
UserExpertiseSchema.index({ weight: -1 });

export default UserExpertiseSchema; 