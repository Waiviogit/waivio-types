import { Document } from "mongoose";

export interface Account {
    name?: string;
    offset?: number;
}

export interface EngineAdvancedReportStatus extends Document {
    reportId: string;
    user?: string;
    currency?: string;
    startDate?: Date;
    endDate?: Date;
    filterAccounts?: string[];
    accounts?: Account[];
    deposits?: string;
    withdrawals?: string;
    status?: string;
    symbol?: string;
    addSwaps?: boolean;
    mergeRewards?: boolean;
} 