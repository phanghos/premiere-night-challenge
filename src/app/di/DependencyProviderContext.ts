import { createContext } from 'react';
import type { AppDependencies } from './AppDependencies';

export const DependencyProviderContext = createContext<AppDependencies>(
  undefined!,
);
