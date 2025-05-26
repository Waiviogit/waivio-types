import { Document } from "mongoose";

export interface GuestMana extends Document {
    account: string;
    mana: number;
    lastManaUpdate: number;
    importAuthorization: boolean;
} 