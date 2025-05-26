import mongoose from "mongoose";
import { RelatedAlbum } from "./types";

const RelatedAlbumSchema = new mongoose.Schema<RelatedAlbum>({
    wobjAuthorPermlink: { type: String, required: true },
    postAuthorPermlink: { type: String, required: true },
    images: { type: [String], default: [] },
}, { versionKey: false });

RelatedAlbumSchema.index({ wobjAuthorPermlink: 1, postAuthorPermlink: 1 }, { unique: true });

export default RelatedAlbumSchema; 