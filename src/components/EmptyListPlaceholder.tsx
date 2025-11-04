import React from 'react';
import { Text, View } from 'react-native';

type EmptyListPlaceholderProps = {
  title: string;
  description: string;
};

export const EmptyListPlaceholder = ({
  title,
  description,
}: EmptyListPlaceholderProps) => (
  <View
    style={{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: 8,
    }}
  >
    <Text
      style={{
        color: '#fff',
        fontSize: 20,
        textAlign: 'center',
        marginBottom: 8,
      }}
    >
      {title}
    </Text>
    <Text
      style={{
        color: '#fff',
        fontSize: 18,
        fontWeight: 300,
        textAlign: 'center',
      }}
    >
      {description}
    </Text>
  </View>
);
