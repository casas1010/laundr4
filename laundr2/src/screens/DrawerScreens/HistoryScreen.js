/*
code clean up 100% complete
wire up actions

preview screen should not have a pic

*/

import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  SafeAreaView,
  Text,
  View,
  FlatList,
  TextInput,
  TouchableOpacity
} from "react-native";

import { connect } from "react-redux";
import { HEIGHT, WIDTH, SHADOW } from "../../components/Items/";


import GlobalStyles from "../../components/GlobalStyles";
import Header from "../../components/Header";
import Container from "../../components/Container";
import { DIVIDER } from "../../components/Items/";
import { Entypo } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

const HistoryScreen = (props) => {
  const [address, setAddress] = useState();

  useEffect(() => {
    console.log("HistoryScreen loaded");
    console.log("props.history:  ", props.history[0]);
  }, []);

  return (
    <SafeAreaView style={GlobalStyles.droidSafeArea}>
      <Header openDrawer={props.navigation.openDrawer} name="History" />

      <View style={styles.searchBoxContainer}>
        <FontAwesome5
          name="search-location"
          size={18}
          color="black"
          style={styles.icon}
        />
        <TextInput
          value={address}
          onChangeText={(txt_address) => {
            setAutoCompletePossibleLocations({
              ...autoCompletePossibleLocations,
              display: true,
            });
            setAddress(txt_address);
          }}
          placeholder="Address"
          style={styles.addressTextInput}
          returnKeyLabel={"Search"}
          onFocus={() =>
            setAutoCompletePossibleLocations({
              ...autoCompletePossibleLocations,
              display: true,
            })
          }
        />
        <TouchableOpacity
          style={{ alignItems: "center", justifyContent: "center" }}
          onPress={() => {
            setAutoCompletePossibleLocations({ display: false, array: [] });
            setAddress("");
          }}
        >
          <Feather
            name="x"
            size={24}
            color="black"
            // style={{ backgroundColor: "red" }}
          />
        </TouchableOpacity>
      </View>

      <FlatList
        data={props.history}
        keyExtractor={(item) => item.orderID}
        horizontal={false}
        contentContainerStyle={{ paddingBottom: 100 }}
        renderItem={({ item }) => {
          return (
            <Container style={{ padding: 0, position: "relative" }}>
              {/*  */}
              <View
                style={[
                  styles.fieldContainer,
                  {
                    backgroundColor: "#5bcae2",
                    borderTopEndRadius: 15,
                    borderTopStartRadius: 15,
                    paddingTop: 16,
                    paddingBottom: 16,
                    position: "absolute",
                    top: -10,
                  },
                ]}
              >
                <View style={styles.fieldNameContainer}>
                  <Text style={styles.fieldNameTxT}>Order ID</Text>
                </View>
                <View style={styles.fieldValueContainer}>
                  <Text style={styles.fieldValueTxT}>
                    {item.orderInfo.orderID}
                  </Text>
                </View>
              </View>
              {/*  */}
              {/*  */}
              <View style={[styles.fieldContainer, { paddingTop: 50 }]}>
                <View style={styles.fieldNameContainer}>
                  <Text style={styles.fieldNameTxT}>Order Date</Text>
                </View>
                <View style={styles.fieldValueContainer}>
                  <Text style={styles.fieldValueTxT}>
                    {item.orderInfo.created.slice(0, 10)}
                  </Text>
                </View>
              </View>
              {/*  */}
              {/*  */}
              <View style={styles.fieldContainer}>
                <View style={styles.fieldNameContainer}>
                  {/* <Text style={styles.fieldNameTxT}>{item.card.cardType}</Text> */}
                </View>
                <View style={styles.fieldValueContainer}>
                  {/* <Text style={styles.fieldValueTxT}>{item.card.charge}</Text> */}
                </View>
              </View>
              {/*  */}
              {/*  */}
              <View style={styles.fieldContainer}>
                <View style={styles.fieldNameContainer}>
                  <Text style={styles.fieldNameTxT}>Status</Text>
                </View>
                <View style={styles.fieldValueContainer}>
                  <Text style={styles.fieldValueTxT}>
                    {item.orderInfo.status == "7" ? "Cancelled" : "Complete"}
                  </Text>
                </View>
              </View>
              {/*  */}
              <DIVIDER />
              {/*  */}
              <View style={styles.fieldContainer}>
                <View style={styles.fieldNameContainer}>
                  <Text style={styles.fieldNameTxT}>Address</Text>
                </View>
                <View style={styles.fieldValueContainer}>
                  <View style={{ flexDirection: "column" }}>
                    <View style={styles.addressCustomContainer}>
                      <Text style={styles.fieldValueTxT}>
                        {item.orderInfo.address}
                      </Text>
                    </View>

                    {/* <View style={styles.addressCustomContainer}>
                      <Text style={styles.fieldValueTxT}>
                        {item.address.city},{item.address.state},
                        {item.address.zipCode}
                      </Text>
                    </View>

                    <View style={styles.addressCustomContainer}>
                      <Text style={styles.fieldValueTxT}>
                        {item.address.country}
                      </Text>
                    </View> */}
                  </View>
                </View>
              </View>
              {/*  */}
              {/*  */}
              <View style={styles.fieldContainer}>
                <View style={styles.fieldNameContainer}>
                  <Text style={styles.fieldNameTxT}>Pick-Up Time</Text>
                </View>
                <View style={styles.fieldValueContainer}>
                  <View style={{ flexDirection: "column" }}>
                    <Text style={styles.fieldValueTxT}>
                      {item.pickupInfo.date}
                    </Text>
                    <Text style={styles.fieldValueTxT}>
                      {item.pickupInfo.time}
                    </Text>
                  </View>
                </View>
              </View>
              {/*  */}
              {/*  */}
              <View style={styles.fieldContainer}>
                <View style={styles.fieldNameContainer}>
                  <Text style={styles.fieldNameTxT}>Delivery Time</Text>
                </View>
                <View style={styles.fieldValueContainer}>
                  <Text style={styles.fieldValueTxT}>
                    {item.dropoffInfo.time}
                  </Text>
                  <Text style={styles.fieldValueTxT}>
                    {item.dropoffInfo.date}
                  </Text>
                </View>
              </View>
              {/*  */}
              <DIVIDER />
              {/*  */}
              <View style={styles.fieldContainer}>
                <View style={styles.fieldNameContainer}>
                  <Text style={styles.fieldNameTxT}>Preference</Text>
                </View>
                <View
                  style={[
                    styles.fieldValueContainer,
                    { flexDirection: "column", alignItems: "flex-end" },
                  ]}
                >
                  <Text style={styles.fieldValueTxT}>
                    {(item.washerInfo.delicates = true ? "delicates" : null)}
                  </Text>
                  <Text style={styles.fieldValueTxT}>
                    {(item.washerInfo.scented = true ? "scented" : null)}
                  </Text>
                  <Text style={styles.fieldValueTxT}>
                    {(item.washerInfo.separate = true ? "separate" : null)}
                  </Text>
                  <Text style={styles.fieldValueTxT}>
                    {
                      (item.washerInfo.towelsSheets = true
                        ? "towelsSheets"
                        : null)
                    }
                  </Text>
                  <Text style={styles.fieldValueTxT}>
                    {item.washerInfo.towelsSheets.prefs}
                  </Text>
                </View>
              </View>
              {/*  */}
              {/*  */}
              <View style={styles.fieldContainer}>
                <View style={styles.fieldNameContainer}>
                  <Text style={styles.fieldNameTxT}>Weight</Text>
                </View>
                <View style={styles.fieldValueContainer}>
                  <Text style={styles.fieldValueTxT}>
                    {item.orderInfo.weight}
                  </Text>
                </View>
              </View>
              {/*  */}
              {/*  */}
            </Container>
          );
        }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  searchBoxContainer: {
    flexDirection: "row",
    paddingLeft: 15,
    paddingRight: 15,
    height: 50,
    width: "100%",
    borderWidth: 1,
    borderRadius: 20,
    borderColor: "#f9f9f9",
    backgroundColor: "#f9f9f9",
    ...SHADOW,
  },
  icon: {
    width: 20,
    marginTop: 15,
    marginBottom: 15,
  },
  addressTextInput: {
    width: "85%",
    height: 45,
    paddingLeft: 10,
  },
  fieldContainer: {
    flexDirection: "row",
    marginBottom: 5,
    marginTop: 5,
  },
  fieldNameContainer: {
    width: "35%",
  },
  fieldNameTxT: {
    fontSize: 15,
    fontWeight: "bold",
    paddingLeft: 10,
  },
  fieldValueContainer: {
    width: "65%",
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  fieldValueTxT: {
    fontSize: 12,
    fontWeight: "bold",
    paddingRight: 10,
  },
  addressCustomContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },

  dividerContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  divider: {
    height: 1,
    width: "95%",
    backgroundColor: "grey",
  },
});

function mapStateToProps({ history }) {
  return { history };
}

export default connect(mapStateToProps)(HistoryScreen);
