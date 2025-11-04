import { Button } from '@react-navigation/elements';
import React from 'react';
import { Text, View } from 'react-native';

type ErrorPlaceholderProps = {
  title: string;
  description: string;
  ctaText?: string;
  onPress?: () => void;
};

export const ErrorPlaceholder = ({
  title,
  description,
  ctaText,
  onPress,
}: ErrorPlaceholderProps) => (
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
    {!!ctaText && onPress && (
      <Button variant="plain" onPress={onPress}>
        {ctaText}
      </Button>
    )}
  </View>
);
