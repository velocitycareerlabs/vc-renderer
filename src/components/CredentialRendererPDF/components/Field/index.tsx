import React from 'react';
import { Text, View } from '@react-pdf/renderer';
import { style } from './styles';

export const Field: React.FC<{
  label: string;
  value: string;
}> = ({ label, value }) => (
  <View style={style.fieldContainer} wrap={false} minPresenceAhead={80}>
    <Text style={style.label}>{label}</Text>
    <Text style={style.value}>{value}</Text>
  </View>
);
