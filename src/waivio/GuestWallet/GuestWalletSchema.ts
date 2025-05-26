import mongoose from "mongoose";
import { GuestWallet } from "./types";

const GuestWalletSchema = new mongoose.Schema<GuestWallet>({
    refHiveBlockNumber: { type: Number },
    blockNumber: { type: Number },
    account: { type: String },
    transactionId: { type: String },
    operation: { type: String },
    timestamp: { type: Number },
    quantity: { type: mongoose.Types.Decimal128 },
    symbol: { type: String },
    authorperm: { type: String },
    from: { type: String },
    to: { type: String },
}, { versionKey: false });

GuestWalletSchema.index({ account: 1 });
GuestWalletSchema.index({ timestamp: -1 });
GuestWalletSchema.index({ symbol: 1 });
GuestWalletSchema.index({ operation: 1, transactionId: 1, account: 1 }, { unique: true });

GuestWalletSchema.set('toJSON', {
    transform: (doc, ret) => {
        ret.quantity = ret.quantity.toString();
        return ret;
    },
});

export default GuestWalletSchema; 