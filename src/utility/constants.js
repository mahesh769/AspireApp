import { spacing } from "../styles/spacing";
import Strings from "../translation/language";

//SCREEN CONSTANTS


export const KEY_COMMON_NAVIGATOR = 'commonNavigator'
export const KEY_APP_NAVIGATOR = 'appNavigator'
export const KEY_BOTTOM_TABS = 'appBottomTab'



export const SCREEN_HOME = 'homeScreen'
export const SCREEN_TAB_CATEGORIES = 'categoriesTabScreen'
export const SCREEN_TAB_WISHLIST = 'wishlistTabScreen'
export const SCREEN_TAB_PROFILE = 'profileTabScreen'
export const SCREEN_TAB_CART = 'cartTabScreen'


//OTHER CONSTANTS
export const KEY_USER_TOKEN = 'userToken'
export const KEY_USER_DATA = 'userData'
export const KEY_DEVICE_TOKEN = 'deviceToken'
export const KEY_DEVICE_ID = 'DEVICEID'
export const KET_DEVICE_INFO = 'DEVICEINFO'







export const KEYBOARD = {
  DEFAULT: 'default',
  NUMBER_PAD: 'number-pad',
  DECIMAL_PAD: 'decimal-pad',
  NUMERIC: 'numeric',
  EMAIL_ADDRESS: 'email-address',
  PHONE_PAD: 'phone-pad'
}

export const LANGUAGES = {
  english: 'en',
  hindi: 'hi',
  german: 'gr',
  arabic: 'ar',
  french: 'fr'
}

export const ERR_CODES = {
  invalid_email: "invalid_email",
  unverified_email: "unverified_email"
}

export const CURRENCY = '$'
export const OTP_RESEND_TIMER = 30

// APP REFRESH CONFIGS
export const AUTO_REFRESH = {

}

// DEEPLINKIN CONSTANTS
export const DEEPLINK_BASE = 'flogapp'

// IMAGE RESOLUTIONS
export const PROFILE_PHOTO_RESOLUTION = {
  height: 300,
  width: 300,
}

// POST PRICE TYPES
export const priceTypes = {
  fixed: 'fixed',
  installments: 'installments',
  price_range: "price-range"
}



//CONSTANT MARGINS
export const APP_HORIZONTAL_SPACING = spacing.MARGIN_12

//PROMOTION TYPES
export const PROMOTION_TYPES = {
  SHOP: 'shop',
  PRODUCT: 'product',
  FREELANCER: 'freelancer'
}