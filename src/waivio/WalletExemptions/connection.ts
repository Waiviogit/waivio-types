import { COLLECTION_NAME, DB_NAME, MODEL_NAME, SCHEMA_NAME } from "../../constants/models";

export const WalletExemptionsConnection = {
    modelName: MODEL_NAME.WALLET_EXEMPTIONS,
    collectionName: COLLECTION_NAME.WALLET_EXEMPTIONS,          
    schemaName: SCHEMA_NAME.WALLET_EXEMPTIONS,
    databaseName: DB_NAME.WAIVIO,
} as const; 