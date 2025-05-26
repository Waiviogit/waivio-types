import mongoose from "mongoose";
import { SUPPORTED_CURRENCIES, ADVANCED_REPORT_SYMBOLS } from "../constants/common";
import { EngineAdvancedReport } from "./types";

const supportedCurrencies = Object.values(SUPPORTED_CURRENCIES);

const availableRateFields = supportedCurrencies.reduce((acc, el) => {
    acc[el] = { type: Number };
    return acc;
}, {} as Record<string, { type: NumberConstructor }>);

const availableSymbolRateFields = ADVANCED_REPORT_SYMBOLS.reduce((acc, el) => ({
    ...acc,
    ...supportedCurrencies.reduce((acc2, currency) => {
        acc2[`${el}.${currency}`] = { type: Number };
        return acc2;
    }, {} as Record<string, { type: NumberConstructor }>),
}), {} as Record<string, { type: NumberConstructor }>);

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