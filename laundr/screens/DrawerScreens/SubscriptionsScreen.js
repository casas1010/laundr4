import React, { useEffect, useState } from "react";
import {
  Button,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  SafeAreaView,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
  TouchableOpacity,
  Image,
  Modal,
  Picker,
  Dimensions,
  ScrollView,
  FlatList,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import Header from "../../components/Header";
// import { Picker } from "@react-native-community/picker";

import MenuModal from "../../components/MenuModal";
// import DropDownPicker from "react-native-dropdown-picker";

const WIDTH = Dimensions.get("window").width;
const HEIGHT = Dimensions.get("window").height;
const FONTSIZE = Math.floor((HEIGHT * 0.1) / 3);

const CARDS = [
  { label: "Visa", value: "Visa" },
  { label: "Amex", value: "Amex" },
  { label: "Master Card", value: "Master Card" },
  { label: "Discover", value: "Discover" },
];

const SubscriptionsScreen = (props) => {
  const [price, setPrice] = useState();
  const [plan, setPlan] = useState();

  useEffect(() => {
    console.log("SubscriptionsScreen loaded");
  }, []);
  // WHAT IS THE WEIGHT OF THE STUDENT PLAN?
  const PLANS = [
    { planName: "Standard", price: 15, weight: 48 },
    { planName: "Plus", price: 20, weight: 66 },
    { planName: "Family", price: 25, weight: 84 },
    { planName: "Student", price: 10, weight: 48 },
  ];

  const setData = (item) => {
    setPrice(item.price);
    setPlan(item.planName);
    console.log("item.planName: ", item.planName);
    console.log("item.price: ", item.price);
  };

  return (
    <>
      <Header openDrawer={props.navigation.openDrawer} name="Subscriptions" />
      <FlatList
        horizontal={false}
        data={PLANS}
        keyExtractor={(item) => item.planName}
        renderItem={({ item }) => {
          if (item.planName !== "Student") {
            return (
              <TouchableOpacity
                style={styles.cardContainer}
                onPress={() => setData(item)}
              >
                <Text style={styles.cardTitle}>{item.planName}</Text>
                <Text style={styles.cardPrice}>{item.price} /Week</Text>
                <Text style={styles.cardDetails}>
                  {item.weight} lbs monthly
                </Text>
              </TouchableOpacity>
            );
          }
          return (
            <TouchableOpacity
              style={styles.studentCardContainer}
              onPress={() => setData(item)}
            >
              <View>
                <Text style={styles.footerTitle}>The Student Plan!</Text>
                <Text style={styles.footerDetails}>
                  {item.price}/wk with valid student ID
                </Text>
              </View>

              <View style={styles.studentImageContainer}>
                <Image
                  style={styles.studentImage}
                  resizeMode="contain"
                  source={require("../../assets/Minimalist.png")}
                />
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: "white",
    borderColor: "white",
    borderWidth: 1,
    borderRadius: 15,
    margin: WIDTH * 0.06,
    marginBottom: 15,
    padding: 10,
    width: WIDTH * 0.88,
    alignItems: "center",
    justifyContent: "center",
  },
  cardTitle: {
    fontWeight: "bold",
    color: "grey",
    fontSize: 20,
  },
  cardPrice: {
    fontWeight: "bold",
    color: "#01c9e2",
    fontSize: 15,
  },
  cardDetails: {},
  studentCardContainer: {
    backgroundColor: "#01c9e2",
    borderColor: "#01c9e2",
    borderWidth: 1,
    borderRadius: 15,
    margin: WIDTH * 0.06,
    width: WIDTH * 0.88,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  innerFooter: {},
  footerTitle: {
    fontWeight: "bold",
    color: "white",
    fontSize: 20,
  },
  footerDetails: {},
  studentImageContainer: {
    width: "30%",
    height: 90,
  },
  studentImage: {
    height: "100%",
    width: "100%",
  },
});

export default SubscriptionsScreen;
