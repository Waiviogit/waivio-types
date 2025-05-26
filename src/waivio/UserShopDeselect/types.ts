import { Document } from "mongoose";

export interface UserShopDeselect extends Document {
    userName: string;
    authorPermlink: string;
} 