import { Document } from "mongoose";

export interface SupposedUpdates {
    name?: string;
    values?: string[];
    id_path?: string;
}

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
    exposedFields?: string[];
    supposed_updates?: SupposedUpdates[];
    createdAt: Date;
    updatedAt: Date;
}
