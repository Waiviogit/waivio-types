import { COLLECTION_NAME, DB_NAME, MODEL_NAME, SCHEMA_NAME } from "../../constants/models";

export const WObjectConnection = {
    modelName: MODEL_NAME.WOBJECT,
    collectionName: COLLECTION_NAME.WOBJECT,
    schemaName: SCHEMA_NAME.WOBJECT,
    databaseName: DB_NAME.WAIVIO,
} as const;
