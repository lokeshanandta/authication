/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  KeyboardAvoidingView,
  Platform
} from 'react-native';
import SignUp from './src/SignUp';
import SignIn from './src/SignIn';
import Home from './src/Home';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const App= () => {
  const isDarkMode = useColorScheme() === 'dark';
  const Stack = createNativeStackNavigator();
 

  return (
    <KeyboardAvoidingView style={{flex:1}}
    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <StatusBar translucent={true} backgroundColor={'transparent'}/>
     <NavigationContainer>
      <Stack.Navigator  screenOptions={{
    headerShown: false
  }}>
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
     </KeyboardAvoidingView>
   
  );
};



export default App;
