import { MovieDetailsScreen } from '@/screens/MovieDetailsScreen';
import { SpotlightScreen } from '@/screens/SpotlightScreen';
import { WatchlistScreen } from '@/screens/WatchlistScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Button } from '@react-navigation/elements';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useContext } from 'react';
import { DependencyProviderContext } from '../di/DependencyProviderContext';

const Tab = createBottomTabNavigator();

const Stack = createNativeStackNavigator();

const HomeTabs = () => {
  const {
    watchlist: { resetWatchlist },
  } = useContext(DependencyProviderContext);

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: { backgroundColor: '#000' },
      }}
    >
      <Tab.Screen
        name="Spotlight"
        component={SpotlightScreen}
        options={{ tabBarLabel: 'Home' }}
      />
      <Tab.Screen
        name="Watchlist"
        component={WatchlistScreen}
        options={{
          tabBarLabel: 'Watchlist',
          headerShown: true,
          headerStyle: { backgroundColor: '#000' },
          headerTitleStyle: { color: '#fff' },
          headerRight: () => {
            return (
              <Button variant="plain" onPress={resetWatchlist}>
                Remove All
              </Button>
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

export const RootStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="HomeTabs" component={HomeTabs} />
    <Stack.Screen
      name="MovieDetails"
      component={MovieDetailsScreen}
      options={{
        gestureEnabled: true,
        gestureDirection: 'horizontal',
        fullScreenGestureEnabled: true,
      }}
    />
  </Stack.Navigator>
);
