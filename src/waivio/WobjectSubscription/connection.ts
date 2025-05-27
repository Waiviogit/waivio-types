import { COLLECTION_NAME, DB_NAME, MODEL_NAME, SCHEMA_NAME } from "../../constants/models";

export const WobjectSubscriptionConnection = {
    modelName: MODEL_NAME.WOBJECT_SUBSCRIPTIONS,
    collectionName: COLLECTION_NAME.WOBJECT_SUBSCRIPTIONS,
    schemaName: SCHEMA_NAME.WOBJECT_SUBSCRIPTIONS,
    databaseName: DB_NAME.WAIVIO,
} as const;
