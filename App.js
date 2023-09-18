// In App.js in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Text, View } from 'react-native';
import RootNavigator from './src/navbar/root_navigator';
import { NativeBaseProvider } from 'native-base';
import { Provider } from 'react-redux';
import store from './src/store/store';

const Stack = createNativeStackNavigator();


function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <NativeBaseProvider>
          <RootNavigator></RootNavigator>
        </NativeBaseProvider>
      </NavigationContainer>
    </Provider>
  );
}

export default App;