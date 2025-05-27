import { COLLECTION_NAME, DB_NAME, MODEL_NAME, SCHEMA_NAME } from "../../constants/models";

export const PlacesApiAccessConnection = {
    modelName: MODEL_NAME.PLACES_API_ACCESS,
    collectionName: COLLECTION_NAME.PLACES_API_ACCESS,
    schemaName: SCHEMA_NAME.PLACES_API_ACCESS,
    databaseName: DB_NAME.WAIVIO,
} as const; 