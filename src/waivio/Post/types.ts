import { Document } from "mongoose";
import { LANGUAGES } from "../../constants/general";

export interface PostActiveVote {
    voter: string;
    weight: number;
    percent: number;
    rshares: number;
    rsharesWAIV: number;
}

export interface PostWobject {
    author_permlink: string;
    percent: number;
    tagged: string;
    object_type: string;
}

export interface PostReblog {
    author: string;
    permlink: string;
}

export interface Post extends Document {
    id?: number;
    author: string;
    permlink: string;
    parent_author: string;
    parent_permlink: string;
    root_author?: string;
    title: string;
    body: string;
    json_metadata: string;
    app?: string;
    depth: number;
    total_vote_weight: number;
    active_votes: PostActiveVote[];
    wobjects: PostWobject[];
    language: typeof LANGUAGES[number];
    author_weight?: number;
    reblog_to?: PostReblog;
    reblogged_users: string[];
    blocked_for_apps: string[];
    net_rshares?: number;
    net_rshares_WAIV?: number;
    total_payout_WAIV?: number;
    total_rewards_WAIV?: number;
    pending_payout_value?: string;
    links: string[];
    mentions: string[];
    post_id?: number;
    fullObjects?: unknown[];
    createdAt: Date;
    updatedAt: Date;
}
