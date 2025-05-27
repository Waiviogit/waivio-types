import { COLLECTION_NAME, DB_NAME, MODEL_NAME, SCHEMA_NAME } from "../../constants/models";

export const WobjectTokensConnection = {
    modelName: MODEL_NAME.WOBJECT_TOKENS,
    collectionName: COLLECTION_NAME.WOBJECT_TOKENS,
    schemaName: SCHEMA_NAME.WOBJECT_TOKENS,
    databaseName: DB_NAME.WAIVIO,
} as const; 