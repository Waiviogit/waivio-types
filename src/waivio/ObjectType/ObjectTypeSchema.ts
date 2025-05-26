import mongoose from "mongoose";
import { FIELDS_NAMES } from "../constants/wobjectsData";
import { ObjectType, TopExpert } from "./types";

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
    exposedFields: { type: [String], enum: Object.values(FIELDS_NAMES), default: [] },
}, {
    toObject: { virtuals: true },
    timestamps: true,
});

ObjectTypeSchema.index({ author: 1, permlink: 1 }, { unique: true });

export default ObjectTypeSchema; 