import { COLLECTION_NAME, DB_NAME, MODEL_NAME, SCHEMA_NAME } from "../../constants/models";

export const WebsitePaymentsConnection = {
    modelName: MODEL_NAME.WEBSITE_PAYMENTS,
    collectionName: COLLECTION_NAME.WEBSITE_PAYMENTS,
    schemaName: SCHEMA_NAME.WEBSITE_PAYMENTS,
    databaseName: DB_NAME.WAIVIO,
} as const; 