import { Document } from "mongoose";

export type WithdrawStatus = 'pending' | 'success' | 'failed' | 'expired';

export interface WithdrawAuth {
    id?: string;
    provider?: string;
}

export interface WithdrawFunds extends Document {
    account: string;
    email?: string;
    inputCoinType: string;
    outputCoinType: string;
    amount: number;
    outputAmount: number | null;
    status: WithdrawStatus;
    address: string;
    memo: string;
    usdValue: number;
    commission: number;
    receiver: string;
    transactionId: string | null;
    transactionHash: string | null;
    exchangeId: string | null;
    auth: WithdrawAuth;
    createdAt: Date;
    updatedAt: Date;
} 