module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '@': './src', // for '@/...'
          // '@components': './src/components', // for '@components/...'
          // '@utils': './src/utils',
          // '@anotherFolder': './src/anotherFolder',
        },
        extensions: ['.js', '.ts', '.tsx', '.json'],
      },
    ],
    'react-native-worklets/plugin',
  ],
};
