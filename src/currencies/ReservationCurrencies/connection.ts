import { DB_NAME, MODEL_NAME, SCHEMA_NAME, COLLECTION_NAME } from "../../constants/models";

export const ReservationCurrenciesConnection = {
    modelName: MODEL_NAME.RESERVATION_CURRENCIES,
    collectionName: COLLECTION_NAME.RESERVATION_CURRENCIES,
    schemaName: SCHEMA_NAME.RESERVATION_CURRENCIES,
    databaseName: DB_NAME.CURRENCIES,
} as const;
