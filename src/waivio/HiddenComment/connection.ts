import { COLLECTION_NAME, DB_NAME, MODEL_NAME, SCHEMA_NAME } from "../../constants/models";

export const HiddenCommentConnection = {
    modelName: MODEL_NAME.HIDDEN_COMMENT,
    collectionName: COLLECTION_NAME.HIDDEN_COMMENT,
    schemaName: SCHEMA_NAME.HIDDEN_COMMENT,
    databaseName: DB_NAME.WAIVIO,
} as const;
