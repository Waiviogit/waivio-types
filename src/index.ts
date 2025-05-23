export type {
  User,
  UserAuth,
  UserMetadata,
  UserSettings,
  UserDraft,
  UserNotifications,
  UserReferral,
  UserShop
} from './User/types';

// Database-specific exports
export const waivio = {
  schemas: {
    UserSchema: require('./User/UserSchema').UserSchema
  },
  connections: {
    UserConnection: require('./User/connection').UserConnection
  },
  dbName: 'waivio'
} as const;

// Re-export individual items for backward compatibility
export { UserSchema } from './User/UserSchema';
export { UserConnection } from './User/connection';
