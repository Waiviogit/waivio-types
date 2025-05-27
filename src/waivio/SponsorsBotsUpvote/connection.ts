import { COLLECTION_NAME, DB_NAME, MODEL_NAME, SCHEMA_NAME } from "../../constants/models";

export const SponsorsUpvoteConnection = {
    modelName: MODEL_NAME.SPONSORS_BOTS_UPVOTES,
    collectionName: COLLECTION_NAME.SPONSORS_BOTS_UPVOTES,
    schemaName: SCHEMA_NAME.SPONSORS_BOTS_UPVOTES,
    databaseName: DB_NAME.WAIVIO,
} as const; 