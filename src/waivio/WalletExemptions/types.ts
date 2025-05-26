import { Document, Types } from "mongoose";

export interface WalletExemptions extends Document {
    userName: string;
    userWithExemptions: string;
    recordId?: Types.ObjectId;
    operationNum?: number;
} 