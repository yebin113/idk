import * as React from 'react';
import { AuthLocal, AuthPIN } from '../screens/Auth'
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function AuthStack() {
  return (
      <Stack.Navigator>
        <Stack.Screen name="AuthPIN" component={AuthPIN} options={{ headerShown: false }} />
        <Stack.Screen name="AuthLocal" component={AuthLocal} options={{ headerShown: false }} />
      </Stack.Navigator>
  );
}

export default AuthStack;