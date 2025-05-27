import {COLLECTION_NAME, DB_NAME, MODEL_NAME, SCHEMA_NAME} from "../../constants/models";

export const BlacklistConnection = {
    modelName: MODEL_NAME.BLACKLIST,
    collectionName: COLLECTION_NAME.BLACKLIST,
    schemaName: SCHEMA_NAME.BLACKLIST,
    databaseName: DB_NAME.WAIVIO,
} as const;
