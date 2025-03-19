import React from 'react';
import { FieldName, FieldValue, FieldContainer } from './styles';

export const Field: React.FC<{
  title: string;
  value: string;
}> = ({ title, value }) => {
  const isWebLink = /^(https|http)?:\/\//.test(value);

  return (
    <FieldContainer>
      <FieldName display="block" variant="pM">
        {title}
      </FieldName>
      <FieldValue display="block" variant="pM">
        {isWebLink ? (
          <a href={value} target="_blank" rel="noreferrer">
            {value}
          </a>
        ) : (
          value
        )}
      </FieldValue>
    </FieldContainer>
  );
};
