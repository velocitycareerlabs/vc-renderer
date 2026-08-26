import { get, isArray, isNumber, isString, includes, filter, toString } from 'lodash-es';
import { DisplayDescriptor, DisplayDescriptorPropertyItem } from '../types';
import { selectFirstMatchingPath } from './selectFirstMatchingPath';
import {
  formatDateByRegion,
  isYearMonthFormat,
  isYearMonthDateFormat,
  parseYearMonthOnlyStringToLocalDate,
  parseYearMonthDateOnlyStringToLocalDate,
  DATE_FORMATS,
} from './dates';

export const credentialValueFromJSONPath = (
  displayDescriptor: DisplayDescriptor | DisplayDescriptorPropertyItem,
  subject: object,
  dateFormat: string,
  path: keyof DisplayDescriptor | string = '',
  // eslint-disable-next-line complexity
) => {
  const { format } = getDisplayDescriptorFieldByObjectPath(displayDescriptor, 'schema', path) || {};
  const fallback = getDisplayDescriptorFieldByObjectPath(displayDescriptor, 'fallback', path);

  const labelAndSchemaProperties = {
    ...('label' in displayDescriptor && { label: displayDescriptor?.label }),
    ...('schema' in displayDescriptor && { schema: displayDescriptor?.schema }),
  };

  let value;
  let isImgLink = false;
  let isArrayOfObjects = false;

  if (getDisplayDescriptorFieldByObjectPath(displayDescriptor, 'text', path)) {
    value = getDisplayDescriptorFieldByObjectPath(displayDescriptor, 'text', path)!;
  } else {
    // eslint-disable-next-line better-mutation/no-mutation
    ({ value, isImgLink, isArrayOfObjects } = selectFirstMatchingPath(
      path,
      subject,
      displayDescriptor,
    ));
  }

  value = formatValueIfDate(value, format, dateFormat);

  const finalValue = value || fallback;

  if (isNumber(finalValue) || isString(finalValue)) {
    return { value: toString(finalValue), isImgLink, ...labelAndSchemaProperties };
  }

  if (isArrayOfObjects) {
    return finalValue.map((val: any) => ({
      value: toString(val[0]),
      isImgLink,
      index: val[1],
      parent: val[2],
      ...labelAndSchemaProperties,
    }));
  }

  if (isArray(finalValue)) {
    const filteredArray = filter(finalValue, Boolean);
    return { value: filteredArray.join(', '), isImgLink: false, ...labelAndSchemaProperties };
  }

  return {
    value: '',
    isImgLink,
    ...labelAndSchemaProperties,
  };
};

const getDisplayDescriptorFieldByObjectPath = (
  displayDescriptor: DisplayDescriptor | DisplayDescriptorPropertyItem,
  field: string,
  path: keyof DisplayDescriptor | string = '',
) => get(displayDescriptor, [...(path ? [path] : []), field]);

const isMatchingCalendarDate = (value: string, date: Date) => {
  const [year, month, day] = value.split('-').map(Number);

  return date.getFullYear() === year && date.getMonth() === month - 1 && date.getDate() === day;
};

const formatStringDateValue = (value: string, dateFormat: string) => {
  if (isYearMonthDateFormat(value)) {
    const parsedToDate = parseYearMonthDateOnlyStringToLocalDate(value);
    return isMatchingCalendarDate(value, parsedToDate)
      ? formatDateByRegion(parsedToDate, dateFormat, true)
      : undefined;
  }

  if (isYearMonthFormat(value)) {
    const parseToMonth = parseYearMonthOnlyStringToLocalDate(value);
    return new Intl.DateTimeFormat('en-us', {
      year: 'numeric',
      month: 'short',
    }).format(parseToMonth);
  }

  return null;
};

const isDateTimeCalendarValid = (value: string) => {
  const [dateOnly, time] = value.split('T');
  if (!time || !isYearMonthDateFormat(dateOnly)) {
    return true;
  }

  return isMatchingCalendarDate(dateOnly, parseYearMonthDateOnlyStringToLocalDate(dateOnly));
};

const formatValueIfDate = (value: unknown, format: string, dateFormat: string) => {
  if (!value) {
    return value;
  }

  if (typeof value === 'string') {
    const formattedDate = formatStringDateValue(value, dateFormat);
    if (formattedDate !== null) {
      return formattedDate;
    }
  }

  if (!includes(DATE_FORMATS, format)) {
    return value;
  }

  const parsedDate = parseDateValue(value);
  return parsedDate ? formatDateByRegion(parsedDate, dateFormat, true) : undefined;
};

const parseDateValue = (value: unknown) => {
  if (value instanceof Date) {
    return Number.isFinite(value.getTime()) ? value : null;
  }

  if (typeof value === 'string') {
    return isDateTimeCalendarValid(value) ? toValidDate(value) : null;
  }

  if (typeof value === 'number') {
    return toValidDate(value);
  }

  return null;
};

const toValidDate = (value: string | number) => {
  const parsedDate = new Date(value);
  return Number.isFinite(parsedDate.getTime()) ? parsedDate : null;
};
