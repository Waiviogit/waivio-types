import { Document } from "mongoose";

export interface CommentActiveVote {
    voter: string;
    percent: number;
}

export interface CommentGuestInfo {
    userId: string;
    social: string;
}

export interface Comment extends Document {
    author: string;
    permlink: string;
    root_author: string;
    root_permlink: string;
    parent_author: string;
    parent_permlink: string;
    active_votes: CommentActiveVote[];
    guestInfo: CommentGuestInfo | null;
} 