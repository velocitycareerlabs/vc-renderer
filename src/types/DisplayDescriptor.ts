import { DisplayDescriptorItem } from './DisplayDescriptorItem';
import { DisplayDescriptorPropertyItem } from './DisplayDescriptorPropertyItem';

export type DisplayDescriptor = {
  title?: DisplayDescriptorItem;
  subtitle?: DisplayDescriptorItem;

  summary_detail?: DisplayDescriptorItem;
  description?: DisplayDescriptorItem;
  logo?: DisplayDescriptorItem;
} & {
  properties?: DisplayDescriptorPropertyItem[];
};
