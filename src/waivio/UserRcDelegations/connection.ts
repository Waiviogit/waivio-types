import { COLLECTION_NAME, DB_NAME, MODEL_NAME, SCHEMA_NAME } from "../../constants/models";

export const UserRcDelegationsConnection = {
    modelName: MODEL_NAME.USER_RC_DELEGATIONS,
    collectionName: COLLECTION_NAME.USER_RC_DELEGATIONS,
    schemaName: SCHEMA_NAME.USER_RC_DELEGATIONS,
    databaseName: DB_NAME.WAIVIO,
} as const; 