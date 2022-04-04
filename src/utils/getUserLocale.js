import getUserLocale from 'get-user-locale';
import localeCurrency from 'locale-currency';
const locale = getUserLocale();
const locale_split = locale.split('-');
const locale_language = locale_split[0];
const locale_location = locale_split.length > 2 ? locale_split[locale_split.length - 1] : '';
const locale_currency = locale_location ? localeCurrency.getCurrency(locale_location) : '';

const userLocale = {
  locale,
  locale_language,
  locale_location,
  locale_currency
};

export default userLocale;
