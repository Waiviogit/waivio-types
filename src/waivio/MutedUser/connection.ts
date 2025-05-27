import { COLLECTION_NAME, DB_NAME, MODEL_NAME, SCHEMA_NAME } from "../../constants/models";

export const MutedUserConnection = {
    modelName: MODEL_NAME.MUTED_USER,               
    collectionName: COLLECTION_NAME.MUTED_USER,
    schemaName: SCHEMA_NAME.MUTED_USER,
    databaseName: DB_NAME.WAIVIO,
} as const;
