import mongoose from "mongoose";
import { Prefetch } from "./types";

const PrefetchSchema = new mongoose.Schema<Prefetch>({
    name: { type: String, unique: true, required: true },
    tag: { type: String, required: true },
    type: { type: String, required: true },
    category: { type: String, required: true },
    route: { type: String },
    image: { type: String },
});

PrefetchSchema.index({ type: 1 });
PrefetchSchema.index({ name: 1, type: 1 });

export default PrefetchSchema; 