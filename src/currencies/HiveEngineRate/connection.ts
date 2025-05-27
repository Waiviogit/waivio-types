import { COLLECTION_NAME, SCHEMA_NAME, DB_NAME, MODEL_NAME } from "../../constants/models";

export const HiveEngineRateConnection = {
    modelName: MODEL_NAME.HIVE_ENGINE_RATE,
    collectionName: COLLECTION_NAME.HIVE_ENGINE_RATE,
    schemaName: SCHEMA_NAME.HIVE_ENGINE_RATE,
    databaseName: DB_NAME.CURRENCIES,
} as const;
