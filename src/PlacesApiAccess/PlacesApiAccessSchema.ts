import mongoose from "mongoose";
import { PlacesApiAccess } from "./types";

const PlacesApiAccessSchema = new mongoose.Schema<PlacesApiAccess>({
    userName: { type: String, required: true, index: true },
    date: { type: String, required: true, index: true },
    type: { type: String, required: true, index: true },
    count: { type: Number, required: true },
}, { versionKey: false });

export default PlacesApiAccessSchema; 