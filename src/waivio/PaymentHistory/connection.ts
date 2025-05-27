import { COLLECTION_NAME, DB_NAME, MODEL_NAME, SCHEMA_NAME } from "../../constants/models";

export const PaymentHistoryConnection = {
    modelName: MODEL_NAME.PAYMENT_HISTORY,
    collectionName: COLLECTION_NAME.PAYMENT_HISTORY,
    schemaName: SCHEMA_NAME.PAYMENT_HISTORY,
    databaseName: DB_NAME.WAIVIO,
} as const; 