import { COLLECTION_NAME, DB_NAME, MODEL_NAME, SCHEMA_NAME } from "../../constants/models";

export const UserExpertiseConnection = {
    modelName: MODEL_NAME.USER_EXPERTISE,
    collectionName: COLLECTION_NAME.USER_EXPERTISE,
    schemaName: SCHEMA_NAME.USER_EXPERTISE,
    databaseName: DB_NAME.WAIVIO,
} as const;
