import {COLLECTION_NAME, DB_NAME, MODEL_NAME, SCHEMA_NAME} from "../../constants/models";

export const AppConnection = {
    modelName: MODEL_NAME.APP,
    collectionName: COLLECTION_NAME.APP,
    schemaName: SCHEMA_NAME.APP,
    dbName: DB_NAME.WAIVIO,
} as const;
