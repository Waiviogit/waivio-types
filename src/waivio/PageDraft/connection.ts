import { COLLECTION_NAME, DB_NAME, MODEL_NAME, SCHEMA_NAME } from "../../constants/models";

export const PageDraftConnection = {
    modelName: MODEL_NAME.PAGE_DRAFT,
    collectionName: COLLECTION_NAME.PAGE_DRAFT,
    schemaName: SCHEMA_NAME.PAGE_DRAFT,
    databaseName: DB_NAME.WAIVIO,
} as const; 