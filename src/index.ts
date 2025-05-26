export type {
  User,
  UserAuth,
  UserMetadata,
  UserSettings,
  UserDraft,
  UserNotifications,
  UserReferral,
  UserShop
} from './waivio/User/types';
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
} from './waivio/App/types';

import { UserSchema } from './waivio/User/UserSchema';
import { UserConnection } from './waivio/User/connection';
import { AppSchema } from './waivio/App/AppSchema';
import { AppConnection } from './waivio/App/connection';

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
export { UserSchema } from './waivio/User/UserSchema';
export { UserConnection } from './waivio/User/connection';
export { AppSchema } from './waivio/App/AppSchema';
export { AppConnection } from './waivio/App/connection';
