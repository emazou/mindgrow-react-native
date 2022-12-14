import 'react-native-gesture-handler'
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import store from './src/features/store';
import { SafeAreaView } from 'react-native-safe-area-context';
import Tabs from './src/navigation/Tabs'
export default function App() {
  return (
    <Provider store={store} >
      <NavigationContainer>
        <SafeAreaView style={{
          height: "100%",
        }}>
          <Tabs />
        </SafeAreaView>
      </NavigationContainer>
    </Provider>
  );
}

