import { COLLECTION_NAME, DB_NAME, MODEL_NAME, SCHEMA_NAME } from '../../constants/models';

export const GeoIpConnection = {
    modelName: MODEL_NAME.GEO_IP,
    collectionName: COLLECTION_NAME.GEO_IP,
    schemaName: SCHEMA_NAME.GEO_IP,
    databaseName: DB_NAME.WAIVIO,
} as const; 