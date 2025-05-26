import mongoose from "mongoose";
import { LANGUAGES, REFERRAL_STATUSES, REFERRAL_TYPES, SUPPORTED_CURRENCIES } from "../constants/general";
import { User, UserAuth, UserReferral, UserShop, UserMetadata, UserNotifications } from "./types";

const UserShopSchema = new mongoose.Schema<UserShop>({
    hideLinkedObjects: { type: Boolean },
}, { _id: false });

const UserReferralsSchema = new mongoose.Schema<UserReferral>({
    agent: { type: String, index: true },
    startedAt: { type: Date },
    endedAt: { type: Date },
    type: { type: String, enum: Object.keys(REFERRAL_TYPES) },
}, { _id: false });

const UserNotificationsSchema = new mongoose.Schema<UserNotifications>({
    activationCampaign: { type: Boolean, default: true },
    deactivationCampaign: { type: Boolean, default: true },
    follow: { type: Boolean, default: true },
    fillOrder: { type: Boolean, default: true },
    mention: { type: Boolean, default: true },
    minimalTransfer: { type: Number, default: 0 },
    reblog: { type: Boolean, default: true },
    reply: { type: Boolean, default: true },
    statusChange: { type: Boolean, default: true },
    transfer: { type: Boolean, default: true },
    powerUp: { type: Boolean, default: true },
    witness_vote: { type: Boolean, default: true },
    myPost: { type: Boolean, default: false },
    myComment: { type: Boolean, default: false },
    myLike: { type: Boolean, default: false },
    like: { type: Boolean, default: true },
    downvote: { type: Boolean, default: false },
    claimReward: { type: Boolean, default: false },
    objectUpdates: { type: Boolean, default: false },
    objectGroupId: { type: Boolean, default: false },
    threadAuthorFollower: { type: Boolean, default: false },
}, { _id: false });

const UserMetadataSchema = new mongoose.Schema<UserMetadata>({
    notifications_last_timestamp: { type: Number, default: 0 },
    settings: {
        exitPageSetting: { type: Boolean, default: false },
        locale: { type: String, enum: LANGUAGES, default: 'auto' },
        postLocales: { type: [{ type: String, enum: LANGUAGES }], default: [] },
        nightmode: { type: Boolean, default: false },
        rewardSetting: { type: String, enum: ['SP', '50', 'STEEM'], default: '50' },
        rewriteLinks: { type: Boolean, default: false },
        showNSFWPosts: { type: Boolean, default: false },
        upvoteSetting: { type: Boolean, default: false },
        hiveBeneficiaryAccount: { type: String, default: '' },
        votePercent: { type: Number, min: 1, max: 10000, default: 10000 },
        votingPower: { type: Boolean, default: true },
        userNotifications: { type: UserNotificationsSchema, default: () => ({}) },
        currency: { type: String, enum: Object.keys(SUPPORTED_CURRENCIES), default: SUPPORTED_CURRENCIES.USD },
        hideFavoriteObjects: { type: Boolean },
        hideRecipeObjects: { type: Boolean },
        shop: { type: UserShopSchema },
    },
    bookmarks: { type: [String], default: [] },
    drafts: {
        type: [{
            title: { type: String },
            draftId: { type: String },
            author: { type: String },
            beneficiary: { type: Boolean, default: true },
            upvote: { type: Boolean },
            isUpdating: { type: Boolean },
            body: { type: String },
            originalBody: { type: String },
            jsonMetadata: { type: Object },
            lastUpdated: { type: Number },
            parentAuthor: { type: String },
            parentPermlink: { type: String },
            permlink: { type: String },
            reward: { type: String },
            secondaryItem: { type: String },
            campaignType: { type: String },
        }],
        default: [],
    },
    new_user: { type: Boolean, default: true },
}, { _id: false });

const UserAuthSchema = new mongoose.Schema<UserAuth>({
    sessions: { type: [Object], select: false },
    _id: { type: String, select: false },
    id: { type: String, select: false },
    provider: { type: String },
}, { _id: false });

const UserSchema = new mongoose.Schema<User>({
    name: { type: String, index: true, unique: true },
    alias: { type: String },
    profile_image: { type: String },
    objects_follow: { type: [String], default: [] },
    users_follow: { type: [String], default: [] },
    json_metadata: { type: String, default: '' },
    posting_json_metadata: { type: String, default: '' },
    wobjects_weight: { type: Number, default: 0 },
    count_posts: { type: Number, default: 0, index: true },
    last_posts_count: { type: Number, default: 0 },
    last_posts_counts_by_hours: { type: [Number], default: [] },
    user_metadata: { type: UserMetadataSchema, default: () => ({}), select: false },
    privateEmail: { type: String, default: null, select: false },
    auth: { type: UserAuthSchema, default: null },
    followers_count: { type: Number, default: 0 },
    users_following_count: { type: Number, default: 0 },
    last_root_post: { type: String, default: null },
    stage_version: { type: Number, default: 0, required: true },
    referralStatus: {
        type: String,
        enum: Object.values(REFERRAL_STATUSES),
        default: REFERRAL_STATUSES.NOT_ACTIVATED,
    },
    referral: { type: [UserReferralsSchema], default: [] },
    lastActivity: { type: Date, index: true },
    canonical: { type: String },
    whiteListTimestamp: { type: Number },
    spamDetected: { type: Boolean },
    blocked: { type: Boolean },
}, {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
});

UserSchema.index({ wobjects_weight: -1 });
UserSchema.index({ objects_follow: -1 });

export default UserSchema;


