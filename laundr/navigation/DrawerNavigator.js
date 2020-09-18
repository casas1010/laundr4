import React from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";

import HomeScreen from "../screens/DrawerScreens/HomeScreen";
import AccountScreen from "../screens/DrawerScreens/AccountScreen";
import { DrawerContent } from "../screens/DrawerScreens/DrawerContent";

const Drawer = createDrawerNavigator();
const DrawerNavigator = () => {
  return (
    <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />}>
      <Drawer.Screen name="home" component={HomeScreen} options={{ title: 'My home' }}/>
      <Drawer.Screen name="Account" component={AccountScreen} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
