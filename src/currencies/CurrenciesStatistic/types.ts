import { Document } from "mongoose";

export interface CurrencyData {
    [key: string]: number;
    [key: `${string}_24h_change`]: number;
}

export type CurrenciesStatistic = Document & {
    [key: string]: CurrencyData |string| Date;
    type: 'ordinaryData' | 'dailyData';
    createdAt: Date;
    updatedAt: Date;
}
