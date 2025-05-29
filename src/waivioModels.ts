import { COLLECTION_NAME, MODEL_NAME } from "./constants/models";
import { Schema } from 'mongoose';
import AppSchema from "./waivio/App/AppSchema";
import AppAffiliateSchema from "./waivio/AppAffiliate/AppAffiliateSchema";
import BlacklistSchema from "./waivio/Blacklist/BlacklistSchema";
import BotUpvoteSchema from "./waivio/BotUpvote/BotUpvoteSchema";
import CampaignSchema from "./waivio/Campaign/CampaignSchema";
import CampaignV2Schema from "./waivio/CampaignV2/CampaignV2Schema";
import CommentSchema from "./waivio/Comment/CommentSchema";
import CommentRefSchema from "./waivio/CommentRef/CommentRefSchema";
import DelegationSchema from "./waivio/Delegation/DelegationSchema";
import DepartmentSchema from "./waivio/Department/DepartmentSchema";
import EngineAccountHistorySchema from "./waivio/EngineAccountHistory/EngineAccountHistorySchema";
import EngineAdvancedReportSchema from "./waivio/EngineAdvancedReport/EngineAdvancedReportSchema";
import EngineAdvancedReportStatusSchema from "./waivio/EngineAdvancedReportStatus/EngineAdvancedReportStatusSchema";
import GeoIpSchema from "./waivio/GeoIp/GeoIpSchema";
import GuestManaSchema from "./waivio/GuestMana/GuestManaSchema";
import GuestSpamSchema from "./waivio/GuestSpam/GuestSpamSchema";
import HiddenCommentSchema from "./waivio/HiddenComment/HiddenCommentSchema";
import HiddenPostSchema from "./waivio/HiddenPost/HiddenPostSchema";
import MutedUserSchema from "./waivio/MutedUser/MutedUserSchema";
import ObjectTypeSchema from "./waivio/ObjectType/ObjectTypeSchema";
import PageDraftSchema from "./waivio/PageDraft/PageDraftSchema";
import GuestWalletSchema from "./waivio/GuestWallet/GuestWalletSchema";
import PaymentHistorySchema from "./waivio/PaymentHistory/PaymentHistorySchema";
import PayPalPlanSchema from "./waivio/PayPalPlan/PayPalPlanSchema";
import PlacesApiAccessSchema from "./waivio/PlacesApiAccess/PlacesApiAccessSchema";
import PostSchema from "./waivio/Post/PostSchema";
import PayPalProductSchema from "./waivio/PayPalProduct/PayPalProductSchema";
import SubscriptionSchema from "./waivio/Subscription/SubscriptionSchema";
import ThreadSchema from "./waivio/Thread/ThreadSchema";
import UserSchema from "./waivio/User/UserSchema";
import UserCommentDraftSchema from "./waivio/UserCommentDraft/UserCommentDraftSchema";
import UserDraftSchema from "./waivio/UserDraft/UserDraftSchema";
import UserExpertiseSchema from "./waivio/UserExpertise/UserExpertiseSchema";
import UserRcDelegationsSchema from "./waivio/UserRcDelegations/UserRcDelegationsSchema";   
import UserShopDeselectSchema from "./waivio/UserShopDeselect/UserShopDeselectSchema";
import UserWobjectsSchema from "./waivio/UserWobjects/UserWobjectsSchema";
import VipTicketSchema from "./waivio/VipTicket/VipTicketSchema";
import WobjectSchema from "./waivio/WObject/WObjectSchema";
import WobjectSubscriptionSchema from "./waivio/WobjectSubscription/WobjectSubscriptionSchema";
import WobjectTokensSchema from "./waivio/WobjectTokens/WobjectTokensSchema";
import PayPalSubscriptionSchema from "./waivio/PayPalSubscription/PayPalSubscriptionSchema";
import PrefetchSchema from "./waivio/Prefetch/PrefetchSchema";
import RelatedAlbumSchema from "./waivio/RelatedAlbum/RelatedAlbumSchema";
import ServiceBotSchema from "./waivio/ServiceBot/ServiceBotSchema";
import SponsorsBotsUpvoteSchema from "./waivio/SponsorsBotsUpvote/SponsorsBotsUpvoteSchema";
import { ModelTuple } from "./types";

const AppModel: ModelTuple = [MODEL_NAME.APP, AppSchema, COLLECTION_NAME.APP];
const AppAffiliateModel: ModelTuple = [MODEL_NAME.APP_AFFILIATE, AppAffiliateSchema, COLLECTION_NAME.APP_AFFILIATE];
const BlockedUserModel: ModelTuple = [MODEL_NAME.BLACKLIST, BlacklistSchema, COLLECTION_NAME.BLACKLIST];
const BotUpvoteModel: ModelTuple = [MODEL_NAME.BOT_UPVOTE, BotUpvoteSchema, COLLECTION_NAME.BOT_UPVOTE];
const CampaignModel: ModelTuple = [MODEL_NAME.CAMPAIGN, CampaignSchema, COLLECTION_NAME.CAMPAIGN];
const CampaignV2Model: ModelTuple = [MODEL_NAME.CAMPAIGN_V2, CampaignV2Schema, COLLECTION_NAME.CAMPAIGN_V2];
const CommentModel: ModelTuple = [MODEL_NAME.COMMENT, CommentSchema, COLLECTION_NAME.COMMENT];
const CommentRefModel: ModelTuple = [MODEL_NAME.COMMENT_REF, CommentRefSchema, COLLECTION_NAME.COMMENT_REF];
const DelegationModel: ModelTuple = [MODEL_NAME.DELEGATION, DelegationSchema, COLLECTION_NAME.DELEGATION];
const DepartmentModel: ModelTuple = [MODEL_NAME.DEPARTMENT, DepartmentSchema, COLLECTION_NAME.DEPARTMENT];
const EngineAccountHistoryModel: ModelTuple = [MODEL_NAME.ENGINE_ACCOUNT_HISTORY, EngineAccountHistorySchema, COLLECTION_NAME.ENGINE_ACCOUNT_HISTORY];
const EngineAdvancedReportModel: ModelTuple = [MODEL_NAME.ENGINE_ADVANCED_REPORT, EngineAdvancedReportSchema, COLLECTION_NAME.ENGINE_ADVANCED_REPORT];
const EngineAdvancedReportStatusModel: ModelTuple = [MODEL_NAME.ENGINE_ADVANCED_REPORT_STATUS, EngineAdvancedReportStatusSchema, COLLECTION_NAME.ENGINE_ADVANCED_REPORT_STATUS];
const GeoIpModel: ModelTuple = [MODEL_NAME.GEO_IP, GeoIpSchema, COLLECTION_NAME.GEO_IP];
const GuestManaModel: ModelTuple = [MODEL_NAME.GUEST_MANA, GuestManaSchema, COLLECTION_NAME.GUEST_MANA];
const GuestSpamModel: ModelTuple = [MODEL_NAME.GUEST_SPAM, GuestSpamSchema, COLLECTION_NAME.GUEST_SPAM];
const GuestWalletModel: ModelTuple = [MODEL_NAME.GUEST_WALLET, GuestWalletSchema, COLLECTION_NAME.GUEST_WALLET];
const HiddenCommentModel: ModelTuple = [MODEL_NAME.HIDDEN_COMMENT, HiddenCommentSchema, COLLECTION_NAME.HIDDEN_COMMENT];
const HiddenPostModel: ModelTuple = [MODEL_NAME.HIDDEN_POST, HiddenPostSchema, COLLECTION_NAME.HIDDEN_POST];
const MutedUserModel: ModelTuple = [MODEL_NAME.MUTED_USER, MutedUserSchema, COLLECTION_NAME.MUTED_USER];
const ObjectTypeModel: ModelTuple = [MODEL_NAME.OBJECT_TYPE, ObjectTypeSchema, COLLECTION_NAME.OBJECT_TYPE];
const PageDraftModel: ModelTuple = [MODEL_NAME.PAGE_DRAFT, PageDraftSchema, COLLECTION_NAME.PAGE_DRAFT];
const PaymentHistoryModel: ModelTuple = [MODEL_NAME.PAYMENT_HISTORY, PaymentHistorySchema, COLLECTION_NAME.PAYMENT_HISTORY];
const PayPalPlanModel: ModelTuple = [MODEL_NAME.PAYPAL_PLAN, PayPalPlanSchema, COLLECTION_NAME.PAYPAL_PLAN];
const PayPalProductModel: ModelTuple = [MODEL_NAME.PAYPAL_PRODUCT, PayPalProductSchema, COLLECTION_NAME.PAYPAL_PRODUCT];
const PayPalSubscriptionModel: ModelTuple = [MODEL_NAME.PAYPAL_SUBSCRIPTION, PayPalSubscriptionSchema, COLLECTION_NAME.PAYPAL_SUBSCRIPTION];
const PlacesApiAccessModel: ModelTuple = [MODEL_NAME.PLACES_API_ACCESS, PlacesApiAccessSchema, COLLECTION_NAME.PLACES_API_ACCESS];
const PostModel: ModelTuple = [MODEL_NAME.POST, PostSchema, COLLECTION_NAME.POST];
const PrefetchModel: ModelTuple = [MODEL_NAME.PREFETCH, PrefetchSchema, COLLECTION_NAME.PREFETCH];
const RelatedAlbumModel: ModelTuple = [MODEL_NAME.RELATED_ALBUM, RelatedAlbumSchema, COLLECTION_NAME.RELATED_ALBUM];
const ServiceBotModel: ModelTuple = [MODEL_NAME.SERVICE_BOT, ServiceBotSchema, COLLECTION_NAME.SERVICE_BOT];
const SponsorsBotsUpvotesModel: ModelTuple = [MODEL_NAME.SPONSORS_BOTS_UPVOTES, SponsorsBotsUpvoteSchema, COLLECTION_NAME.SPONSORS_BOTS_UPVOTES];
const SubscriptionModel: ModelTuple = [MODEL_NAME.SUBSCRIPTION, SubscriptionSchema, COLLECTION_NAME.SUBSCRIPTION];
const ThreadModel: ModelTuple = [MODEL_NAME.THREAD, ThreadSchema, COLLECTION_NAME.THREAD];
const UserModel: ModelTuple = [MODEL_NAME.USER, UserSchema, COLLECTION_NAME.USER];
const UserCommentDraftModel: ModelTuple = [MODEL_NAME.USER_COMMENT_DRAFT, UserCommentDraftSchema, COLLECTION_NAME.USER_COMMENT_DRAFT];
const UserDraftModel: ModelTuple = [MODEL_NAME.USER_DRAFT, UserDraftSchema, COLLECTION_NAME.USER_DRAFT];    
const UserExpertiseModel: ModelTuple = [MODEL_NAME.USER_EXPERTISE, UserExpertiseSchema, COLLECTION_NAME.USER_EXPERTISE];
const UserRcDelegationsModel: ModelTuple = [MODEL_NAME.USER_RC_DELEGATIONS, UserRcDelegationsSchema, COLLECTION_NAME.USER_RC_DELEGATIONS];
const UserShopDeselectModel: ModelTuple = [MODEL_NAME.USER_SHOP_DESELECT, UserShopDeselectSchema, COLLECTION_NAME.USER_SHOP_DESELECT];
const UserWobjectsModel: ModelTuple = [MODEL_NAME.USER_WOBJECTS, UserWobjectsSchema, COLLECTION_NAME.USER_WOBJECTS];
const VipTicketModel: ModelTuple = [MODEL_NAME.VIP_TICKET, VipTicketSchema, COLLECTION_NAME.VIP_TICKET];
const WobjectModel: ModelTuple = [MODEL_NAME.WOBJECT, WobjectSchema, COLLECTION_NAME.WOBJECT];
const WobjectSubscriptionModel: ModelTuple = [MODEL_NAME.WOBJECT_SUBSCRIPTIONS, WobjectSubscriptionSchema, COLLECTION_NAME.WOBJECT_SUBSCRIPTIONS];
const WobjectTokensModel: ModelTuple = [MODEL_NAME.WOBJECT_TOKENS, WobjectTokensSchema, COLLECTION_NAME.WOBJECT_TOKENS];


const waivioModels = {
    App: AppModel,
    AppAffiliate: AppAffiliateModel,
    Blacklist: BlockedUserModel,
    BotUpvote: BotUpvoteModel,
    Campaign: CampaignModel,
    CampaignV2: CampaignV2Model,
    Comment: CommentModel,
    CommentRef: CommentRefModel,
    Delegation: DelegationModel,
    Department: DepartmentModel,
    EngineAccountHistory: EngineAccountHistoryModel,
    EngineAdvancedReport: EngineAdvancedReportModel,
    EngineAdvancedReportStatus: EngineAdvancedReportStatusModel,
    GeoIp: GeoIpModel,
    GuestMana: GuestManaModel,
    GuestSpam: GuestSpamModel,
    GuestWallet: GuestWalletModel,
    HiddenComment: HiddenCommentModel,
    HiddenPost: HiddenPostModel,
    MutedUser: MutedUserModel,
    ObjectType: ObjectTypeModel,
    PageDraft: PageDraftModel,
    PaymentHistory: PaymentHistoryModel,
    PayPalPlan: PayPalPlanModel,
    PayPalProduct: PayPalProductModel,
    PayPalSubscription: PayPalSubscriptionModel,
    PlacesApiAccess: PlacesApiAccessModel,
    Post: PostModel,
    Prefetch: PrefetchModel,
    RelatedAlbum: RelatedAlbumModel,
    ServiceBot: ServiceBotModel,
    SponsorsBotsUpvotes: SponsorsBotsUpvotesModel,
    Subscription: SubscriptionModel,
    Thread: ThreadModel,
    User: UserModel,
    UserCommentDraft: UserCommentDraftModel,
    UserDraft: UserDraftModel,
    UserExpertise: UserExpertiseModel,
    UserRcDelegations: UserRcDelegationsModel,
    UserShopDeselect: UserShopDeselectModel,
        UserWobjects: UserWobjectsModel,
    VipTicket: VipTicketModel,
    Wobject: WobjectModel,
    WobjectSubscription: WobjectSubscriptionModel,
    WobjectTokens: WobjectTokensModel,

}

export default waivioModels;
