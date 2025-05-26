import mongoose from "mongoose";
import { HiveEngineRate } from "./types";

export const HiveEngineRateSchema = new mongoose.Schema<HiveEngineRate>({
    dateString: { type: String, index: true },
    base: { type: String, default: 'WAIV' },
    type: {
        type: String,
        default: 'ordinary',
        enum: ['ordinary', 'daily'],
        index: true
    },
    rates: { type: Map, of: Number, required: true },
    change24h: { type: Map, of: Number }
}, {
    timestamps: true,
    versionKey: false
});

export default HiveEngineRateSchema; 