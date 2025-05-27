import { COLLECTION_NAME, DB_NAME, MODEL_NAME, SCHEMA_NAME } from "../../constants/models";
    
export const ThreadConnection = {
    modelName: MODEL_NAME.THREAD,
    collectionName: COLLECTION_NAME.THREAD,
    schemaName: SCHEMA_NAME.THREAD, 
    databaseName: DB_NAME.WAIVIO,
} as const; 