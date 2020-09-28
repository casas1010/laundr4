import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
  Image,
  Dimensions,
  FlatList,
} from "react-native";
import Header from "../../components/Header";
import GlobalStyles from "../../components/GlobalStyles";
import {
  WIDTH,
  FIELD_VALUE_TEXT,
  FIELD_NAME_TEXT,
} from "../../components/Items/";
import Container from "../../components/Container";
import { PLANS } from "../../components/Data";

const SubscriptionsScreen = (props) => {
  const [price, setPrice] = useState();
  const [plan, setPlan] = useState();

  useEffect(() => {
    console.log("SubscriptionsScreen loaded");
  }, []);
  // WHAT IS THE WEIGHT OF THE STUDENT PLAN?

  const setData = (item) => {
    setPrice(item.price);
    setPlan(item.planName);
    console.log("item.planName: ", item.planName);
    console.log("item.price: ", item.price);
  };

  return (
    <SafeAreaView style={GlobalStyles.droidSafeArea}>
      <Header openDrawer={props.navigation.openDrawer} name="Subscriptions" />

      <FlatList
        horizontal={false}
        data={PLANS}
        keyExtractor={(item) => item.planName}
        renderItem={({ item }) => {
          if (item.planName !== "Student") {
            return (
              <TouchableOpacity onPress={() => setData(item)}>
                <Container
                  style={{ alignItems: "center", justifyContent: "center" }}
                >
                  <Text style={FIELD_NAME_TEXT}>{item.planName}</Text>
                  <Text
                    style={[
                      FIELD_VALUE_TEXT,
                      { textAlign: "center", color: "#01c9e2" },
                    ]}
                  >
                    {item.price} /Week
                  </Text>
                  <Text style={styles.cardDetails}>
                    {item.weight} lbs monthly
                  </Text>
                </Container>
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
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({

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
