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
import MenuModal from "../../components/MenuModal";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import GlobalStyles from "../../components/GlobalStyles";

const WIDTH = Dimensions.get("window").width;
const HEIGHT = Dimensions.get("window").height;
const FONTSIZE = Math.floor((HEIGHT * 0.1) / 3);

const CARDS = [
  { label: "Visa", value: "Visa" },
  { label: "Amex", value: "Amex" },
  { label: "Master Card", value: "Master Card" },
  { label: "Discover", value: "Discover" },
];
const MONTHS = [
  { label: "1 January", value: "1 January" },
  { label: "2 February", value: "2 February" },
  { label: "3 March", value: "3 March" },
  { label: "4 April", value: "4 April" },
  { label: "5 May", value: "5 May" },
  { label: "6 June", value: "6 June" },
  { label: "7 July", value: "7 July" },
  { label: "8 August", value: "8 August" },
  { label: "9 September", value: "9 September" },
  { label: "10 October", value: "10 October" },
  { label: "11 November", value: "11 November" },
  { label: "12 December", value: "12 December" },
];

const year = new Date().getFullYear(); //To get the Current Year
const YEARS = [
  { label: year.toString(), value: year.toString() },
  { label: (year + 1).toString(), value: (year + 1).toString() },
  { label: (year + 2).toString(), value: (year + 2).toString() },
  { label: (year + 3).toString(), value: (year + 3).toString() },
];

const PaymentScreen = (props) => {
  const [cardHName, setCardHName] = useState("");
  const [cardNum, setCardNum] = useState("");
  const [cardType, setCardType] = useState("Visa");
  const [ccvNum, setccvNum] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");

  // modal variables
  const [cardModalView, setCardModalView] = useState(false);
  const [monthModalView, setMonthModalView] = useState(false);
  const [yearModalView, setYearModalView] = useState(false);

  useEffect(() => {
    console.log("AccountScreen loaded");
  }, []);

  //  MODAL VARIABLES
  // card type
  const setCardHelper = (item) => {
    setCardType(item);
    showModalCard();
  };
  const showModalCard = () => {
    console.log("showModalCard()");
    setCardModalView(!cardModalView);
  };
  const modalCardButtonHelper = () => {
    showModalCard();
  };
  //
  // month
  const setMonthHelper = (item) => {
    setMonth(item);
    showModalMonth();
  };
  const showModalMonth = () => {
    console.log("showModalMonth()");
    setMonthModalView(!monthModalView);
  };
  const modalMonthButtonHelper = () => {
    showModalMonth();
  };
  //
  // year
  const setYearHelper = (item) => {
    setYear(item);
    showModalYear();
  };
  const showModalYear = () => {
    console.log("showModalYear()");
    setYearModalView(!yearModalView);
  };
  const modalYearButtonHelper = () => {
    showModalYear();
  };
  //
  return (
    <SafeAreaView style={GlobalStyles.droidSafeArea}>
      <Header openDrawer={props.navigation.openDrawer} name="Payment" />
      <KeyboardAwareScrollView
        // style={{ backgroundColor: "#4c69a5" }}
        resetScrollToCoords={{ x: 0, y: 0 }}
        contentContainerStyle={styles.container}
        // scrollEnabled={true}
      >
        <View style={styles.formContainer}>
          {/*  */}
          {/*  */}
          <View style={styles.title_InputContainer}>
            <Text style={styles.inputTitle}>Card Holder Name</Text>
            <TextInput
              value={cardHName}
              onChangeText={(txt) => setCardHName(txt)}
              placeholder="Card Holder Name"
              style={styles.inputBox}
            />
          </View>
          {/*  */}
          {/*  */}
          <View style={styles.title_InputContainer}>
            <Text style={styles.inputTitle}>Card Number</Text>

            <TextInput
              value={cardHName}
              onChangeText={(txt) => setCardNum(txt)}
              placeholder="Card Number"
              style={styles.inputBox}
            />
          </View>
          <View>
            {/*  */}
            {/*  */}
            <View style={styles.title_InputContainer}>
              <TouchableOpacity onPress={modalCardButtonHelper}>
                <Text style={styles.inputTitle}>Card Type</Text>
                <Text style={styles.inputBox}>{cardType}</Text>
              </TouchableOpacity>
              <MenuModal
                setCardTypeHelper={setCardHelper}
                showModal={showModalCard}
                modalView={cardModalView}
                data={CARDS}
              />
            </View>
            {/*  */}
            {/*  */}
            <View style={styles.title_InputContainer}>
              <Text style={styles.inputTitle}>CCV</Text>

              <TextInput
                value={ccvNum}
                onChangeText={(txt) => setccvNum(txt)}
                placeholder="CCV"
                style={styles.inputBox}
              />
            </View>
            {/*  */}
            {/*  */}
            <View style={styles.title_InputContainer}>
              <TouchableOpacity onPress={modalMonthButtonHelper}>
                <Text style={styles.inputTitle}>Month</Text>
                <Text style={styles.inputBox}>{month}</Text>
              </TouchableOpacity>
              <MenuModal
                setCardTypeHelper={setMonthHelper}
                showModal={showModalMonth}
                modalView={monthModalView}
                data={MONTHS}
              />
            </View>
            {/*  */}
            {/*  */}
            <View style={styles.title_InputContainer}>
              <TouchableOpacity onPress={modalYearButtonHelper}>
                <Text style={styles.inputTitle}>Year</Text>
                <Text style={styles.inputBox}>{year}</Text>
              </TouchableOpacity>
              <MenuModal
                setCardTypeHelper={setYearHelper}
                showModal={showModalYear}
                modalView={yearModalView}
                data={YEARS}
              />
            </View>
            {/*  */}
            {/*  */}
          </View>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
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
