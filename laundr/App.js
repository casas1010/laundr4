import React from "react";
import { NavigationContainer } from "@react-navigation/native";

// import DrawerNavigator from "./navigation/DrawerNavigator";
import TabNavigator from "./navigation/TabNavigator";

const App = () => {
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
};

export default App;
