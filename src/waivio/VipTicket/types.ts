export interface VipTicket {
    userName: string;
    ticket: string;
    valid: boolean;
    note?: string;
    createdAt?: Date;
    updatedAt?: Date;
} 