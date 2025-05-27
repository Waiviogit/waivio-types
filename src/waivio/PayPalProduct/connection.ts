import { COLLECTION_NAME, DB_NAME, MODEL_NAME, SCHEMA_NAME } from "../../constants/models";

export const PayPalProductConnection = {
    modelName: MODEL_NAME.PAYPAL_PRODUCT,
    collectionName: COLLECTION_NAME.PAYPAL_PRODUCT,
    schemaName: SCHEMA_NAME.PAYPAL_PRODUCT,
    databaseName: DB_NAME.WAIVIO,
} as const; 