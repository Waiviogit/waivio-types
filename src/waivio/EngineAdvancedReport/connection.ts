import { COLLECTION_NAME, DB_NAME, MODEL_NAME, SCHEMA_NAME } from '../../constants/models';

export const EngineAdvancedReportConnection = {
    modelName: MODEL_NAME.ENGINE_ADVANCED_REPORT,
    collectionName: COLLECTION_NAME.ENGINE_ADVANCED_REPORT,
    schemaName: SCHEMA_NAME.ENGINE_ADVANCED_REPORT,
    databaseName: DB_NAME.WAIVIO,
} as const; 