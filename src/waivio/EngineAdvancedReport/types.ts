import { Document } from "mongoose";
import {ADVANCED_REPORT_SYMBOLS, SUPPORTED_CURRENCIES} from "../../constants/general";

type SupportedCurrency = keyof typeof SUPPORTED_CURRENCIES;

type RateFields = {
    [K in SupportedCurrency]?: number;
};

type SymbolRateFields = {
    [K in string & keyof typeof ADVANCED_REPORT_SYMBOLS as `${K}.${SupportedCurrency}`]?: number;
};

type BaseFields = {
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

export type EngineAdvancedReport = Document & RateFields & SymbolRateFields & BaseFields;
