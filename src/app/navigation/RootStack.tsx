import { ResetWatchlistHeaderButton } from '@/components/watchlist/ResetWatchlistHeaderButton';
import { MovieDetailsScreen } from '@/screens/MovieDetailsScreen';
import { SpotlightScreen } from '@/screens/SpotlightScreen';
import { WatchlistScreen } from '@/screens/WatchlistScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Tab = createBottomTabNavigator();

const Stack = createNativeStackNavigator();

const HomeTabs = () => (
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
        headerRight: ResetWatchlistHeaderButton,
      }}
    />
  </Tab.Navigator>
);

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
