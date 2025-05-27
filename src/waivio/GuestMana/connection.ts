import { COLLECTION_NAME, DB_NAME, MODEL_NAME, SCHEMA_NAME } from '../../constants/models';

export const GuestManaConnection = {
    modelName: MODEL_NAME.GUEST_MANA,
    collectionName: COLLECTION_NAME.GUEST_MANA,
    schemaName: SCHEMA_NAME.GUEST_MANA,
    databaseName: DB_NAME.WAIVIO,
} as const; 