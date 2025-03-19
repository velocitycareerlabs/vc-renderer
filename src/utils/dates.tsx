import { toLower } from 'lodash-es';

const DATE_FORMAT_OPTIONS: { [key: string]: Intl.DateTimeFormatOptions } = {
  shortFormat: { year: 'numeric', month: '2-digit', day: '2-digit' },
  longFormat: { year: 'numeric', month: 'long', day: 'numeric' },
};

export const DATE_FORMATS = ['date', 'date-time'];

export const isYearMonthDateFormat = (value: string) =>
  /^([\d]){4}-(0?[1-9]|1[0-2])-(0[1-9]|[12]\d|30|31)$/.test(value);

export const isYearMonthFormat = (value: string) => /^([\d]){4}-(0?[1-9]|1[0-2])$/.test(value);

export const parseYearMonthDateOnlyStringToLocalDate = (dateOnlyStrings: string) => {
  const dataArray = dateOnlyStrings.split('-');
  const [year, month, day] = dataArray;

  return new Date(+year, +month - 1, +day, 0, 0, 0);
};

export const parseYearMonthOnlyStringToLocalDate = (monthOnlyStrings: string) => {
  const dataArray = monthOnlyStrings.split('-');
  const [year, month] = dataArray;

  return new Date(+year, +month - 1, 1, 0, 0, 0);
};

export const formatDateByRegion = (date: Date, locale: string, isShortFormat?: boolean): string => {
  const options = isShortFormat ? DATE_FORMAT_OPTIONS.shortFormat : DATE_FORMAT_OPTIONS.longFormat;
  return new Intl.DateTimeFormat(toLower(locale), options).format(date);
};

export const formatDateMonthAndYear = (date: Date, locale: string) => {
  const formatter = new Intl.DateTimeFormat(locale, { month: 'short', year: 'numeric' });
  return formatter.format(date);
};

export const formatDateFromShortToLongNames = (date: string) => {
  if (!date.trim()) {
    return ' - ';
  }

  const [, duration, periodType] = date.split(/([0-9]+)/);

  return `${duration} ${
    {
      m: 'Month',
      d: 'Day',
      y: 'Year',
      h: 'Hour',
    }[periodType]
  }${Number(duration) > 1 ? 's' : ''}`;
};

export const getLocale = () => {
  return 'en-US';
};
