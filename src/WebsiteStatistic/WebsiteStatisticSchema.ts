import mongoose from "mongoose";
import { WebsiteStatistic } from "./types";

const WebsiteStatisticSchema = new mongoose.Schema<WebsiteStatistic>({
    host: { type: String, required: true, index: true },
    visits: { type: Number },
    buyAction: { type: Number },
    buyActionUniq: { type: Number },
    conversion: { type: Number },
    conversionUniq: { type: Number },
}, { timestamps: true });

export default WebsiteStatisticSchema; 