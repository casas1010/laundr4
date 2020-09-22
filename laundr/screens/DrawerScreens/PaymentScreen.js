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

const PaymentScreen = (props) => {
  const [cardHName, setCardHName] = useState();
  const [cardNum, setCardNum] = useState();
  const [cardType, setCardType] = useState("js");
  const [ccvNum, setccvNum] = useState();
  const [month, setMonth] = useState();
  const [year, setYear] = useState();
  const [modalView, setModalView] = useState(false);

  useEffect(() => {
    console.log("AccountScreen loaded");
  }, []);

  const showModal = () => {
    setModalView(!modalView);
  };

  const setCardTypeHelper = (item) => {
    // console.log("before:: cardType: ", cardType);
    setCardType(item);
    showModal();
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : null}
      style={{ flex: 1 }}
    >
      <SafeAreaView style={styles.container}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.inner}>
            <Header openDrawer={props.navigation.openDrawer} name="Payment" />
            <View style={styles.formContainer}>
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
                <Button title="modalView" onPress={showModal} />
                <MenuModal
                  setCardTypeHelper={setCardTypeHelper}
                  showModal={showModal}
                  modalView={modalView}
                  data={CARDS}
                />
              </View>

              {/*  */}
            </View>
            <View style={{ flex: 1 }} />
          </View>
        </TouchableWithoutFeedback>
      </SafeAreaView>
    </KeyboardAvoidingView>
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

// import React, { Component, useEffect, useState } from "react";
// import {
//   Button,
//   Keyboard,
//   KeyboardAvoidingView,
//   Platform,
//   SafeAreaView,
//   StyleSheet,
//   Text,
//   TextInput,
//   TouchableWithoutFeedback,
//   View,
// } from "react-native";

// const PaymentScreen = () => {
//   useEffect(() => {
//     console.log("AccountScreen loaded");
//   }, []);

//   const [cardHName, setCardHName] = useState();
//   const [cardNum, setCardNum] = useState();
//   const [cardType, setCardType] = useState("uk");
//   const [ccvNum, setccvNum] = useState();
//   const [month, setMonth] = useState();
//   const [year, setYear] = useState();

//   return (
//     <KeyboardAvoidingView
//       behavior={Platform.OS === "ios" ? "padding" : "height"}
//       style={{ flex: 1 }}
//     >
//       <View style={styles.container}>
//         <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
//           <View style={styles.inner}>

//           <View style={styles.title_InputContainer}>
//                 <Text style={styles.inputTitle}>Card Holder Name</Text>

//                 <TextInput
//                   value={cardHName}
//                   onChangeText={(txt) => setCardHName(txt)}
//                   placeholder="Card Holder Name"
//                   style={styles.inputBox}
//                 />
//               </View>

//             <View style={{ flex: 1 }} />
//           </View>
//         </TouchableWithoutFeedback>
//       </View>
//     </KeyboardAvoidingView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   inner: {
//     padding: 24,
//     flex: 1,
//     justifyContent: "flex-end",
//   },
//   header: {
//     fontSize: 36,
//     marginBottom: 48,
//   },
//   input: {
//     height: 40,
//     borderColor: "#000000",
//     borderBottomWidth: 1,
//     marginBottom: 36,
//   },
//   btnContainer: {
//     backgroundColor: "white",
//     marginTop: 12,
//   },
//     title_InputContainer: {
//     marginTop: 10,
//     marginBottom: 10,
//   },
// });

// export default PaymentScreen;

// <View style={styles.title_InputContainer}>
// <Text style={styles.inputTitle}>Card Holder Name</Text>

// <TextInput
//   value={cardHName}
//   onChangeText={(txt) => setCardHName(txt)}
//   placeholder="Card Holder Name"
//   style={styles.inputBox}
// />
// </View>

{
  /* <View style={styles.title_InputContainer}>
<Text style={styles.inputTitle}>Card Number</Text>

<TextInput
  value={cardHName}
  onChangeText={(txt) => setCardNum(txt)}
  placeholder="Card Number"
  style={styles.inputBox}
/>
</View> */
}

{
  /* <>
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
</> */
}

// <View style={styles.title_InputContainer}>
// <Text style={styles.inputTitle}>CVV Number</Text>

// <TextInput
//   value={cardHName}
//   onChangeText={(txt) => setccvNum(txt)}
//   placeholder="CVV"
//   style={styles.inputBox}
// />
// </View>

// <View style={styles.title_InputContainer}>
// <Text style={styles.inputTitle}>Month</Text>
// </View>

// <>
// <Text style={styles.inputTitle}>Year</Text>
// <View
//   style={{
//     // The solution: Apply zIndex to any device except Android
//     ...(Platform.OS !== "android" && {
//       zIndex: 10,
//     }),
//   }}
// >
//   <DropDownPicker
//     items={CARDS}
//     placeholder="Select a country"
//     containerStyle={{ height: 40 }}
//     style={{ backgroundColor: "#ffffff" }}
//     dropDownStyle={{ backgroundColor: "white" }}
//   />
// </View>
// </>
