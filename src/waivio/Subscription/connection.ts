import { COLLECTION_NAME, DB_NAME, MODEL_NAME, SCHEMA_NAME } from "../../constants/models";

export const SubscriptionConnection = {
    modelName: MODEL_NAME.SUBSCRIPTION,
    collectionName: COLLECTION_NAME.SUBSCRIPTION,
    schemaName: SCHEMA_NAME.SUBSCRIPTION,
    databaseName: DB_NAME.WAIVIO,
} as const; 