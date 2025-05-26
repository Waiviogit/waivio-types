import mongoose from "mongoose";
import {MutedUser} from "./types";



const MutedUserSchema = new mongoose.Schema<MutedUser>({
    userName: { type: String, required: true },
    mutedBy: { type: String, required: true },
    mutedForApps: {
        type: [String], required: true, index: true,
    },
}, { versionKey: false });

MutedUserSchema.index({ userName: 1, mutedBy: 1 }, { unique: true });



