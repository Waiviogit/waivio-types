import { Document } from "mongoose";
import {CAMPAIGN_STATUSES, CAMPAIGN_TYPES, RESERVATION_STATUSES} from "../../constants/general";


export type ReservationStatus = typeof RESERVATION_STATUSES[keyof typeof RESERVATION_STATUSES];
export type CampaignStatus = typeof CAMPAIGN_STATUSES[keyof typeof CAMPAIGN_STATUSES];
export type CampaignType = typeof CAMPAIGN_TYPES[keyof typeof CAMPAIGN_TYPES];

export interface CampaignV2User {
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

export interface CampaignV2ReservationTimetable {
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
    users: CampaignV2User[];
    blacklistUsers: string[];
    whitelistUsers: string[];
    activationPermlink?: string;
    deactivationPermlink?: string;
    matchBots: string[];
    frequencyAssign: number;
    reservationTimetable: CampaignV2ReservationTimetable;
    app?: string;
    expiredAt?: Date;
    stoppedAt?: Date;
    currency?: string;
    payoutToken?: string;
    payoutTokenRateUSD?: number;
    createdAt: Date;
    updatedAt: Date;
}
