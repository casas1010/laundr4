import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";

import { Ionicons } from "@expo/vector-icons";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

export function DrawerContent(props) {
  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <View style={styles.drawerSection}>
            <DrawerItem
              icon={({ color, size }) => (
                <Icon name="home-outline" color={color} size={size} />
              )}
              label="Home"
              onPress={() => {
                props.navigation.closeDrawer();
              }}
            />
            <DrawerItem
              icon={({ color, size }) => (
                <Icon name="account-outline" color={color} size={size} />
              )}
              label="Account"
              onPress={() => {
                props.navigation.navigate("Account");
              }}
            />
            <DrawerItem
              icon={({ color, size }) => (
                // <Icon name="bookmark-outline" color={color} size={size} />
                <FontAwesome name="history" size={size} color={color} />
              )}
              label="History"
              onPress={() => {
                props.navigation.navigate("History");
              }}
            />
            <DrawerItem
              icon={({ color, size }) => (
                <Ionicons name="ios-notifications" size={size} color={color} />
                // <Icon name="settings-outline" color={color} size={size} />
              )}
              label="Notifications"
              onPress={() => {
                props.navigation.navigate("Notifications");
              }}
            />
            <DrawerItem
              icon={({ color, size }) => (
                <Icon name="account-check-outline" color={color} size={size} />
              )}
              label="Referrals"
              onPress={() => {
                props.navigation.navigate("Referrals");
              }}
            />
            <DrawerItem
              icon={({ color, size }) => (
                // <Icon name="account-check-outline" color={color} size={size} />
                <MaterialIcons name="payment" size={size} color={color} />
              )}
              label="Payment"
              onPress={() => {
                props.navigation.navigate("Payment");
              }}
            />
            <DrawerItem
              icon={({ color, size }) => (
                // <Icon name="account-check-outline" color={color} size={size} />
                <FontAwesome name="newspaper-o" size={size} color={color} />
              )}
              label="Subscriptions"
              onPress={() => {
                props.navigation.navigate("Subscriptions");
              }}
            />
            <DrawerItem
              icon={({ color, size }) => (
                // <Icon name="account-check-outline" color={color} size={size} />
                <Entypo name="help" size={size} color={color} />
              )}
              label="Help"
              onPress={() => {
                props.navigation.navigate("Help");
              }}
            />
          </View>
        </View>
      </DrawerContentScrollView>
      <View style={styles.bottomDrawerSection}>
        <DrawerItem
          icon={({ color, size }) => (
            <Icon name="exit-to-app" color={color} size={size} />
          )}
          label="Sign Out"
          onPress={() => {
            console.log("sign out");
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: "bold",
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  row: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  section: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 15,
  },
  paragraph: {
    fontWeight: "bold",
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: "#f4f4f4",
    borderTopWidth: 1,
  },
  preference: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});
