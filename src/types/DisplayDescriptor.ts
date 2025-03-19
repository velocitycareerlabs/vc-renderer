import { DisplayDescriptorItem } from './DisplayDescriptorItem';
import { DisplayDescriptorPropertyItem } from './DisplayDescriptorPropertyItem';

export type DisplayDescriptor = {
  title?: DisplayDescriptorItem;
  subtitle?: DisplayDescriptorItem;
  // eslint-disable-next-line camelcase
  summary_detail?: DisplayDescriptorItem;
  description?: DisplayDescriptorItem;
  logo?: DisplayDescriptorItem;
} & {
  properties?: DisplayDescriptorPropertyItem[];
};
