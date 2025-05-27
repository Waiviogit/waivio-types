import {COLLECTION_NAME, DB_NAME, MODEL_NAME, SCHEMA_NAME} from "../../constants/models";

export const AppAffiliateConnection = {
    modelName: MODEL_NAME.APP_AFFILIATE,
    collectionName: COLLECTION_NAME.APP_AFFILIATE,
    schemaName: SCHEMA_NAME.APP_AFFILIATE,
    databaseName: DB_NAME.WAIVIO,
} as const;
