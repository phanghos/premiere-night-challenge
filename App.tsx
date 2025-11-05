/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { DependencyProvider } from '@/app/di/DependencyProvider';
import { RootStack } from '@/app/navigation/RootStack';
import { queryClient } from '@/data/http/queryClient';
import { NavigationContainer } from '@react-navigation/native';
import { QueryClientProvider } from '@tanstack/react-query';
import { StatusBar } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <GestureHandlerRootView>
        <SafeAreaProvider>
          <StatusBar barStyle={'light-content'} />
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
