import mongoose from "mongoose";
import { RESERVATION_STATUSES, CAMPAIGN_STATUSES, CAMPAIGN_TYPES } from "../constants/campaignsData";
import { CampaignV2, CampaignUser, ReservationTimetable } from "./types";

const CampaignUserSchema = new mongoose.Schema<CampaignUser>({
    name: { type: String, required: true },
    objectPermlink: { type: String, required: true },
    reservationPermlink: { type: String, required: true, index: true },
    reviewPermlink: { type: String },
    referralServer: { type: String },
    unReservationPermlink: { type: String },
    rootName: { type: String },
    reduceRewardPermlink: { type: String },
    riseRewardPermlink: { type: String },
    rewardRaisedBy: { type: Number },
    rewardReducedBy: { type: Number },
    rejectionPermlink: { type: String },
    status: {
        type: String,
        enum: Object.values(RESERVATION_STATUSES),
        required: true,
        default: 'assigned',
    },
    fraudSuspicion: { type: Boolean },
    fraudCodes: { type: [String] },
    commentsCount: { type: Number },
    completedAt: { type: Date },
}, {
    timestamps: true,
});

const ReservationTimetableSchema = new mongoose.Schema<ReservationTimetable>({
    monday: { type: Boolean, default: true },
    tuesday: { type: Boolean, default: true },
    wednesday: { type: Boolean, default: true },
    thursday: { type: Boolean, default: true },
    friday: { type: Boolean, default: true },
    saturday: { type: Boolean, default: true },
    sunday: { type: Boolean, default: true },
}, { _id: false });

const CampaignV2Schema = new mongoose.Schema<CampaignV2>({
    guideName: { type: String, required: true, index: true },
    name: { type: String, required: true, maxlength: 256, index: true },
    description: { type: String, maxlength: 512 },
    type: { type: String, enum: Object.values(CAMPAIGN_TYPES), required: true },
    status: { type: String, enum: Object.values(CAMPAIGN_STATUSES), default: 'pending' },
    note: { type: String, maxlength: 256 },
    compensationAccount: { type: String },
    campaignServer: { type: String },
    budget: { type: Number, required: true },
    reward: { type: Number, required: true },
    rewardInUSD: { type: Number, required: true },
    countReservationDays: { type: Number, default: 1 },
    agreementObjects: { type: [String] },
    usersLegalNotice: { type: String, maxlength: 2000 },
    commissionAgreement: { type: Number, min: 0.05, max: 1, default: 0.05 },
    requirements: {
        minPhotos: { type: Number, required: true },
        receiptPhoto: { type: Boolean, default: false },
    },
    userRequirements: {
        minPosts: { type: Number, default: 0 },
        minFollowers: { type: Number, default: 0 },
        minExpertise: { type: Number, default: 0 },
    },
    requiredObject: { type: String, required: true },
    objects: { type: [String], validate: /\S+/, required: true },
    users: [CampaignUserSchema],
    blacklistUsers: [String],
    whitelistUsers: [String],
    activationPermlink: { type: String, index: true },
    deactivationPermlink: { type: String },
    matchBots: [{ type: String }],
    frequencyAssign: { type: Number, max: 300, default: 0 },
    reservationTimetable: { type: ReservationTimetableSchema },
    app: { type: String, default: null },
    expiredAt: { type: Date },
    stoppedAt: { type: Date },
    currency: { type: String },
    payoutToken: { type: String },
    payoutTokenRateUSD: { type: Number },
}, {
    timestamps: true,
});

CampaignV2Schema.index({ createdAt: -1 });
CampaignV2Schema.index({ reward: -1 });
CampaignV2Schema.index({ rewardInUSD: -1 });
CampaignV2Schema.index({ userName: 1, postPermlink: 1 });

export default CampaignV2Schema; 