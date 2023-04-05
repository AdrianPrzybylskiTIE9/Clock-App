import React from "react";
import { StatusBar } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import MainScreen from "./screens/MainScreen";
import NewTimeZone from "./screens/NewTimeZone";

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            options={{ headerShown: false }}
            component={MainScreen}
          />
          <Stack.Screen
            name="Add New Time Zone"
            options={{ headerShown: true }}
            component={NewTimeZone}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}