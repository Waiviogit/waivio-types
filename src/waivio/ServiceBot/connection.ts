import { COLLECTION_NAME, DB_NAME, MODEL_NAME, SCHEMA_NAME } from "../../constants/models";

export const ServiceBotConnection = {
    modelName: MODEL_NAME.SERVICE_BOT,
    collectionName: COLLECTION_NAME.SERVICE_BOT,
    schemaName: SCHEMA_NAME.SERVICE_BOT,
    databaseName: DB_NAME.WAIVIO,
} as const;
