/*
code clean up 100% complete
wire up actions



*/


import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
//
import * as actions from "../../actions";
import { connect } from "react-redux";
//
import { Ionicons } from "@expo/vector-icons";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

const DrawerContent = (props) => {
  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <View style={styles.drawerSection}>
            <DrawerItem
              icon={({ color, size }) => (
                <Icon
                  name="home-outline"
                  color={color}
                  size={size}
                  style={{
                    height: size,
                    width: size,
                  }}
                />
              )}
              label="Home"
              onPress={() => {
                props.navigation.navigate("Home");
              }}
            />
            <DrawerItem
              icon={({ color, size }) => (
                <Icon
                  name="account-outline"
                  color={color}
                  size={size}
                  style={{
                    height: size,
                    width: size,
                  }}
                />
              )}
              label="Account"
              onPress={() => {
                props.navigation.navigate("Account");
              }}
            />
            <DrawerItem
              icon={({ color, size }) => (
                <FontAwesome
                  name="history"
                  size={size}
                  style={{
                    height: size,
                    width: size,
                    paddingLeft: 2,
                  }}
                  color={color}
                />
              )}
              label="History"
              onPress={() => {
                props.navigation.navigate("History");
              }}
            />
            <DrawerItem
              icon={({ color, size }) => (
                <Ionicons
                  name="ios-notifications"
                  size={size}
                  style={{
                    height: size,
                    width: size,
                    paddingLeft: 4,
                  }}
                  color={color}
                />
              )}
              label="Notifications"
              onPress={() => {
                props.navigation.navigate("Notifications");
              }}
            />
            <DrawerItem
              icon={({ color, size }) => (
                <Icon
                  name="account-check-outline"
                  color={color}
                  size={size}
                  style={{
                    height: size,
                    width: size,
                  }}
                />
              )}
              label="Referrals"
              onPress={() => {
                props.navigation.navigate("Referrals");
              }}
            />
            <DrawerItem
              icon={({ color, size }) => (
                <MaterialIcons
                  name="payment"
                  size={size}
                  style={{
                    height: size,
                    width: size,
                  }}
                  color={color}
                />
              )}
              label="Payment"
              onPress={() => {
                props.navigation.navigate("Payment");
              }}
            />
            <DrawerItem
              icon={({ color, size }) => (
                <FontAwesome
                  name="newspaper-o"
                  size={size}
                  style={{
                    height: size,
                    width: size,
                  }}
                  color={color}
                />
              )}
              label="Subscriptions"
              onPress={() => {
                props.navigation.navigate("Subscriptions");
              }}
            />
            <DrawerItem
              icon={({ color, size }) => (
                <Entypo
                  name="help"
                  size={size}
                  style={{
                    height: size,
                    width: size,
                  }}
                  color={color}
                />
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
            <Icon
              name="exit-to-app"
              color={color}
              size={size}
              style={{
                height: size,
                width: size,
                alignItems: "center",
                justifyContent: "center",
              }}
            />
          )}
          label="Sign Out"
          onPress={() => {
            console.log("sign out");
          }}
        />
      </View>
    </View>
  );
};

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

export default connect(null, actions)(DrawerContent);
