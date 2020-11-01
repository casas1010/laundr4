import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "../screens/DrawerScreens/HomeScreen";


const Stack = createStackNavigator();
const StackNavigator = () => {
  return (
    <Stack.Navigator>

      <Stack.Screen name="Home" component={HomeScreen} navigateToNewOrderScreen={ ()=> props.navigation.navigate("New Order Screen")} />

    </Stack.Navigator>
  );
};

export default StackNavigator;
