import { COLLECTION_NAME, SCHEMA_NAME, DB_NAME, MODEL_NAME } from "../../constants/models";

export const CurrenciesStatisticConnection = {
    modelName: MODEL_NAME.CURRENCIES_STATISTIC,
    collectionName: COLLECTION_NAME.CURRENCIES_STATISTIC,
    schemaName: SCHEMA_NAME.CURRENCIES_STATISTIC,
    databaseName: DB_NAME.CURRENCIES,
} as const;
