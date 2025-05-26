import mongoose, { Types } from "mongoose";
import { WObject, Authority, Field, MapLocation } from "./types";

const ActiveVoteSchema = new mongoose.Schema({
    voter: { type: String },
    weight: { type: Number },
    percent: { type: Number },
    rshares_weight: { type: Number },
}, { _id: false });

const FieldSchema = new mongoose.Schema<Field>({
    name: { type: String },
    body: { type: String },
    id: { type: String },
    tagCategory: { type: String },
    weight: { type: Number, default: 1 },
    locale: { type: String, default: 'en-US' },
    creator: { type: String },
    author: { type: String },
    permlink: { type: String },
    endDate: { type: Number },
    startDate: { type: Number },
    active_votes: { type: [ActiveVoteSchema], default: [] },
}, { _id: false });

const AuthoritySchema = new mongoose.Schema<Authority>({
    administrative: { type: [String], default: [] },
    ownership: { type: [String], default: [] },
}, { _id: false });

const MapLocationSchema = new mongoose.Schema<MapLocation>({
    type: { type: String, enum: ['Point'] },
    coordinates: { type: [Number] },
}, { _id: false });

const WObjectSchema = new mongoose.Schema<WObject>({
    app: { type: String },
    community: { type: String },
    object_type: { type: String },
    default_name: { type: String, required: true },
    is_posting_open: { type: Boolean, default: true },
    is_extending_open: { type: Boolean, default: true },
    creator: { type: String, required: true },
    author: { type: String, required: true },
    author_permlink: { type: String, index: true, unique: true, required: true },
    weight: { type: Number, default: 1 },
    count_posts: { type: Number, default: 0 },
    parent: { type: String, default: '' },
    children: { type: [String], default: [] },
    authority: { type: AuthoritySchema, default: () => ({}) },
    fields: { type: [FieldSchema], default: [] },
    map: { type: MapLocationSchema },
    latest_posts: { type: [Types.ObjectId], default: [] },
    status: { type: Object },
    last_posts_count: { type: Number, default: 0 },
    last_posts_counts_by_hours: { type: [Number], default: [] },
    activeCampaigns: { type: [Types.ObjectId], default: [] },
    activeCampaignsCount: { type: Number, default: 0 },
    search: { type: [String], default: [] },
    metaGroupId: { type: String, index: true },
}, {
    toObject: { virtuals: true },
    timestamps: true,
    strict: false,
});

WObjectSchema.index({ map: '2dsphere' });
WObjectSchema.index({ weight: -1 });
AuthoritySchema.index({ administrative: -1 });
AuthoritySchema.index({ ownership: -1 });
FieldSchema.index({ name: -1, body: -1 });
WObjectSchema.index({ activeCampaignsCount: -1, weight: -1 });
WObjectSchema.index({ object_type: -1, weight: -1 });
WObjectSchema.index({ 'status.title': -1, 'status.link': -1 });

export default WObjectSchema;
