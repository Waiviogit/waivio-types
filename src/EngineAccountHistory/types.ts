import { Document } from "mongoose";

export interface EngineAccountHistory extends Document {
    refHiveBlockNumber?: number;
    blockNumber?: number;
    account?: string;
    transactionId?: string;
    operation?: string;
    symbolOut?: string;
    symbolOutQuantity?: string;
    symbolIn?: string;
    symbolInQuantity?: string;
    timestamp?: number;
    quantity?: string;
    symbol?: string;
    tokenState?: string;
} 