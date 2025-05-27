import { COLLECTION_NAME, DB_NAME, MODEL_NAME, SCHEMA_NAME } from "../../constants/models";

export const WebsiteStatisticConnection = {
    modelName: MODEL_NAME.WEBSITE_STATISTIC,
    collectionName: COLLECTION_NAME.WEBSITE_STATISTIC,
    schemaName: SCHEMA_NAME.WEBSITE_STATISTIC,
    databaseName: DB_NAME.WAIVIO,
} as const; 