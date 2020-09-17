import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { MainStackNavigator, ContactStackNavigator } from "./StackNavigator";
import DrawerNavigator from "./DrawerNavigator";


import AuthScreen from "../screens/AuthScreen";
import City from "../screens/City";
import ForgotPasswordScreen from "../screens/ForgotPasswordScreen";
import Password from "../screens/Password";
import SignUpDetailsScreen from "../screens/SignUpDetailsScreen";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="auth" component={AuthScreen} />
      <Tab.Screen name="signUpDetails" component={SignUpDetailsScreen} />
      <Tab.Screen name="forgotPassword" component={ForgotPasswordScreen} />
       <Tab.Screen name="drawer" component={DrawerNavigator} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
