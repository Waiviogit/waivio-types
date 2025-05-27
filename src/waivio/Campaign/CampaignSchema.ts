import mongoose from "mongoose";
import { Campaign, CampaignUser, CampaignPayment } from "./types";
import { CAMPAIGN_STATUSES, CAMPAIGN_TYPES, RESERVATION_STATUSES } from "../../constants/general";

const userSchema = new mongoose.Schema<CampaignUser>({
    name: { type: String, required: true },
    object_permlink: { type: String, required: true },
    permlink: { type: String, required: true, index: true },
    referral_server: { type: String },
    unreservation_permlink: { type: String },
    status: {
        type: String,
        enum: Object.values(RESERVATION_STATUSES),
        required: true,
        default: RESERVATION_STATUSES.ASSIGNED,
    },
    completedAt: { type: Date },
}, {
    timestamps: true,
});

const paymentSchema = new mongoose.Schema<CampaignPayment>({
    userName: { type: String, required: true },
    objectPermlink: { type: String, required: true },
    paymentPermlink: { type: String },
    postTitle: { type: String, required: true },
    postPermlink: { type: String, required: true },
    app: { type: String },
    status: { type: String, enum: ['active', 'rejected'], default: 'active' },
}, {
    timestamps: true,
});

const CampaignSchema = new mongoose.Schema<Campaign>({
    guideName: { type: String, required: true, index: true },
    name: {
        type: String,
        required: true,
        maxlength: 256,
        index: true,
    },
    description: { type: String, maxlength: 512 },
    type: { type: String, enum: Object.values(CAMPAIGN_TYPES), required: true },
    status: { type: String, enum: Object.values(CAMPAIGN_STATUSES), default: CAMPAIGN_STATUSES.PENDING },
    note: { type: String, maxlength: 256 },
    compensationAccount: { type: String },
    budget: {
        type: Number,
        required: true,
        min: 0.001,
        max: 10000,
    },
    reward: {
        type: Number,
        required: true,
        min: 0.001,
        max: 500,
    },
    count_reservation_days: { type: Number, default: 1 },
    agreementObjects: { type: [String] },
    usersLegalNotice: { type: String, maxlength: 2000 },
    commissionAgreement: {
        type: Number,
        min: 0.05,
        max: 1,
        default: 0.05,
    },
    requirements: {
        minPhotos: { type: Number, required: true },
        receiptPhoto: { type: Boolean, default: false },
    },
    userRequirements: {
        minPosts: { type: Number, default: 0 },
        minFollowers: { type: Number, default: 0 },
        minExpertise: { type: Number, default: 0 },
    },
    map: {
        type: {
            type: String,
            enum: ['Point'],
        },
        coordinates: {
            type: [Number], // First element - longitude(-180..180), second element - latitude(-90..90)
        },
    },
    requiredObject: { type: String, required: true },
    objects: { type: [String], validate: /\S+/, required: true },
    users: [userSchema],
    blacklist_users: [String],
    whitelist_users: [String],
    activation_permlink: { type: String, index: true },
    deactivation_permlink: { type: String },
    match_bots: [{ type: String }],
    max_assign_count: {
        type: Number,
        min: 1,
        max: 10,
        default: 1,
    },
    frequency_assign: { type: Number, max: 300, default: 0 },
    payments: [paymentSchema],
    reservation_timetable: {
        monday: { type: Boolean, default: true },
        tuesday: { type: Boolean, default: true },
        wednesday: { type: Boolean, default: true },
        thursday: { type: Boolean, default: true },
        friday: { type: Boolean, default: true },
        saturday: { type: Boolean, default: true },
        sunday: { type: Boolean, default: true },
    },
    app: { type: String, default: null },
    expired_at: { type: Date },
    stoppedAt: { type: Date },
}, {
    timestamps: true,
});

CampaignSchema.index({ map: '2dsphere' });
CampaignSchema.index({ createdAt: -1 });
CampaignSchema.index({ reward: -1 });

CampaignSchema.virtual('canAssign').get(function() {
    const countAssigns = parseInt(String(this.budget / this.reward), 10);
    const filterUsers = this.users.filter((user) =>
        ['assigned', 'completed'].includes(user.status) &&
        new Date(user.createdAt).getMonth() === new Date().getMonth()
    );
    return countAssigns > filterUsers.length;
});

CampaignSchema.pre('save', function(next) {
    if (this.reward > this.budget) {
        const error = new Error('Reward more than budget');
        return next(error);
    }
    if (this.match_bots && this.match_bots.length > 5) {
        const error = new Error('Match bots limited');
        return next(error);
    }
    if (this.map && (!this.map.type || !this.map.coordinates || this.map.coordinates.some(coord => coord === undefined || coord === null))) {
        this.map = undefined;
    }
    next();
});

export default CampaignSchema;
