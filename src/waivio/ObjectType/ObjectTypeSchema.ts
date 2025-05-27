import mongoose from "mongoose";
import { ObjectType, SupposedUpdates, TopExpert } from "./types";


const SupposedUpdatesSchema = new mongoose.Schema<SupposedUpdates>({
    name: { type: String },
    values: { type: [String] },
    id_path: { type: String },
}, { _id: false });

const TopExpertSchema = new mongoose.Schema<TopExpert>({
    name: { type: String },
    weight: { type: Number, default: 0 },
}, { _id: false });

const ObjectTypeSchema = new mongoose.Schema<ObjectType>({
    name: { type: String, index: true, required: true },
    author: { type: String, required: true },
    permlink: { type: String, required: true },
    top_wobjects: { type: [String], default: [] },
    weight: { type: Number, default: 0 },
    top_experts: { type: [TopExpertSchema], default: [] },
    exposedFields: { type: [String], default: [] },
    supposed_updates: { type: [SupposedUpdatesSchema], default: [] },
}, {
    toObject: { virtuals: true },
    timestamps: true,
});

ObjectTypeSchema.index({ author: 1, permlink: 1 }, { unique: true });

export default ObjectTypeSchema;
