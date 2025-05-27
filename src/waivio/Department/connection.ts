import {COLLECTION_NAME, DB_NAME, MODEL_NAME, SCHEMA_NAME} from "../../constants/models";

export const DepartmentConnection = {
    modelName: MODEL_NAME.DEPARTMENT,
    collectionName: COLLECTION_NAME.DEPARTMENT,
    schemaName: SCHEMA_NAME.DEPARTMENT,
    databaseName: DB_NAME.WAIVIO,
} as const;
