/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { DependencyProvider } from '@/app/di/DependencyProvider';
import { RootStack } from '@/app/navigation/RootStack';
import { NavigationContainer } from '@react-navigation/native';
import {
  QueryClient,
  QueryClientProvider,
  QueryFunction,
} from '@tanstack/react-query';
import { StatusBar } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const headers = {
  accept: 'application/json',
  Authorization:
    'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0OTQ0ODcxOTgwNmM1NGEwNDJiOWZkNzY1MzNlYWVhMCIsIm5iZiI6MTUwNzk0MjI4MS4yNTgsInN1YiI6IjU5ZTE1Zjg5OTI1MTQxNzI2MTAwNWIzNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Tl_HBTW6f4zVG0oyMejRoU4kNMkeh6gEI4AbydH_FC4',
} as const;

const defaultQueryFn: QueryFunction = async ({ queryKey }) => {
  const result = await fetch(`https://api.themoviedb.org/3${queryKey[0]}`, {
    headers,
  });
  if (!result.ok) {
    throw new Error('Network response was not ok.');
  }
  return result.json();
};

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      queryFn: defaultQueryFn,
    },
  },
});

function App() {
  const isDarkMode = true; //useColorScheme() === 'dark';

  return (
    <QueryClientProvider client={queryClient}>
      <GestureHandlerRootView>
        <SafeAreaProvider>
          <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
          <DependencyProvider>
            <NavigationContainer>
              <RootStack />
            </NavigationContainer>
          </DependencyProvider>
        </SafeAreaProvider>
      </GestureHandlerRootView>
    </QueryClientProvider>
  );
}

export default App;
