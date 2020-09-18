import React from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";

import HomeScreen from "../screens/DrawerScreens/HomeScreen";
import {DrawerContent} from "../screens/DrawerScreens/DrawerContent";

const Drawer = createDrawerNavigator();
const DrawerNavigator = () => {
  return (
    <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />}>
      <Drawer.Screen name="home" component={HomeScreen} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
