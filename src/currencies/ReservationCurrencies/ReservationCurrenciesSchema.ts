import mongoose from "mongoose";
import { ReservationCurrencies } from "./types";

export const ReservationCurrenciesSchema = new mongoose.Schema<ReservationCurrencies>({
    hiveCurrency: { type: Number, required: true }
}, {
    timestamps: false
});

export default ReservationCurrenciesSchema; 