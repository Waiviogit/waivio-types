import {COLLECTION_NAME, DB_NAME, MODEL_NAME, SCHEMA_NAME} from "../../constants/models";

export const CampaignV2Connection = {
    modelName: MODEL_NAME.CAMPAIGN_V2,
    collectionName: COLLECTION_NAME.CAMPAIGN_V2,
    schemaName: SCHEMA_NAME.CAMPAIGN_V2,
    databaseName: DB_NAME.WAIVIO,
} as const;
