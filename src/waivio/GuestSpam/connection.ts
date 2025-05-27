import { COLLECTION_NAME, DB_NAME, MODEL_NAME, SCHEMA_NAME } from '../../constants/models';

export const GuestSpamConnection = {
    modelName: MODEL_NAME.GUEST_SPAM,
    collectionName: COLLECTION_NAME.GUEST_SPAM,
    schemaName: SCHEMA_NAME.GUEST_SPAM,
    databaseName: DB_NAME.WAIVIO,
} as const; 