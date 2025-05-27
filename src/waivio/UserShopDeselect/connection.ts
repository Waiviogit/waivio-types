import { COLLECTION_NAME, DB_NAME,  MODEL_NAME, SCHEMA_NAME } from "../../constants/models";

export const UserShopDeselectConnection = {
    modelName: MODEL_NAME.USER_SHOP_DESELECT,
    collectionName: COLLECTION_NAME.USER_SHOP_DESELECT,         
    schemaName: SCHEMA_NAME.USER_SHOP_DESELECT,
    databaseName: DB_NAME.WAIVIO,
} as const; 