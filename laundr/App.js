import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";

// import WelcomeScreen from "./screens/WelcomeScreen";
import AuthScreen from "./screens/AuthScreen";
import ScanScreen from "./screens/ScanScreen";
import CityScreen from "./screens/CityScreen";


const MainNavigator = createBottomTabNavigator(
  {
    auth: { screen: AuthScreen },
    signUp: {
      screen: createStackNavigator(
        {
          city: { screen: CityScreen },
        }
      ),
    },
    main: {
      screen: createBottomTabNavigator(
        {
          scan: { screen: ScanScreen },
        }
      ),
    },
  },
  {
    defaultNavigationOptions: {
      tabBarVisible: false,
    },
    navigationOptions: {
      lazy: true,
    },
  }
);

const App = createAppContainer(MainNavigator);

// import { Provider } from "react-redux";
// import store from "./store";
// import { PersistGate } from "redux-persist/es/integration/react";
// import { persistStore } from "redux-persist"; // npm install --save redux-persist

// const persistedStore = persistStore(store);

export default () => {
  return <App />;
};

