import { COLLECTION_NAME, DB_NAME, MODEL_NAME, SCHEMA_NAME } from "../../constants/models";

export const RelatedAlbumConnection = {
    modelName: MODEL_NAME.RELATED_ALBUM,
    collectionName: COLLECTION_NAME.RELATED_ALBUM,
    schemaName: SCHEMA_NAME.RELATED_ALBUM,
    databaseName: DB_NAME.WAIVIO,
} as const;
