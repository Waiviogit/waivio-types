import mongoose from "mongoose";
import { UserWobjects } from "./types";
import {MODEL_NAME} from "../../constants/models";

const UserWobjectsSchema = new mongoose.Schema<UserWobjects>({
    user_name: { type: String },
    author_permlink: { type: String },
    weight: { type: Number },
}, { timestamps: false });

UserWobjectsSchema.index({ user_name: 1 });
UserWobjectsSchema.index({ weight: -1 });
UserWobjectsSchema.index({ author_permlink: 1, user_name: 1 }, { unique: true });
UserWobjectsSchema.index({ author_permlink: 1, _id: 1 });

UserWobjectsSchema.virtual('full_user', {
    ref: MODEL_NAME.USER,
    localField: 'user_name',
    foreignField: 'name',
    justOne: true,
});

export default UserWobjectsSchema;
