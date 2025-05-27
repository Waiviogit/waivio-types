import { COLLECTION_NAME, DB_NAME, MODEL_NAME, SCHEMA_NAME } from "../../constants/models";

export const ObjectTypeConnection = {
    modelName: MODEL_NAME.OBJECT_TYPE,
    collectionName: COLLECTION_NAME.OBJECT_TYPE,
    schemaName: SCHEMA_NAME.OBJECT_TYPE,
    databaseName: DB_NAME.WAIVIO,
} as const;
