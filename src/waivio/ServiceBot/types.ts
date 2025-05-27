import { Document } from "mongoose";

export interface ServiceBotKey {
    iv: string;
    encryptedData: string;
}

export interface ServiceBot extends Document {
    name: string;
    postingKey: ServiceBotKey;
    roles: string[];
} 