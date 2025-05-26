import mongoose from "mongoose";
import { EngineAdvancedReportStatus, Account } from "./types";

const AccountSchema = new mongoose.Schema<Account>({
    name: { type: String },
    offset: { type: Number },
}, { _id: false });

const EngineAdvancedReportStatusSchema = new mongoose.Schema<EngineAdvancedReportStatus>({
    reportId: { type: String, unique: true, index: true },
    user: { type: String, index: true },
    currency: { type: String },
    startDate: { type: Date },
    endDate: { type: Date },
    filterAccounts: { type: [String] },
    accounts: { type: [AccountSchema] },
    deposits: { type: mongoose.Types.Decimal128, default: 0 },
    withdrawals: { type: mongoose.Types.Decimal128, default: 0 },
    status: { type: String },
    symbol: { type: String },
    addSwaps: { type: Boolean },
    mergeRewards: { type: Boolean },
}, { versionKey: false });

export default EngineAdvancedReportStatusSchema; 