import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

type EmptyListPlaceholderProps = {
  title: string;
  description: string;
};

export const EmptyListPlaceholder = ({
  title,
  description,
}: EmptyListPlaceholderProps) => (
  <View style={styles.container}>
    <Text style={styles.title}>{title}</Text>
    <Text style={styles.description}>{description}</Text>
  </View>
);

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
