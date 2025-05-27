import { COLLECTION_NAME, DB_NAME, MODEL_NAME, SCHEMA_NAME } from "../../constants/models";

export const WebsiteRefundsConnection = {
    modelName: MODEL_NAME.WEBSITE_REFUNDS,
    collectionName: COLLECTION_NAME.WEBSITE_REFUNDS,
    schemaName: SCHEMA_NAME.WEBSITE_REFUNDS,
    databaseName: DB_NAME.WAIVIO,
} as const; 