import { COLLECTION_NAME, DB_NAME, MODEL_NAME, SCHEMA_NAME } from "../../constants/models";

export const UserCommentDraftConnection = {
    modelName: MODEL_NAME.USER_COMMENT_DRAFT,
    collectionName: COLLECTION_NAME.USER_COMMENT_DRAFT,
    schemaName: SCHEMA_NAME.USER_COMMENT_DRAFT,
    databaseName: DB_NAME.WAIVIO,
} as const; 