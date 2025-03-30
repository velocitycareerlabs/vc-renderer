import React from 'react';
import { BoxProps } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {
  FieldListContainer,
  Fields,
  Accordion,
  AccordionSummary,
  AccordionTitle,
  AccordionDetails,
} from './styles';
import type { CredentialDetailsItem } from '../../../../types';
import { Field } from '../Field';

export const FieldList: React.FC<
  {
    fields: CredentialDetailsItem[];
  } & BoxProps
> = ({ fields, ...props }) => {
  const fieldsOrdered = React.useMemo(() => {
    return fields
      .filter((field) => !field?.isImgLink)
      .reduce<
        Array<
          | { type: 'topLevel'; groupKey: string; fields: CredentialDetailsItem[] }
          | { type: 'array'; groupKey: string; fields: CredentialDetailsItem[] }
        >
      >((acc, field) => {
        const isTopLevel = !field.parent;
        if (isTopLevel) {
          const isLastEntryTypeTopLevel = acc.length > 0 && acc?.at(-1)?.type === 'topLevel';
          const lastTopLevelIndex = acc.findLastIndex((item) => item.type === 'topLevel');
          if (lastTopLevelIndex !== -1 && isLastEntryTypeTopLevel) {
            return acc.map((item, index) =>
              index === lastTopLevelIndex ? { ...item, fields: [...item.fields, field] } : item,
            );
          }
          return [...acc, { type: 'topLevel', groupKey: 'topLevel', fields: [field] }];
        }
        const groupKey =
          field.parent && typeof field.index !== 'undefined'
            ? `${field.parent}${field.index}`
            : null;
        if (groupKey) {
          const groupEntry = acc.find(
            (item) => item.type === 'array' && item.groupKey === groupKey,
          );
          if (groupEntry) {
            return acc.map((item) =>
              item.type === 'array' && item.groupKey === groupKey
                ? { ...item, fields: [...item.fields, field] }
                : item,
            );
          }
          return [...acc, { type: 'array', groupKey, fields: [field] }];
        }
        return acc;
      }, []);
  }, [fields]);

  return (
    <FieldListContainer {...props}>
      {fieldsOrdered.map((item, idx) => {
        if (item.type === 'topLevel') {
          const { fields: topLevelFields } = item;
          return (
            <Fields key={`${item.groupKey + idx}`}>
              {topLevelFields.map((field, i) => (
                <Field key={`${field.label! + i}`} title={field.label!} value={field.value!} />
              ))}
            </Fields>
          );
        }

        const { fields: groupFields, groupKey } = item;
        const [firstField, ...restFields] = groupFields;
        return (
          <Accordion key={groupKey}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <AccordionTitle>{firstField.value!}</AccordionTitle>
            </AccordionSummary>
            <AccordionDetails>
              {restFields.map((field, i) => (
                <Field key={`${field.label! + i}`} title={field.label!} value={field.value!} />
              ))}
            </AccordionDetails>
          </Accordion>
        );
      })}
    </FieldListContainer>
  );
};
