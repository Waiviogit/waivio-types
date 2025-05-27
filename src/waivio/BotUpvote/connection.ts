import {COLLECTION_NAME, DB_NAME, MODEL_NAME, SCHEMA_NAME} from "../../constants/models";

export const BotUpvoteConnection = {
    modelName: MODEL_NAME.BOT_UPVOTE,
    collectionName: COLLECTION_NAME.BOT_UPVOTE,
    schemaName: SCHEMA_NAME.BOT_UPVOTE,
    databaseName: DB_NAME.WAIVIO,
} as const;
