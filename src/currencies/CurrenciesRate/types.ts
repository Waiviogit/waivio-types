import { Document } from "mongoose";
import { SUPPORTED_CURRENCIES } from "../../constants/general";

export interface CurrenciesRateRates {
    [key: string]: number;
}

export interface CurrenciesRate extends Document {
    dateString: string;
    base: keyof typeof SUPPORTED_CURRENCIES;
    rates: CurrenciesRateRates;
    createdAt: Date;
    updatedAt: Date;
} 