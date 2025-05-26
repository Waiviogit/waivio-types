import { Document } from "mongoose";

export interface GuestWallet extends Document {
    refHiveBlockNumber?: number;
    blockNumber?: number;
    account?: string;
    transactionId?: string;
    operation?: string;
    timestamp?: number;
    quantity?: string;
    symbol?: string;
    authorperm?: string;
    from?: string;
    to?: string;
} 