import { COLLECTION_NAME, DB_NAME, MODEL_NAME, SCHEMA_NAME } from "../../constants/models";

export const PostConnection = {
    modelName: MODEL_NAME.POST,
    collectionName: COLLECTION_NAME.POST,
    schemaName: SCHEMA_NAME.POST,
    databaseName: DB_NAME.WAIVIO,
} as const; 