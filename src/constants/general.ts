export const LANGUAGES = ['en-US',
    'id-ID',
    'ms-MY',
    'ca-ES',
    'cs-CZ',
    'da-DK',
    'de-DE',
    'et-EE',
    'es-ES',
    'fil-PH',
    'fr-FR',
    'hr-HR',
    'it-IT',
    'hu-HU',
    'nl-HU',
    'no-NO',
    'pl-PL',
    'pt-BR',
    'ro-RO',
    'sl-SI',
    'sv-SE',
    'vi-VN',
    'tr-TR',
    'yo-NG',
    'el-GR',
    'bg-BG',
    'ru-RU',
    'uk-UA',
    'he-IL',
    'ar-SA',
    'ne-NP',
    'hi-IN',
    'as-IN',
    'bn-IN',
    'ta-IN',
    'lo-LA',
    'th-TH',
    'ko-KR',
    'ja-JP',
    'zh-CN',
    'af-ZA',
    'auto',
] as const;

export const SUPPORTED_CURRENCIES = {
    USD: 'USD',
    CAD: 'CAD',
    EUR: 'EUR',
    AUD: 'AUD',
    MXN: 'MXN',
    GBP: 'GBP',
    JPY: 'JPY',
    CNY: 'CNY',
    RUB: 'RUB',
    UAH: 'UAH',
    CHF: 'CHF',
} as const;

export const REFERRAL_TYPES = {
    REWARDS: 'rewards',
} as const;

export const REFERRAL_STATUSES = {
    NOT_ACTIVATED: 'notActivated',
    ACTIVATED: 'activated',
    REJECTED: 'rejected',
} as const;

export const STATUSES = {
    ACTIVE: 'active',
    INACTIVE: 'inactive',
    PENDING: 'pending',
    SUSPENDED: 'suspended',
} as const;

export const SHOP_SETTINGS_TYPE = {
    USER: 'user',
    OBJECT: 'object',
} as const;

export const SUPPORTED_COLORS = {
    BACKGROUND: 'background',
    FONT: 'font',
    HOVER: 'hover',
    HEADER: 'header',
    BUTTON: 'button',
    BORDER: 'border',
    FOCUS: 'focus',
    LINKS: 'links',
    MAP_MARKER_BODY: 'mapMarkerBody',
    MAP_MARKER_TEXT: 'mapMarkerText',
} as const;

export const BILLING_TYPE = {
    CRYPTO: 'crypto',
    PAYPAL_SUBSCRIPTION: 'paypal_subscription',
} as const;

export const BOT_UPVOTE_STATUSES = {
    UPVOTED: 'upvoted',
    PENDING: 'pending',
} as const;

export const CAMPAIGN_STATUSES = {
    PENDING: 'pending',
    ACTIVE: 'active',
    INACTIVE: 'inactive',
    EXPIRED: 'expired',
    DELETED: 'deleted',
    PAYED: 'payed',
    REACHED_LIMIT: 'reachedLimit',
    ON_HOLD: 'onHold',
    SUSPENDED: 'suspended',
} as const;

export const CAMPAIGN_TYPES = {
    REVIEWS: 'reviews',
    MENTIONS: 'mentions',
} as const;

export const RESERVATION_STATUSES = {
    ASSIGNED: 'assigned',
    UNASSIGNED: 'unassigned',
    COMPLETED: 'completed',
    REJECTED: 'rejected',
    EXPIRED: 'expired',
} as const;

export const ADVANCED_REPORT_SYMBOLS = ['WAIV'] as const;

// Helper function to get default colors
export const getDefaultColors = () => {
    const colors: Record<string, null> = {};
    Object.values(SUPPORTED_COLORS).forEach((color) => { colors[color] = null; });
    return colors;
};

export const allowedCurrencies = ['usd', 'btc'] as const;
export const allowedIds = ['hive', 'hive_dollar'] as const;

export const COMMENT_REF_TYPES = {
    postWithWobjects: 'post_with_wobj',
    createWobj: 'create_wobj',
    appendWobj: 'append_wobj',
    wobjType: 'wobj_type',
} as const;

export const PAYMENT_TYPES = {
    TRANSFER: 'transfer',
    CREDIT: 'credit', // special type admin can give credits to site
    WRITE_OFF: 'writeOff',
    REFUND: 'refund',
} as const;


export const REFUND_TYPES = {
    WEBSITE_REFUND: 'website_refund',
} as const;

export const REFUND_STATUSES = {
    PENDING: 'pending',
    COMPLETED: 'completed',
    REJECTED: 'rejected',
    FROZEN: 'frozen',
} as const;
