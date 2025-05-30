import { Document, Types } from "mongoose";

export interface WObjectActiveVote {
    voter: string;
    weight: number;
    percent: number;
    rshares_weight: number;
}

export interface WObjectField {
    name?: string;
    body?: string;
    id?: string;
    tagCategory?: string;
    weight?: number;
    locale?: string;
    creator?: string;
    author?: string;
    permlink?: string;
    endDate?: number;
    startDate?: number;
    active_votes?: WObjectActiveVote[];
}

export interface WObjectAuthority {
    administrative: string[];
    ownership: string[];
}

export interface WObjectMapLocation {
    type: 'Point';
    coordinates: [number, number]; // [longitude, latitude]
}

export interface WObject extends Document {
    app?: string;
    community?: string;
    object_type?: string;
    default_name: string;
    is_posting_open: boolean;
    is_extending_open: boolean;
    creator: string;
    author: string;
    author_permlink: string;
    weight: number;
    count_posts: number;
    parent: string;
    children: string[];
    authority: WObjectAuthority;
    fields: WObjectField[];
    map?: WObjectMapLocation;
    latest_posts: Types.ObjectId[];
    status?: Record<string, string | number | boolean>;
    last_posts_count: number;
    last_posts_counts_by_hours: number[];
    activeCampaigns: Types.ObjectId[];
    activeCampaignsCount: number;
    search: string[];
    metaGroupId?: string;
    createdAt: Date;
    updatedAt: Date;
    followers?: Document[];
    users?: Document[];
}
