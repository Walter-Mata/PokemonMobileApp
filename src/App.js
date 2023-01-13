// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import { Provider as PaperProvider } from 'react-native-paper';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import redux from './redux/';
//THEME
import {themes} from './themes/themes'
//SCREENS
import Home from './screen/Home';


const Stack = createNativeStackNavigator();

const App = () => {
  return (
     <Provider store={redux.store}>
            <PersistGate persistor={redux.persistor}>
       <PaperProvider theme={themes}>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
      </NavigationContainer>
        </PaperProvider>
      </PersistGate>
      </Provider>
  );
};

export default App;
