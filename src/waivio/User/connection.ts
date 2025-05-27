import { COLLECTION_NAME, DB_NAME, MODEL_NAME, SCHEMA_NAME } from "../../constants/models";

export const UserConnection = {
    modelName: MODEL_NAME.USER,
    collectionName: COLLECTION_NAME.USER,
    schemaName: SCHEMA_NAME.USER,
    databaseName: DB_NAME.WAIVIO,
} as const;
