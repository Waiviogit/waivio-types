import { Document } from "mongoose";

export interface Prefetch extends Document {
    name: string;
    tag: string;
    type: string;
    category: string;
    route?: string;
    image?: string;
} 