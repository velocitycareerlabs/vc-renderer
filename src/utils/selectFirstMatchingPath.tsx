import { get } from 'lodash-es';
import { JSONPath } from 'jsonpath-plus';
import { DisplayDescriptor, DisplayDescriptorPropertyItem } from '../types';

export const selectFirstMatchingPath = (
  path: keyof DisplayDescriptor | string,
  subject: object,
  displayDescriptor: DisplayDescriptor | DisplayDescriptorPropertyItem,
) => {
  const possiblePaths = get(displayDescriptor, [...(path ? [path] : []), 'path'], []);
  let value = '';
  let isImgLink = false;
  let isArrayOfObjects = false;

  possiblePaths.find((item: string) => {
    const [basepath, restpath] = item?.split('[*].') || [''];

    const basePathResult = JSONPath({
      path: basepath,
      json: subject,
    });
    let result;

    if (!!restpath && Array.isArray(basePathResult) && basePathResult.length) {
      // eslint-disable-next-line better-mutation/no-mutation
      isArrayOfObjects = true;
      result = basePathResult[0].map((el, i) => {
        // eslint-disable-next-line better-mutation/no-mutation
        return [JSONPath({ path: `$.${restpath}`, json: el }) || '', i, basepath];
      });
    } else {
      result = basePathResult;
    }

    if (result.length) {
      const pathArray = JSONPath.toPathArray(item);
      // eslint-disable-next-line better-mutation/no-mutation
      isImgLink = pathArray.includes('image');

      // eslint-disable-next-line better-mutation/no-mutation
      value = isArrayOfObjects ? result : result.join(', ');

      return true;
    }
    return false;
  });

  return { value, isImgLink, isArrayOfObjects };
};
