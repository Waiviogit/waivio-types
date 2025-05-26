import mongoose from "mongoose";
import { WobjectSubscription } from "./types";

const WobjectSubscriptionSchema = new mongoose.Schema<WobjectSubscription>({
    follower: { type: String, required: true },
    following: { type: String, required: true },
    bell: { type: Boolean },
}, { versionKey: false });

WobjectSubscriptionSchema.index({ follower: 1, following: 1 }, { unique: true });
WobjectSubscriptionSchema.index({ following: 1 });

WobjectSubscriptionSchema.virtual('followerPath', {
    ref: 'User',
    localField: 'follower',
    foreignField: 'name',
    justOne: true,
});

WobjectSubscriptionSchema.virtual('followingPath', {
    ref: 'User',
    localField: 'following',
    foreignField: 'name',
    justOne: true,
});

export default WobjectSubscriptionSchema; 