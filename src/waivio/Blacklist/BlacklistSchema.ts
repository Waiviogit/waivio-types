import mongoose from "mongoose";
import { Blacklist } from "./types";

const BlacklistSchema = new mongoose.Schema<Blacklist>({
    user: {
        type: String,
        required: true,
        index: true,
        unique: true,
    },
    whiteList: { type: [String], default: [] },
    blackList: { type: [String], default: [] },
    followLists: { type: [String], default: [] },
}, { timestamps: true });

BlacklistSchema.pre('save', function(next) {
    this.whiteList = [this.user];
    next();
});

BlacklistSchema.post('findOne', async function(doc) {
    if (doc && doc.followLists) {
        doc.followLists = await this.model.find({ user: { $in: doc.followLists } }).lean();
    }
});

export default BlacklistSchema; 