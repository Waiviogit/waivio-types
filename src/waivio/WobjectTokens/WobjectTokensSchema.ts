import mongoose from "mongoose";
import { WobjectTokens } from "./types";

const WobjectTokensSchema = new mongoose.Schema<WobjectTokens>({
    author_permlink: { 
        type: String, 
        index: true, 
        unique: true, 
        required: true 
    },
}, { versionKey: false });

export default WobjectTokensSchema; 