import { Button } from '@react-navigation/elements';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

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
}: ErrorPlaceholderProps) => {
  const shouldRenderCta = !!ctaText && onPress;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
      {shouldRenderCta && (
        <Button variant="plain" onPress={onPress}>
          {ctaText}
        </Button>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 8,
  },
  title: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 500,
    textAlign: 'center',
    marginBottom: 8,
  },
  description: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 300,
    textAlign: 'center',
  },
});
