import { NavigationContainer } from '@react-navigation/native';
import React from 'react';

import { AuthProvider } from './src/context/AuthContext';
import { MainNavigator } from './src/navigator/MainNavigator';

const App = () => {
  return (
      <NavigationContainer>
        <AppState>
          <MainNavigator />
        </AppState>
      </NavigationContainer>
    );
}

const AppState = ( { children }: any ) => {
  return(
    <AuthProvider>
      { children }
    </AuthProvider>
  )
}

export default App;