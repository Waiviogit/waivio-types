import { Document } from "mongoose";

export interface HiveEngineRates {
    [key: string]: number;
}

export interface HiveEngineChange24h {
    [key: string]: number;
}

export interface HiveEngineRate extends Document {
    dateString: string;
    base: string;
    type: 'ordinary' | 'daily';
    rates: HiveEngineRates;
    change24h: HiveEngineChange24h;
    createdAt: Date;
    updatedAt: Date;
} 