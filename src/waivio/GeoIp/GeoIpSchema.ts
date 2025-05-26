import mongoose from "mongoose";
import { GeoIp } from "./types";

const GeoIpSchema = new mongoose.Schema<GeoIp>({
    ip: { type: String, required: true, index: true },
    longitude: { type: Number, required: true },
    latitude: { type: Number, required: true },
    countryCode: { type: String },
}, { versionKey: false });

export default GeoIpSchema; 