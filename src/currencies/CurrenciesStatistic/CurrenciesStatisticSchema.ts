import mongoose from "mongoose";
import { CurrenciesStatistic, CurrencyData } from "./types";
import { allowedCurrencies, allowedIds} from "../../constants/general";


const createCurrencySchema = () => {
    const data: Record<string, { type: typeof Number; required: boolean }> = {};
    for (const curr of allowedCurrencies) {
        data[curr] = { type: Number, required: true };
        data[`${curr}_24h_change`] = { type: Number, required: true };
    }
    return data;
};

const CurrencySchema = new mongoose.Schema<CurrencyData>(createCurrencySchema(), { _id: false });

const createStatisticSchema = () => {
    const data: Record<string, { type: typeof CurrencySchema; required: boolean } | { type: typeof String; default: string; enum: string[]; index: boolean }> = {};
    for (const id of allowedIds) {
        data[id] = { type: CurrencySchema, required: true };
    }
    data.type = {
        type: String,
        default: 'ordinaryData',
        enum: ['ordinaryData', 'dailyData'],
        index: true
    };
    return data;
};

export const CurrenciesStatisticSchema = new mongoose.Schema<CurrenciesStatistic>(
    createStatisticSchema(),
    { timestamps: true }
);

CurrenciesStatisticSchema.index({ createdAt: 1 });

export default CurrenciesStatisticSchema;
