import { Document } from "mongoose";

export interface WobjectTokens extends Document {
    author_permlink: string;
} 