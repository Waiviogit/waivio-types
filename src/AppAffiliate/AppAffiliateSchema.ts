import mongoose from "mongoose";
import { AppAffiliate } from "./types";

const AppAffiliateSchema = new mongoose.Schema<AppAffiliate>({
    countryCode: { type: String },
    type: { type: String },
    host: { type: String, required: true, index: true },
    affiliateCode: { type: String, required: true },
}, { timestamps: true });

AppAffiliateSchema.index({ host: 1, type: 1, countryCode: 1 }, { unique: true });

export default AppAffiliateSchema; 