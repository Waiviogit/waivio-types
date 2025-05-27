import { COLLECTION_NAME, DB_NAME, MODEL_NAME, SCHEMA_NAME } from '../../constants/models';

export const GuestWalletConnection = {
    modelName: MODEL_NAME.GUEST_WALLET,
    collectionName: COLLECTION_NAME.GUEST_WALLET,
    schemaName: SCHEMA_NAME.GUEST_WALLET,
    databaseName: DB_NAME.WAIVIO,
} as const;
