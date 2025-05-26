import { Document } from "mongoose";
import { RESERVATION_STATUSES, CAMPAIGN_STATUSES, CAMPAIGN_TYPES } from "../constants/campaignsData";

export type ReservationStatus = typeof RESERVATION_STATUSES[keyof typeof RESERVATION_STATUSES];
export type CampaignStatus = typeof CAMPAIGN_STATUSES[keyof typeof CAMPAIGN_STATUSES];
export type CampaignType = typeof CAMPAIGN_TYPES[keyof typeof CAMPAIGN_TYPES];

export interface CampaignUser {
    name: string;
    objectPermlink: string;
    reservationPermlink: string;
    reviewPermlink?: string;
    referralServer?: string;
    unReservationPermlink?: string;
    rootName?: string;
    reduceRewardPermlink?: string;
    riseRewardPermlink?: string;
    rewardRaisedBy?: number;
    rewardReducedBy?: number;
    rejectionPermlink?: string;
    status: ReservationStatus;
    fraudSuspicion?: boolean;
    fraudCodes?: string[];
    commentsCount?: number;
    completedAt?: Date;
    createdAt: Date;
    updatedAt: Date;
}

export interface ReservationTimetable {
    monday: boolean;
    tuesday: boolean;
    wednesday: boolean;
    thursday: boolean;
    friday: boolean;
    saturday: boolean;
    sunday: boolean;
}

export interface CampaignV2 extends Document {
    guideName: string;
    name: string;
    description?: string;
    type: CampaignType;
    status: CampaignStatus;
    note?: string;
    compensationAccount?: string;
    campaignServer?: string;
    budget: number;
    reward: number;
    rewardInUSD: number;
    countReservationDays: number;
    agreementObjects?: string[];
    usersLegalNotice?: string;
    commissionAgreement: number;
    requirements: {
        minPhotos: number;
        receiptPhoto: boolean;
    };
    userRequirements: {
        minPosts: number;
        minFollowers: number;
        minExpertise: number;
    };
    requiredObject: string;
    objects: string[];
    users: CampaignUser[];
    blacklistUsers: string[];
    whitelistUsers: string[];
    activationPermlink?: string;
    deactivationPermlink?: string;
    matchBots: string[];
    frequencyAssign: number;
    reservationTimetable: ReservationTimetable;
    app?: string;
    expiredAt?: Date;
    stoppedAt?: Date;
    currency?: string;
    payoutToken?: string;
    payoutTokenRateUSD?: number;
    createdAt: Date;
    updatedAt: Date;
} 