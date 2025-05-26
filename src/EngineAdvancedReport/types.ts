import { Document } from "mongoose";
import { SUPPORTED_CURRENCIES, ADVANCED_REPORT_SYMBOLS } from "../constants/common";

type SupportedCurrency = keyof typeof SUPPORTED_CURRENCIES;
type AdvancedReportSymbol = keyof typeof ADVANCED_REPORT_SYMBOLS;

type RateFields = {
    [K in SupportedCurrency]?: number;
};

type SymbolRateFields = {
    [K in `${AdvancedReportSymbol}.${SupportedCurrency}`]?: number;
};

export interface EngineAdvancedReport extends Document, RateFields, SymbolRateFields {
    reportId?: string;
    refHiveBlockNumber?: number;
    blockNumber?: number;
    account?: string;
    from?: string;
    to?: string;
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
    withdrawDeposit?: string;
    authorperm?: string;
    memo?: string;
    url?: string;
    maxSupply?: string;
    name?: string;
    newMetadata?: string;
    issuer?: string;
    precision?: number;
    numberTransactions?: number;
    unstakingCooldown?: number;
    checked?: boolean;
} 