import mongoose from "mongoose";
import { Subscription } from "./types";
import {MODEL_NAME} from "../../constants/models";

const SubscriptionSchema = new mongoose.Schema<Subscription>({
    follower: { type: String, required: true },
    following: { type: String, required: true },
    bell: { type: Boolean },
}, { versionKey: false });

SubscriptionSchema.index({ follower: 1, following: 1 }, { unique: true });
SubscriptionSchema.index({ following: 1 });

SubscriptionSchema.virtual('followerPath', {
    ref: MODEL_NAME.USER,
    localField: 'follower',
    foreignField: 'name',
    justOne: true,
});

SubscriptionSchema.virtual('followingPath', {
    ref: MODEL_NAME.USER,
    localField: 'following',
    foreignField: 'name',
    justOne: true,
});

export default SubscriptionSchema;
