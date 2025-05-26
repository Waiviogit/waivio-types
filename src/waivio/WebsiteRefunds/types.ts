import { Document } from "mongoose";
import {REFUND_STATUSES, REFUND_TYPES} from "../../constants/general";


export type RefundType = typeof REFUND_TYPES[keyof typeof REFUND_TYPES];
export type RefundStatus = typeof REFUND_STATUSES[keyof typeof REFUND_STATUSES];

export interface WebsiteRefunds extends Document {
    userName: string;
    type: RefundType;
    status: RefundStatus;
    blockNum: number;
    description: string;
    rejectMessage: string;
    createdAt: Date;
    updatedAt: Date;
}
