import { Document } from "mongoose";
import { STATUSES, SHOP_SETTINGS_TYPE, BILLING_TYPE, SUPPORTED_CURRENCIES, LANGUAGES, REFERRAL_TYPES } from "../../constants/general";

export interface AppAdSense {
    code?: string;
    level?: string;
    txtFile?: string;
}

export interface AppTopUser {
    name: string;
    weight: number;
}

export interface AppTagsData {
    Ingredients: Record<string, unknown>;
    Cuisine: Record<string, unknown>;
    'Good For': Record<string, unknown>;
    Features: Record<string, unknown>;
}

export interface AppReferralTimer {
    type: keyof typeof REFERRAL_TYPES;
    duration: number;
}

export interface AppBot {
    name: string;
    postingKey: string;
    roles: string[];
}

export interface AppCommissions {
    campaigns_server_acc: string;
    campaigns_percent: number;
    index_commission_acc: string;
    index_percent: number;
    referral_commission_acc: string;
}

export interface AppMapPoints {
    topPoint: [number, number]; // [longitude, latitude]
    bottomPoint: [number, number]; // [longitude, latitude]
    center: [number, number]; // [longitude, latitude]
    zoom: number;
}

export interface AppHeader {
    name?: string;
    message?: string;
    startup?: string;
}

export interface AppColors {
    background?: string;
    font?: string;
    hover?: string;
    header?: string;
    button?: string;
    border?: string;
    focus?: string;
    links?: string;
    mapMarkerBody?: string;
    mapMarkerText?: string;
}

export interface AppCity {
    city?: string;
    route?: string;
}

export interface AppShopSettings {
    type: keyof typeof SHOP_SETTINGS_TYPE;
    value?: string;
}

export interface AppConfiguration {
    configurationFields?: string[];
    desktopLogo?: string;
    mobileLogo?: string;
    mainBanner?: string;
    defaultListImage?: string;
    aboutObject?: string;
    desktopMap?: AppMapPoints;
    mobileMap?: AppMapPoints;
    availableCities?: AppCity[];
    shopSettings?: AppShopSettings;
    colors?: AppColors;
    header?: AppHeader;
    defaultHashtag?: string;
    tabsFilter?: string[];
    tabsSorting?: string[];
    advancedAI?: boolean;
}

export interface App extends Document {
    name: string;
    owner: string;
    googleAnalyticsTag?: string | null;
    googleGSCTag?: string | null;
    googleEventSnippet?: string | null;
    googleAdsConfig?: string | null;
    beneficiary: {
        account: string;
        percent: number;
    };
    configuration: AppConfiguration;
    host: string;
    mainPage?: string;
    parent?: string | null;
    admins: string[];
    authority: string[];
    moderators: string[];
    supported_object_types: string[];
    object_filters: Record<string, unknown>;
    black_list_users: string[];
    blacklist_apps: string[];
    supported_hashtags: string[];
    canBeExtended: boolean;
    inherited: boolean;
    status: keyof typeof STATUSES;
    activatedAt: Date | null;
    deactivatedAt: Date | null;
    supported_objects: string[];
    mapCoordinates: AppMapPoints[];
    top_users: AppTopUser[];
    daily_chosen_post?: {
        author: string;
        permlink: string;
        title: string;
    };
    weekly_chosen_post?: {
        author: string;
        permlink: string;
        title: string;
    };
    service_bots: AppBot[];
    app_commissions?: AppCommissions;
    referralsData: AppReferralTimer[];
    tagsData?: AppTagsData;
    currency: keyof typeof SUPPORTED_CURRENCIES;
    language: typeof LANGUAGES[number];
    prefetches?: string[];
    objectControl: boolean;
    useForCanonical: boolean;
    disableOwnerAuthority: boolean;
    adSense: AppAdSense;
    billingType: keyof typeof BILLING_TYPE;
    trusted: string[];
    trustedAll: string[];
    createdAt: Date;
    updatedAt: Date;
}
