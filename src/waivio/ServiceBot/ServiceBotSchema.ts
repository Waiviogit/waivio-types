import mongoose from "mongoose";
import { ServiceBot, ServiceBotKey } from "./types";

export const ServiceBotKeySchema = new mongoose.Schema<ServiceBotKey>({
    iv: { type: String, required: true },
    encryptedData: { type: String, required: true },
}, { _id: false });

export const ServiceBotSchema = new mongoose.Schema<ServiceBot>(
    {
        name: {
            type: String, index: true, required: true, unique: true,
        },
        postingKey: { type: ServiceBotKeySchema },
        roles: { type: [String], required: true },
    },
    { timestamps: false },
);

export default ServiceBotSchema;
