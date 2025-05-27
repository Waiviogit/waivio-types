import { COLLECTION_NAME, SCHEMA_NAME, DB_NAME, MODEL_NAME } from "../../constants/models";

export const CurrenciesRateConnection = {
    modelName: MODEL_NAME.CURRENCIES_RATE,
    collectionName: COLLECTION_NAME.CURRENCIES_RATE,
    schemaName: SCHEMA_NAME.CURRENCIES_RATE,
    databaseName: DB_NAME.CURRENCIES,
} as const;


