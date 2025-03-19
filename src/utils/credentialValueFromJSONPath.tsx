import { get, isArray, isDate, isNumber, isString, includes, filter, toString } from 'lodash-es';
import { selectFirstMatchingPath } from './selectFirstMatchingPath';
import {
  formatDateByRegion,
  isYearMonthFormat,
  isYearMonthDateFormat,
  parseYearMonthOnlyStringToLocalDate,
  parseYearMonthDateOnlyStringToLocalDate,
  DATE_FORMATS,
} from './dates';
import { DisplayDescriptor, DisplayDescriptorPropertyItem } from '../types';

const getDisplayDescriptorFieldByObjectPath = (
  displayDescriptor: DisplayDescriptor | DisplayDescriptorPropertyItem,
  field: string,
  path: keyof DisplayDescriptor | string = '',
) => {
  return get(displayDescriptor, [...(path ? [path] : []), field]);
};

const formatValueIfDate = (value: string, format: string, dateFormat: string) => {
  if (isYearMonthDateFormat(value)) {
    const parsedToDate = parseYearMonthDateOnlyStringToLocalDate(value);
    return formatDateByRegion(parsedToDate, dateFormat, true);
  }

  if (isYearMonthFormat(value)) {
    const parseToMonth = parseYearMonthOnlyStringToLocalDate(value);
    return new Intl.DateTimeFormat('en-us', {
      year: 'numeric',
      month: 'short',
    }).format(parseToMonth);
  }

  if (includes(DATE_FORMATS, format) && value && isDate(new Date(value))) {
    return formatDateByRegion(new Date(value), dateFormat, true);
  }
  return value;
};

export const credentialValueFromJSONPath = (
  displayDescriptor: DisplayDescriptor | DisplayDescriptorPropertyItem,
  subject: object,
  dateFormat: string,
  path: keyof DisplayDescriptor | string = '',
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
    return finalValue.map((val: any) => {
      return {
        value: toString(val[0]),
        isImgLink,
        index: val[1],
        parent: val[2],
        ...labelAndSchemaProperties,
      };
    });
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
