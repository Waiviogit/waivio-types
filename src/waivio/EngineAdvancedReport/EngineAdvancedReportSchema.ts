import mongoose from "mongoose";
import { SUPPORTED_CURRENCIES, ADVANCED_REPORT_SYMBOLS } from "../../constants/general";
import { EngineAdvancedReport } from "./types";

const supportedCurrencies = Object.values(SUPPORTED_CURRENCIES);

const availableRateFields = supportedCurrencies.reduce<Record<string, { type: NumberConstructor }>>((acc: Record<string, { type: NumberConstructor }>, el: string) => {
    acc[el] = { type: Number };
    return acc;
}, {});

const availableSymbolRateFields = ADVANCED_REPORT_SYMBOLS.reduce<Record<string, { type: NumberConstructor }>>((acc: Record<string, { type: NumberConstructor }>, el: string) => ({
    ...acc,
    ...supportedCurrencies.reduce<Record<string, { type: NumberConstructor }>>((acc2: Record<string, { type: NumberConstructor }>, currency: string) => {
        acc2[`${el}.${currency}`] = { type: Number };
        return acc2;
    }, {}),
}), {});

const EngineAdvancedReportSchema = new mongoose.Schema<EngineAdvancedReport>({
    reportId: { type: String, index: true },
    refHiveBlockNumber: { type: Number },
    blockNumber: { type: Number },
    account: { type: String },
    from: { type: String },
    to: { type: String },
    transactionId: { type: String },
    operation: { type: String },
    symbolOut: { type: String },
    symbolOutQuantity: { type: String },
    symbolIn: { type: String },
    symbolInQuantity: { type: String },
    timestamp: { type: Number },
    quantity: { type: String },
    symbol: { type: String },
    tokenState: { type: String },
    withdrawDeposit: { type: String },
    authorperm: { type: String },
    memo: { type: String },
    url: { type: String },
    maxSupply: { type: String },
    name: { type: String },
    newMetadata: { type: String },
    issuer: { type: String },
    precision: { type: Number },
    numberTransactions: { type: Number },
    unstakingCooldown: { type: Number },
    checked: { type: Boolean },
    ...availableRateFields,
    ...availableSymbolRateFields,
}, { versionKey: false });

export default EngineAdvancedReportSchema; 