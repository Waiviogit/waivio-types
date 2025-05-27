import { COLLECTION_NAME, DB_NAME, MODEL_NAME, SCHEMA_NAME } from "../../constants/models";

export const UserWobjectsConnection = {
    modelName: MODEL_NAME.USER_WOBJECTS,
    collectionName: COLLECTION_NAME.USER_WOBJECTS,
    schemaName: SCHEMA_NAME.USER_WOBJECTS,
    databaseName: DB_NAME.WAIVIO,
} as const;
