import mongoose from "mongoose";
import { EngineAccountHistory } from "./types";

const EngineAccountHistorySchema = new mongoose.Schema<EngineAccountHistory>({
    refHiveBlockNumber: { type: Number },
    blockNumber: { type: Number },
    account: { type: String },
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
});

export default EngineAccountHistorySchema; 