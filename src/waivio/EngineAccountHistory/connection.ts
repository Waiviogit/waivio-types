import { COLLECTION_NAME, DB_NAME, MODEL_NAME, SCHEMA_NAME } from '../../constants/models';

export const EngineAccountHistoryConnection = {
    modelName: MODEL_NAME.ENGINE_ACCOUNT_HISTORY,
    collectionName: COLLECTION_NAME.ENGINE_ACCOUNT_HISTORY,
    schemaName: SCHEMA_NAME.ENGINE_ACCOUNT_HISTORY,
    databaseName: DB_NAME.WAIVIO,
} as const; 