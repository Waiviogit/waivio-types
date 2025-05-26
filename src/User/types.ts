import { Document } from "mongoose";
import { LANGUAGES, REFERRAL_STATUSES, REFERRAL_TYPES, SUPPORTED_CURRENCIES } from "../constants/general";

export interface UserShop {
    hideLinkedObjects?: boolean;
}

export interface UserReferral {
    agent: string;
    startedAt?: Date;
    endedAt?: Date;
    type: keyof typeof REFERRAL_TYPES;
}

export interface UserNotifications {
    activationCampaign?: boolean;
    deactivationCampaign?: boolean;
    follow?: boolean;
    fillOrder?: boolean;
    mention?: boolean;
    minimalTransfer?: number;
    reblog?: boolean;
    reply?: boolean;
    statusChange?: boolean;
    transfer?: boolean;
    powerUp?: boolean;
    witness_vote?: boolean;
    myPost?: boolean;
    myComment?: boolean;
    myLike?: boolean;
    like?: boolean;
    downvote?: boolean;
    claimReward?: boolean;
    objectUpdates?: boolean;
    objectGroupId?: boolean;
    threadAuthorFollower?: boolean;
}

export interface UserDraft {
    title: string;
    draftId: string;
    author: string;
    beneficiary: boolean;
    upvote?: boolean;
    isUpdating?: boolean;
    body: string;
    originalBody: string;
    jsonMetadata: Record<string, unknown>;
    lastUpdated: number;
    parentAuthor?: string;
    parentPermlink?: string;
    permlink?: string;
    reward?: string;
    secondaryItem?: string;
    campaignType?: string;
}

export interface UserSettings {
    exitPageSetting: boolean;
    locale: keyof typeof LANGUAGES | 'auto';
    postLocales: Array<keyof typeof LANGUAGES>;
    nightmode: boolean;
    rewardSetting: 'SP' | '50' | 'STEEM';
    rewriteLinks: boolean;
    showNSFWPosts: boolean;
    upvoteSetting: boolean;
    hiveBeneficiaryAccount: string;
    votePercent: number;
    votingPower: boolean;
    userNotifications: UserNotifications;
    currency: keyof typeof SUPPORTED_CURRENCIES;
    hideFavoriteObjects?: boolean;
    hideRecipeObjects?: boolean;
    shop?: UserShop;
}

export interface UserMetadata {
    notifications_last_timestamp?: number;
    settings?: {
        exitPageSetting?: boolean;
        locale?: typeof LANGUAGES[number];
        postLocales?: typeof LANGUAGES[number][];
        nightmode?: boolean;
        rewardSetting?: 'SP' | '50' | 'STEEM';
        rewriteLinks?: boolean;
        showNSFWPosts?: boolean;
        upvoteSetting?: boolean;
        hiveBeneficiaryAccount?: string;
        votePercent?: number;
        votingPower?: boolean;
        userNotifications?: UserNotifications;
        currency?: keyof typeof SUPPORTED_CURRENCIES;
        hideFavoriteObjects?: boolean;
        hideRecipeObjects?: boolean;
        shop?: UserShop;
    };
    bookmarks?: string[];
    drafts?: Array<{
        title?: string;
        draftId?: string;
        author?: string;
        beneficiary?: boolean;
        upvote?: boolean;
        isUpdating?: boolean;
        body?: string;
        originalBody?: string;
        jsonMetadata?: Record<string, unknown>;
        lastUpdated?: number;
        parentAuthor?: string;
        parentPermlink?: string;
        permlink?: string;
        reward?: string;
        secondaryItem?: string;
        campaignType?: string;
    }>;
    new_user?: boolean;
}

export interface UserAuth {
    sessions?: Record<string, unknown>[];
    _id?: string;
    id?: string;
    provider?: string;
}

export interface User extends Document {
    name: string;
    alias?: string;
    profile_image?: string;
    objects_follow: string[];
    users_follow: string[];
    json_metadata: string;
    posting_json_metadata: string;
    wobjects_weight: number;
    count_posts: number;
    last_posts_count: number;
    last_posts_counts_by_hours: number[];
    user_metadata: UserMetadata;
    privateEmail?: string | null;
    auth?: UserAuth | null;
    followers_count: number;
    users_following_count: number;
    last_root_post?: string | null;
    stage_version: number;
    referralStatus: typeof REFERRAL_STATUSES[keyof typeof REFERRAL_STATUSES];
    referral: UserReferral[];
    lastActivity?: Date;
    canonical?: string;
    whiteListTimestamp?: number;
    spamDetected?: boolean;
    blocked?: boolean;
    createdAt: Date;
    updatedAt: Date;
}
