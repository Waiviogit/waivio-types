import { COLLECTION_NAME, DB_NAME, MODEL_NAME, SCHEMA_NAME } from '../../constants/models';

export const EngineAdvancedReportStatusConnection = {
    modelName: MODEL_NAME.ENGINE_ADVANCED_REPORT_STATUS,
    collectionName: COLLECTION_NAME.ENGINE_ADVANCED_REPORT_STATUS,
    schemaName: SCHEMA_NAME.ENGINE_ADVANCED_REPORT_STATUS,
    databaseName: DB_NAME.WAIVIO,
} as const; 