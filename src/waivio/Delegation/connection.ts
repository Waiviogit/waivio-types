import {COLLECTION_NAME, DB_NAME, MODEL_NAME, SCHEMA_NAME} from "../../constants/models";

export const DelegationConnection = {
    modelName: MODEL_NAME.DELEGATION,
    collectionName: COLLECTION_NAME.DELEGATION,
    schemaName: SCHEMA_NAME.DELEGATION,
    databaseName: DB_NAME.WAIVIO,
} as const;
