import mongoose from "mongoose";
import { WalletExemptions } from "./types";

const WalletExemptionsSchema = new mongoose.Schema<WalletExemptions>({
    userName: { type: String },
    userWithExemptions: { type: String },
    recordId: { type: mongoose.Types.ObjectId },
    operationNum: { type: Number },
}, { timestamps: false });

WalletExemptionsSchema.index(
    { userName: 1, userWithExemptions: 1, recordId: 1 },
    { unique: true, partialFilterExpression: { recordId: { $exists: true } } },
);
WalletExemptionsSchema.index(
    { userName: 1, userWithExemptions: 1, operationNum: 1 },
    { unique: true, partialFilterExpression: { operationNum: { $exists: true } } },
);

export default WalletExemptionsSchema; 