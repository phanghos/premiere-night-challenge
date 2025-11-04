import { ResetWatchlistHeaderButton } from '@/components/watchlist/ResetWatchlistHeaderButton';
import { MovieDetailsScreen } from '@/screens/MovieDetailsScreen';
import { SpotlightScreen } from '@/screens/SpotlightScreen';
import { WatchlistScreen } from '@/screens/WatchlistScreen';
import MaterialDesignIcons from '@react-native-vector-icons/material-design-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFetchAndStoreAvailableGenres } from '../genre/usecases/useFetchAndStoreAvailableGenres';

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
      options={{
        tabBarLabel: 'Home',
        tabBarIcon: ({ size, color }) => (
          <MaterialDesignIcons name="home-outline" size={size} color={color} />
        ),
      }}
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
        tabBarIcon: ({ size, color }) => (
          <MaterialDesignIcons name="heart-outline" size={size} color={color} />
        ),
      }}
    />
  </Tab.Navigator>
);

export const RootStack = () => {
  useFetchAndStoreAvailableGenres();

  return (
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
};
