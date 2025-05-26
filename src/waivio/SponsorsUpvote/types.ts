import { Document } from "mongoose";
import {BOT_UPVOTE_STATUSES} from "../../constants/general";


export type BotUpvoteStatus = typeof BOT_UPVOTE_STATUSES[keyof typeof BOT_UPVOTE_STATUSES];

export interface SponsorsUpvote extends Document {
    botName: string;
    sponsor: string;
    symbol?: string;
    author: string;
    voteWeight: number;
    permlink: string;
    reward: number;
    currentVote: number;
    amountToVote: number;
    executed: boolean;
    totalVotesWeight: number;
    requiredObject: string;
    reservationPermlink: string;
    compensationId?: string;
    status: BotUpvoteStatus;
    startedAt: Date;
    expiredAt: Date;
    createdAt: Date;
    updatedAt: Date;
}
