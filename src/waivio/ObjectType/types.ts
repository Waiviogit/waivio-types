import { Document } from "mongoose";
import { FIELDS_NAMES } from "../constants/wobjectsData";

export interface TopExpert {
    name?: string;
    weight?: number;
}

export interface ObjectType extends Document {
    name: string;
    author: string;
    permlink: string;
    top_wobjects?: string[];
    weight?: number;
    top_experts?: TopExpert[];
    exposedFields?: (keyof typeof FIELDS_NAMES)[];
    createdAt: Date;
    updatedAt: Date;
} 