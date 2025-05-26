import { Document } from "mongoose";
import { BOT_UPVOTE_STATUSES } from "../constants/general";

export interface BotUpvote extends Document {
    botName: string;
    sponsor: string;
    author: string;
    votePercent: number;
    permlink: string;
    reward: number;
    currentVote: number;
    amountToVote: number;
    executed: boolean;
    totalVotesWeight: number;
    requiredObject: string;
    reservationPermlink: string;
    compensationId?: string;
    status: typeof BOT_UPVOTE_STATUSES[keyof typeof BOT_UPVOTE_STATUSES];
    startedAt: Date;
    expiredAt: Date;
    createdAt: Date;
    updatedAt: Date;
} 