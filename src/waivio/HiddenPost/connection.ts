import { COLLECTION_NAME, DB_NAME, MODEL_NAME, SCHEMA_NAME } from "../../constants/models";

export const HiddenPostConnection = {
    modelName: MODEL_NAME.HIDDEN_POST,
    collectionName: COLLECTION_NAME.HIDDEN_POST,
    schemaName: SCHEMA_NAME.HIDDEN_POST,
    databaseName: DB_NAME.WAIVIO,
} as const;
