import {COLLECTION_NAME, DB_NAME, MODEL_NAME, SCHEMA_NAME} from "../../constants/models";

export const CampaignConnection = {
    modelName: MODEL_NAME.CAMPAIGN,
    collectionName: COLLECTION_NAME.CAMPAIGN,
    schemaName: SCHEMA_NAME.CAMPAIGN,
    databaseName: DB_NAME.WAIVIO,
} as const;
