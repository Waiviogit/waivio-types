import { COLLECTION_NAME, DB_NAME, MODEL_NAME, SCHEMA_NAME } from "../../constants/models";

export const UserDraftConnection = {
    modelName: MODEL_NAME.USER_DRAFT,
    collectionName: COLLECTION_NAME.USER_DRAFT,         
    schemaName: SCHEMA_NAME.USER_DRAFT,
    databaseName: DB_NAME.WAIVIO,
} as const; 