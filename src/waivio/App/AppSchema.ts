import mongoose from "mongoose";
import { STATUSES, SHOP_SETTINGS_TYPE, BILLING_TYPE, SUPPORTED_CURRENCIES, LANGUAGES, REFERRAL_TYPES } from "../../constants/general";
import { App, AppAdSense, AppTopUser, AppTagsData, AppReferralTimer, AppBot, AppCommissions, AppMapPoints, AppHeader, AppColors, AppCity, AppShopSettings, AppConfiguration } from "./types";

const AdSenseSchema = new mongoose.Schema<AppAdSense>({
    code: { type: String },
    level: { type: String },
    txtFile: { type: String },
});

const TopUsersSchema = new mongoose.Schema<AppTopUser>({
    name: { type: String, required: true },
    weight: { type: Number, required: true },
});

const TagsDataSchema = new mongoose.Schema<AppTagsData>({
    Ingredients: { type: Object },
    Cuisine: { type: Object },
    'Good For': { type: Object },
    Features: { type: Object },
});

const ReferralTimersSchema = new mongoose.Schema<AppReferralTimer>({
    type: { type: String, enum: Object.keys(REFERRAL_TYPES), required: true },
    duration: { type: Number, required: true },
});

const BotSchema = new mongoose.Schema<AppBot>({
    name: { type: String, required: true },
    postingKey: { type: String, required: true },
    roles: [{ type: String }],
});

const AppCommissionsSchema = new mongoose.Schema<AppCommissions>({
    campaigns_server_acc: { type: String, required: true },
    campaigns_percent: { type: Number, required: true },
    index_commission_acc: { type: String, required: true },
    index_percent: { type: Number, required: true },
    referral_commission_acc: { type: String, required: true },
});

const MapPointsSchema = new mongoose.Schema<AppMapPoints>({
    topPoint: { type: [Number], required: true },
    bottomPoint: { type: [Number], required: true },
    center: { type: [Number], required: true },
    zoom: { type: Number, required: true },
});

const AppHeaderSchema = new mongoose.Schema<AppHeader>({
    name: { type: String },
    message: { type: String },
    startup: { type: String },
});

const ColorsSchema = new mongoose.Schema<AppColors>({
    background: { type: String },
    font: { type: String },
    hover: { type: String },
    header: { type: String },
    button: { type: String },
    border: { type: String },
    focus: { type: String },
    links: { type: String },
    mapMarkerBody: { type: String },
    mapMarkerText: { type: String },
});

const CitySchema = new mongoose.Schema<AppCity>({
    city: { type: String },
    route: { type: String },
});

const ShopSettingsSchema = new mongoose.Schema<AppShopSettings>({
    type: { type: String, enum: Object.keys(SHOP_SETTINGS_TYPE), required: true },
    value: { type: String },
});

const ConfigurationSchema = new mongoose.Schema<AppConfiguration>({
    configurationFields: [{ type: String }],
    desktopLogo: { type: String },
    mobileLogo: { type: String },
    mainBanner: { type: String },
    defaultListImage: { type: String },
    aboutObject: { type: String },
    desktopMap: MapPointsSchema,
    mobileMap: MapPointsSchema,
    availableCities: [CitySchema],
    shopSettings: ShopSettingsSchema,
    colors: ColorsSchema,
    header: AppHeaderSchema,
    defaultHashtag: { type: String },
    tabsFilter: [{ type: String }],
    tabsSorting: [{ type: String }],
    advancedAI: { type: Boolean },
});

export const AppSchema = new mongoose.Schema<App>({
    name: { type: String, required: true },
    owner: { type: String, required: true },
    googleAnalyticsTag: { type: String, default: null },
    googleGSCTag: { type: String, default: null },
    googleEventSnippet: { type: String, default: null },
    googleAdsConfig: { type: String, default: null },
    beneficiary: {
        account: { type: String, required: true },
        percent: { type: Number, required: true },
    },
    configuration: { type: ConfigurationSchema, required: true },
    host: { type: String, required: true },
    mainPage: { type: String },
    parent: { type: String, default: null },
    admins: [{ type: String }],
    authority: [{ type: String }],
    moderators: [{ type: String }],
    supported_object_types: [{ type: String }],
    object_filters: { type: Object },
    black_list_users: [{ type: String }],
    blacklist_apps: [{ type: String }],
    supported_hashtags: [{ type: String }],
    canBeExtended: { type: Boolean, default: false },
    inherited: { type: Boolean, default: false },
    status: { type: String, enum: Object.keys(STATUSES), required: true },
    activatedAt: { type: Date, default: null },
    deactivatedAt: { type: Date, default: null },
    supported_objects: [{ type: String }],
    mapCoordinates: [MapPointsSchema],
    top_users: [TopUsersSchema],
    daily_chosen_post: {
        author: { type: String },
        permlink: { type: String },
        title: { type: String },
    },
    weekly_chosen_post: {
        author: { type: String },
        permlink: { type: String },
        title: { type: String },
    },
    service_bots: [BotSchema],
    app_commissions: AppCommissionsSchema,
    referralsData: [ReferralTimersSchema],
    tagsData: TagsDataSchema,
    currency: { type: String, enum: Object.keys(SUPPORTED_CURRENCIES), required: true },
    language: { type: String, enum: LANGUAGES, required: true },
    prefetches: [{ type: String }],
    objectControl: { type: Boolean, default: false },
    useForCanonical: { type: Boolean, default: false },
    disableOwnerAuthority: { type: Boolean, default: false },
    adSense: AdSenseSchema,
    billingType: { type: String, enum: Object.keys(BILLING_TYPE), required: true },
    trusted: [{ type: String }],
    trustedAll: [{ type: String }],
}, { timestamps: true });

AppSchema.pre("save", async function(next) {
    if (this.parent) {
        const parentApp = await this.model("App").findOne({ name: this.parent }) as App;
        if (parentApp) {
            this.supported_object_types = [...new Set([...this.supported_object_types, ...parentApp.supported_object_types])];
            this.object_filters = { ...parentApp.object_filters, ...this.object_filters };
        }
    }
    next();
});

export default AppSchema;
