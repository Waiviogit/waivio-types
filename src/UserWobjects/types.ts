import { Document } from "mongoose";
import { User } from "../User/types";

export interface UserWobjects extends Document {
    user_name: string;
    author_permlink: string;
    weight: number;
    full_user?: User;
} 