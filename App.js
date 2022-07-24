import React from 'react'
import NavigationApp from './navigation/Navigation';
import { SafeAreaProvider } from 'react-native-safe-area-context';

function App() {
  return (
    <SafeAreaProvider>
      <NavigationApp />
    </SafeAreaProvider>
  );
}

export default App;