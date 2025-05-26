import { Document } from "mongoose";

export interface RelatedAlbum extends Document {
    wobjAuthorPermlink: string;
    postAuthorPermlink: string;
    images: string[];
} 