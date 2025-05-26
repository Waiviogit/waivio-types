import mongoose from "mongoose";
import { SUPPORTED_CURRENCIES } from "../../constants/general";
import { CurrenciesRate } from "./types";

export const CurrenciesRateSchema = new mongoose.Schema<CurrenciesRate>({
    dateString: { type: String, index: true },
    base: { 
        type: String, 
        default: SUPPORTED_CURRENCIES.USD, 
        enum: Object.keys(SUPPORTED_CURRENCIES) 
    },
    rates: { type: Map, of: Number, required: true },
}, {
    timestamps: true,
    versionKey: false
});

CurrenciesRateSchema.index({ base: 1, dateString: -1 }, { unique: true });

export default CurrenciesRateSchema; 