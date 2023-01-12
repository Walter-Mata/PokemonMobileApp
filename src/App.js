// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//THEME
import {theme} from './themes/themes'
//SCREENS
import Home from './screen/Home';


const Stack = createNativeStackNavigator();

const App = () => {
  return (
       <PaperProvider theme={theme}>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
      </NavigationContainer>
      </PaperProvider>
  );
};

export default App;
