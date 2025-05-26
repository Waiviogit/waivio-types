import { Document } from "mongoose";

export interface WobjectSubscription extends Document {
    follower: string;
    following: string;
    bell?: boolean;
    followerPath?: Document;
    followingPath?: Document;
} 