import React from 'react'
import NavigationApp from './navigation/Navigation';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NativeBaseProvider } from 'native-base';

function App() {
  return (
    <SafeAreaProvider>
      <NativeBaseProvider>
        <NavigationApp />
      </NativeBaseProvider>
    </SafeAreaProvider>
  );
}

export default App;