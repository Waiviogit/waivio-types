import { Document } from "mongoose";

export interface UserRcDelegations extends Document {
    delegator: string;
    delegatee: string;
    rc: number;
} 