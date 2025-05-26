import { Document } from "mongoose";

export interface UserDraft extends Document {
    title?: string;
    draftId: string;
    author: string;
    beneficiary: boolean;
    upvote?: boolean;
    isUpdating?: boolean;
    body?: string;
    originalBody?: string;
    jsonMetadata?: Record<string, any>;
    lastUpdated?: number;
    parentAuthor?: string;
    parentPermlink?: string;
    permlink?: string;
    reward?: string;
    campaignType?: string;
    secondaryItem?: string;
    createdAt: Date;
    updatedAt: Date;
} 