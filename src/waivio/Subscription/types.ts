import { Document } from "mongoose";
import { User } from "../User/types";

export interface Subscription extends Document {
    follower: string;
    following: string;
    bell?: boolean;
    followerPath?: User;
    followingPath?: User;
} 