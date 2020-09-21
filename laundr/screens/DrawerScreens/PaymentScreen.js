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
  //   Picker,
  Dimensions,
  ScrollView
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import Header from "../../components/Header";
// import { Picker } from "@react-native-community/picker";
// import RNPickerSelect from "react-native-picker-select";
import DropDownPicker from "react-native-dropdown-picker";

const WIDTH = Dimensions.get("window").width;
const HEIGHT = Dimensions.get("window").height;
const FONTSIZE = Math.floor((HEIGHT * 0.1) / 3);

const CARDS = [
  { label: "Visa", value: "Visa" },
  { label: "Amex", value: "Amex" },
  { label: "Master Card", value: "Master Card" },
  { label: "Discover", value: "Discover" },
];

const PaymentScreen = (props) => {
  const [cardHName, setCardHName] = useState();
  const [cardNum, setCardNum] = useState();
  const [cardType, setCardType] = useState("uk");
  const [ccvNum, setccvNum] = useState();
  const [month, setMonth] = useState();
  const [year, setYear] = useState();

  useEffect(() => {
    console.log("AccountScreen loaded");
  }, []);

  return (
      <View style={{height:HEIGHT*2,backgroundColor:'red'}}>

      
    <ScrollView >
      <KeyboardAvoidingView
        // behavior={Platform.OS == "ios" ? "padding" : null}
        behavior="position"
        enabled={true}
        style={{ flex: 1 }}
      >
        <Header openDrawer={props.navigation.openDrawer} name="Payments" />
        <View style={styles.container}>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.formContainer}>
              <View style={styles.title_InputContainer}>
                <Text style={styles.inputTitle}>Card Holder Name</Text>

                <TextInput
                  value={cardHName}
                  onChangeText={(txt) => setCardHName(txt)}
                  placeholder="Card Holder Name"
                  style={styles.inputBox}
                />
              </View>

              <View style={styles.title_InputContainer}>
                <Text style={styles.inputTitle}>Card Number</Text>

                <TextInput
                  value={cardHName}
                  onChangeText={(txt) => setCardNum(txt)}
                  placeholder="Card Number"
                  style={styles.inputBox}
                />
              </View>

              <>
                <Text style={styles.inputTitle}>Card Type</Text>
                <View
                  style={{
                    // The solution: Apply zIndex to any device except Android
                    ...(Platform.OS !== "android" && {
                      zIndex: 10,
                    }),
                  }}
                >
                  <DropDownPicker
                    items={CARDS}
                    placeholder="Select a country"
                    containerStyle={{ height: 40 }}
                    style={{ backgroundColor: "#ffffff" }}
                    dropDownStyle={{ backgroundColor: "white" }}
                  />
                </View>
              </>

              <View style={styles.title_InputContainer}>
                <Text style={styles.inputTitle}>CVV Number</Text>

                <TextInput
                  value={cardHName}
                  onChangeText={(txt) => setccvNum(txt)}
                  placeholder="CVV"
                  style={styles.inputBox}
                />
              </View>

              <View style={styles.title_InputContainer}>
                <Text style={styles.inputTitle}>Month</Text>
              </View>

              <>
                <Text style={styles.inputTitle}>Year</Text>
                <View
                  style={{
                    // The solution: Apply zIndex to any device except Android
                    ...(Platform.OS !== "android" && {
                      zIndex: 10,
                    }),
                  }}
                >
                  <DropDownPicker
                    items={CARDS}
                    placeholder="Select a country"
                    containerStyle={{ height: 40 }}
                    style={{ backgroundColor: "#ffffff" }}
                    dropDownStyle={{ backgroundColor: "white" }}
                  />
                </View>
              </>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  twoPickers: {
    width: 200,
    height: 88,
    backgroundColor: "#FFF0E0",
    borderColor: "black",
    borderWidth: 1,
  },
  twoPickerItems: {
    height: 88,
    color: "red",
  },

  container: {
    flex: 1,
  },
  inner: {
    paddingBottom: 24,
    flex: 1,
    justifyContent: "flex-end",
  },
  formContainer: {
    backgroundColor: "white",
    borderColor: "white",
    borderWidth: 1,
    borderRadius: 15,
    margin: WIDTH * 0.06,
    padding: 10,
    width: WIDTH * 0.88,
  },
  title_InputContainer: {
    marginTop: 10,
    marginBottom: 10,
  },
  inputTitle: {
    marginBottom: 5,
    fontSize: FONTSIZE,
    fontWeight: "bold",
    // color:'red'
  },
  inputBox: {
    width: "100%",
    // height: 30,
    borderColor: "#d3d3d3",
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 7,
    fontSize: FONTSIZE,
    marginTop: 5,
    marginBottom: 5,
  },
  lockContainer: {
    width: WIDTH,
    // backgroundColor: "red",
    alignItems: "center",
  },
  lockButton: {
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    right: 0,
    top: HEIGHT * 0.1,
    zIndex: 2,
    height: 80,
    width: 80,
    borderRadius: 80,
    backgroundColor: "black",
  },
});

export default PaymentScreen;
