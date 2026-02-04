import { reduce } from 'lodash-es';
import { Credential, DisplayDescriptor, DisplayDescriptorPropertyItem } from '../types';
import { getLocale } from './dates';
import { credentialValueFromJSONPath } from './credentialValueFromJSONPath';

export const buildCredentialDetails = (
  credential: Credential,
  displayDescriptor: DisplayDescriptor,
  localeSelected?: string,
) => {
  const locale = localeSelected || getLocale();

  if (!displayDescriptor) {
    return [];
  }

  return reduce(
    displayDescriptor.properties,
    (
      acc: {
        value?: string;
        label?: string;
        isImgLink?: boolean;
        index?: number;
        parent?: string;
        schema?: DisplayDescriptorPropertyItem['schema'];
      }[],
      curr,
    ) => {
      const displayDescriptorProperty = credentialValueFromJSONPath(curr, credential, locale);

      if (displayDescriptorProperty.length) {
        displayDescriptorProperty.forEach((property) => {
          if (property.value && property.value !== '-') {
            const lastPropertyIndex = acc.findLastIndex(
              (item) => item.parent === property.parent && item.index === property.index,
            );
            if (lastPropertyIndex !== -1) {
              // eslint-disable-next-line better-mutation/no-mutating-methods
              acc.splice(lastPropertyIndex + 1, 0, property);
            } else {
              // eslint-disable-next-line better-mutation/no-mutating-methods
              acc.push(property);
            }
          }
        });
      } else if (displayDescriptorProperty.value && displayDescriptorProperty.value !== '-') {
        acc.push(displayDescriptorProperty);
      }
      return acc;
    },
    [],
  );
};
