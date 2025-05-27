import { COLLECTION_NAME, DB_NAME, MODEL_NAME, SCHEMA_NAME } from "../../constants/models";

export const WithdrawFundsConnection = {
    modelName: MODEL_NAME.WITHDRAW_FUNDS,
    collectionName: COLLECTION_NAME.WITHDRAW_FUNDS,
    schemaName: SCHEMA_NAME.WITHDRAW_FUNDS,
    databaseName: DB_NAME.WAIVIO,
} as const; 