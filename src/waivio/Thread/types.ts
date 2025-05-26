import { Document } from "mongoose";

export interface ThreadStats {
    total_votes: number;
}

export interface Thread extends Document {
    author: string;
    permlink: string;
    parent_author: string;
    parent_permlink: string;
    body: string;
    created?: string;
    replies: string[];
    children: number;
    depth: number;
    stats?: ThreadStats;
    author_reputation?: number;
    deleted: boolean;
    tickers?: string[];
    mentions: string[];
    hashtags: string[];
    links: string[];
    images: string[];
    threadstorm: boolean;
    net_rshares?: number;
    createdAt: Date;
    updatedAt: Date;
} 