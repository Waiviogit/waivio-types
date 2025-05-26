import { Document } from "mongoose";
import { COMMENT_REF_TYPES } from "../../constants/general";

export type CommentRefType = typeof COMMENT_REF_TYPES[keyof typeof COMMENT_REF_TYPES];

export interface CommentRef extends Document {
    comment_path: string;
    type: CommentRefType;
    wobjects?: string;
    name?: string;
    root_wobj?: string;
}
