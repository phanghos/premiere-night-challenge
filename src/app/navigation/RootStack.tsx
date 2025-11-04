import { MovieDetailsScreen } from '@/screens/MovieDetailsScreen';
import { SpotlightScreen } from '@/screens/SpotlightScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export const RootStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Spotlight" component={SpotlightScreen} />
    <Stack.Screen
      name="MovieDetails"
      component={MovieDetailsScreen}
      options={{
        headerShown: false,
        gestureEnabled: true,
        gestureDirection: 'horizontal',
        fullScreenGestureEnabled: true,
      }}
    />
  </Stack.Navigator>
);
