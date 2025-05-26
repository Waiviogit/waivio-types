import mongoose from "mongoose";
import { LANGUAGES } from "../../constants/general";
import { Post, PostActiveVote, PostWobject, PostReblog } from "./types";

const ActiveVoteSchema = new mongoose.Schema<PostActiveVote>({
    voter: { type: String },
    weight: { type: Number },
    percent: { type: Number },
    rshares: { type: Number },
    rsharesWAIV: { type: Number },
}, { _id: false });

const WobjectSchema = new mongoose.Schema<PostWobject>({
    author_permlink: { type: String },
    percent: { type: Number },
    tagged: { type: String },
    object_type: { type: String, index: true },
}, { _id: false });

const ReblogSchema = new mongoose.Schema<PostReblog>({
    author: { type: String },
    permlink: { type: String },
}, { _id: false });

const PostSchema = new mongoose.Schema<Post>({
    id: { type: Number },
    author: { type: String },
    permlink: { type: String },
    parent_author: { type: String, default: '' },
    parent_permlink: { type: String, required: true },
    root_author: { type: String },
    title: { type: String, required: true, default: '' },
    body: { type: String, required: true, default: '' },
    json_metadata: { type: String, required: true, default: '' },
    app: { type: String },
    depth: { type: Number, default: 0 },
    total_vote_weight: { type: Number, default: 0 },
    active_votes: [ActiveVoteSchema],
    wobjects: [WobjectSchema],
    language: { type: String, enum: LANGUAGES, default: 'en-US' },
    author_weight: { type: Number },
    reblog_to: ReblogSchema,
    reblogged_users: { type: [String], default: [] },
    blocked_for_apps: { type: [String], default: [] },
    net_rshares: { type: Number },
    net_rshares_WAIV: { type: Number },
    total_payout_WAIV: { type: Number },
    total_rewards_WAIV: { type: Number },
    pending_payout_value: { type: String },
    links: { type: [String], index: true },
    mentions: { type: [String], index: true },
}, {
    toObject: { virtuals: true },
    toJSON: { virtuals: true },
    timestamps: true,
});

PostSchema.virtual('post_id').get(function() {
    return this.id;
});

PostSchema.virtual('fullObjects', {
    ref: 'wobject',
    localField: 'wobjects.author_permlink',
    foreignField: 'author_permlink',
    justOne: false,
});

PostSchema.index({ author: 1, permlink: 1 }, { unique: true });
PostSchema.index({ root_author: 1, permlink: 1 }, { unique: true });
PostSchema.index({ author: 1, language: 1 });
PostSchema.index({ 'wobjects.author_permlink': 1, _id: 1 });
PostSchema.index({ _id: 1, author_weight: 1, net_rshares: -1 });
PostSchema.index({ net_rshares: -1 });

export default PostSchema;
