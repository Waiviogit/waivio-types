import {COLLECTION_NAME, DB_NAME, MODEL_NAME, SCHEMA_NAME} from "../../constants/models";

export const CommentRefConnection = {
    modelName: MODEL_NAME.COMMENT_REF,
    collectionName: COLLECTION_NAME.COMMENT_REF,
    schemaName: SCHEMA_NAME.COMMENT_REF,
    databaseName: DB_NAME.WAIVIO,
} as const;
