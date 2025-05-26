import { Document } from "mongoose";

export interface Delegation extends Document {
    delegator: string;
    delegatee: string;
    vesting_shares: number;
    delegation_date: string;
} 