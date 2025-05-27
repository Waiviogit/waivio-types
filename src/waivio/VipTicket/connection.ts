import { COLLECTION_NAME, DB_NAME, MODEL_NAME, SCHEMA_NAME } from "../../constants/models";

export const VipTicketConnection = {
    modelName: MODEL_NAME.VIP_TICKET,   
    collectionName: COLLECTION_NAME.VIP_TICKET,
    schemaName: SCHEMA_NAME.VIP_TICKET,
    databaseName: DB_NAME.WAIVIO,
} as const; 