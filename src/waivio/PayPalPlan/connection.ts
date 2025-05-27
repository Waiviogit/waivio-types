import { COLLECTION_NAME, DB_NAME, MODEL_NAME, SCHEMA_NAME } from "../../constants/models";

export const PayPalPlanConnection = {
    modelName: MODEL_NAME.PAYPAL_PLAN,
    collectionName: COLLECTION_NAME.PAYPAL_PLAN,
    schemaName: SCHEMA_NAME.PAYPAL_PLAN,
    databaseName: DB_NAME.WAIVIO,
} as const; 