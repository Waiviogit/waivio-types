import { COLLECTION_NAME, DB_NAME, MODEL_NAME, SCHEMA_NAME } from "../../constants/models";

export const PrefetchConnection = {
    modelName: MODEL_NAME.PREFETCH,
    collectionName: COLLECTION_NAME.PREFETCH,
    schemaName: SCHEMA_NAME.PREFETCH,
    databaseName: DB_NAME.WAIVIO,
} as const;
