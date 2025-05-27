import {COLLECTION_NAME, DB_NAME, MODEL_NAME, SCHEMA_NAME} from "../../constants/models";

export const CommentConnection = {
    modelName: MODEL_NAME.COMMENT,
    collectionName: COLLECTION_NAME.COMMENT,
    schemaName: SCHEMA_NAME.COMMENT,
    databaseName: DB_NAME.WAIVIO,
} as const;
