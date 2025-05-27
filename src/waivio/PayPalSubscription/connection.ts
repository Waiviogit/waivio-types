import { COLLECTION_NAME, DB_NAME, MODEL_NAME, SCHEMA_NAME } from "../../constants/models";

export const PayPalSubscriptionConnection = {
    modelName: MODEL_NAME.PAYPAL_SUBSCRIPTION,
    collectionName: COLLECTION_NAME.PAYPAL_SUBSCRIPTION,
    schemaName: SCHEMA_NAME.PAYPAL_SUBSCRIPTION,
    databaseName: DB_NAME.WAIVIO,
} as const; 