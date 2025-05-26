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

export type {
  App,
  AppAdSense,
  AppTopUser,
  AppTagsData,
  AppReferralTimer,
  AppBot,
  AppCommissions,
  AppMapPoints,
  AppHeader,
  AppColors,
  AppCity,
  AppShopSettings,
  AppConfiguration
} from './App/types';

import { UserSchema } from './User/UserSchema';
import { UserConnection } from './User/connection';
import { AppSchema } from './App/AppSchema';
import { AppConnection } from './App/connection';

// Database-specific exports
export const waivio = {
  schemas: {
    UserSchema,
    AppSchema
  },
  connections: {
    UserConnection,
    AppConnection
  },
  dbName: 'waivio'
} as const;

// Re-export individual items for backward compatibility
export { UserSchema } from './User/UserSchema';
export { UserConnection } from './User/connection';
export { AppSchema } from './App/AppSchema';
export { AppConnection } from './App/connection';
