import { Document } from "mongoose";

export interface GeoIp extends Document {
    ip: string;
    longitude: number;
    latitude: number;
    countryCode?: string;
} 