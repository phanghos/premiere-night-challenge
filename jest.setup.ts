afterEach(() => {
  jest.clearAllMocks();
  jest.restoreAllMocks();
});

jest.mock('@react-navigation/native', () => {
  const realModule = jest.requireActual('@react-navigation/native');

  return {
    ...realModule,
    useNavigation: jest.fn(() => ({
      navigate: jest.fn(),
      goBack: jest.fn(),
      setOptions: jest.fn(),
    })),
    useRoute: jest.fn(),
  };
});
