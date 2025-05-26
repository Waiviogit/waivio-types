import { Document } from "mongoose";
import { CAMPAIGN_STATUSES, CAMPAIGN_TYPES, RESERVATION_STATUSES } from "../constants/general";

export interface CampaignUser {
    name: string;
    object_permlink: string;
    permlink: string;
    referral_server?: string;
    unreservation_permlink?: string;
    status: typeof RESERVATION_STATUSES[keyof typeof RESERVATION_STATUSES];
    completedAt?: Date;
    createdAt: Date;
    updatedAt: Date;
}

export interface CampaignPayment {
    userName: string;
    objectPermlink: string;
    paymentPermlink?: string;
    postTitle: string;
    postPermlink: string;
    app?: string;
    status: 'active' | 'rejected';
    createdAt: Date;
    updatedAt: Date;
}

export interface CampaignMap {
    type: 'Point';
    coordinates: [number, number]; // [longitude, latitude]
}

export interface CampaignReservationTimetable {
    monday: boolean;
    tuesday: boolean;
    wednesday: boolean;
    thursday: boolean;
    friday: boolean;
    saturday: boolean;
    sunday: boolean;
}

export interface Campaign extends Document {
    guideName: string;
    name: string;
    description?: string;
    type: typeof CAMPAIGN_TYPES[keyof typeof CAMPAIGN_TYPES];
    status: typeof CAMPAIGN_STATUSES[keyof typeof CAMPAIGN_STATUSES];
    note?: string;
    compensationAccount?: string;
    budget: number;
    reward: number;
    count_reservation_days: number;
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
    map?: CampaignMap;
    requiredObject: string;
    objects: string[];
    users: CampaignUser[];
    blacklist_users: string[];
    whitelist_users: string[];
    activation_permlink?: string;
    deactivation_permlink?: string;
    match_bots?: string[];
    max_assign_count: number;
    frequency_assign: number;
    payments: CampaignPayment[];
    reservation_timetable: CampaignReservationTimetable;
    app?: string;
    expired_at?: Date;
    stoppedAt?: Date;
    createdAt: Date;
    updatedAt: Date;
    canAssign: boolean;
} 