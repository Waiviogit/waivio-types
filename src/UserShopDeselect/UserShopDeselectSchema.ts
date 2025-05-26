import mongoose from "mongoose";
import { UserShopDeselect } from "./types";

const UserShopDeselectSchema = new mongoose.Schema<UserShopDeselect>({
    userName: { type: String, required: true, index: true },
    authorPermlink: { type: String, required: true },
}, { versionKey: false });

UserShopDeselectSchema.index({ userName: 1, authorPermlink: 1 }, { unique: true });

export default UserShopDeselectSchema; 