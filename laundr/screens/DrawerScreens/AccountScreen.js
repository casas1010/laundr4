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
  Dimensions,
  ScrollView,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import GlobalStyles from "../../components/GlobalStyles";
import Header from "../../components/Header";
import MenuModal from "../../components/MenuModal";

const CITY = [
  { label: "Orlando", value: "Orlando" },
  { label: "Gainsville", value: "Gainsville" },
];

const WIDTH = Dimensions.get("window").width;
const HEIGHT = Dimensions.get("window").height;
const FONTSIZE = Math.floor((HEIGHT * 0.1) / 3);

const AccountScreen = (props) => {
  // state variables
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [country, setCountry] = useState("United States");
  const [state, setState] = useState("Florida");
  const [city, setCity] = useState("Gainsville");
  const [zipCode, setZipCode] = useState();
  const [address, setAddress] = useState();
  const [number, setNumber] = useState();
  // lock variables
  const [editable, setEditable] = useState(true);
  const [lock, setLock] = useState(true);
  const [textColor, setTextColor] = useState("#990000");
  const [lockColor, setLockColor] = useState("#990000");
  // modal variables
  const [cityModalView, setCityModalView] = useState(false);

  useEffect(() => {
    console.log("AccountScreen loaded");
  }, []);

  useEffect(() => {
    setEditable(!editable);
    lock ? setTextColor("#990000") : setTextColor("black");
    lock ? setLockColor("#990000") : setLockColor("black");
  }, [lock]);
  
  
  //  MODAL VARIABLES
  const setCityHelper = (item) => {
    setCity(item);
    showModalCity();
  };
  const showModalCity = () => {
    console.log("showModalCity()");
    setCityModalView(!cityModalView);
  };
  const modalButtonHelper = () => {
    if (editable) {
      showModalCity();
    }
  };
//

  return (
    <SafeAreaView style={GlobalStyles.droidSafeArea}>
      <KeyboardAwareScrollView
        // style={{ backgroundColor: "#4c69a5" }}
        resetScrollToCoords={{ x: 0, y: 0 }}
        contentContainerStyle={styles.container}
        // scrollEnabled={false}
      >
        <Header openDrawer={props.navigation.openDrawer} name="account" />
        <TouchableOpacity
          style={[styles.lockButton, { backgroundColor: lockColor }]}
          onPress={() => setLock(!lock)}
        >
          {lock ? (
            <MaterialIcons name="lock" size={50} color="white" />
          ) : (
            <MaterialIcons name="lock-open" size={50} color="white" />
          )}
        </TouchableOpacity>

        <ScrollView>
          <View style={styles.formContainer}>
            {/*  */}
            {/*  */}
            <View style={styles.title_InputContainer}>
              <Text style={[styles.inputTitle, { color: textColor }]}>
                Name
              </Text>
              <TextInput
                editable={editable}
                value={name}
                onChangeText={(txt) => setName(txt)}
                placeholder=" Name"
                style={styles.inputBox}
              />
            </View>
            {/*  */}
            {/*  */}
            <View style={styles.title_InputContainer}>
              <Text style={[styles.inputTitle, { color: textColor }]}>
                Email
              </Text>
              <TextInput
                editable={editable}
                value={email}
                onChangeText={(txt) => setEmail(txt)}
                placeholder=" Email"
                style={styles.inputBox}
              />
            </View>
            {/*  */}
            {/*  */}
            <View style={styles.title_InputContainer}>
              <Text style={[styles.inputTitle, { color: textColor }]}>
                Password
              </Text>
              <TextInput
                editable={editable}
                value={password}
                onChangeText={(txt) => setPassword(txt)}
                placeholder=" Email"
                style={styles.inputBox}
              />
            </View>
            {/*  */}
            {/*  */}
            <View style={styles.title_InputContainer}>
              <Text style={[styles.inputTitle, { color: textColor }]}>
                Number
              </Text>

              <TextInput
                editable={editable}
                value={number}
                onChangeText={(txt) => setNumber(txt)}
                placeholder=" Number"
                style={styles.inputBox}
              />
            </View>
            {/*  */}
            {/*  */}
            <View style={styles.title_InputContainer}>
              <Text style={[styles.inputTitle, { color: textColor }]}>
                Country
              </Text>
              <TouchableOpacity>
                <TextInput
                  editable={false}
                  value={country}
                  onChangeText={(txt) => setCountry(txt)}
                  placeholder=" Country"
                  style={styles.inputBox}
                />
              </TouchableOpacity>
            </View>
            {/*  */}
            {/*  */}
            <View style={styles.title_InputContainer}>
              <Text style={[styles.inputTitle, { color: textColor }]}>
                State
              </Text>
              <Text style={styles.inputBox} >{state}</Text>
            </View>
            {/*  */}
            {/*  */}
            <View style={styles.title_InputContainer}>
              <TouchableOpacity onPress={modalButtonHelper}>
                <Text style={[styles.inputTitle, { color: textColor }]}>
                  City
                </Text>
                <Text style={styles.inputBox}>{city}</Text>
              </TouchableOpacity>
              <MenuModal
                setCardTypeHelper={setCityHelper}
                showModal={showModalCity}
                modalView={cityModalView}
                data={CITY}
              />
            </View>
            {/*  */}
            {/*  */}
            <View style={styles.title_InputContainer}>
              <Text style={[styles.inputTitle, { color: textColor }]}>
                Zip Code
              </Text>
              <TextInput
                editable={editable}
                value={zipCode}
                keyboardType="number-pad"
                onChangeText={(txt) => setZipCode(txt)}
                placeholder="Zip Code"
                style={styles.inputBox}
              />
            </View>
            {/*  */}
            {/*  */}
            <View style={styles.title_InputContainer}>
              <Text style={[styles.inputTitle, { color: textColor }]}>
                Address
              </Text>
              <TextInput
                editable={editable}
                value={name}
                onChangeText={(txt) => setAddress(txt)}
                placeholder="Address"
                style={styles.inputBox}
              />
            </View>
            {/*  */}
            {/*  */}
          </View>
        </ScrollView>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
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
    // height: 45,
    borderColor: "#d3d3d3",
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 7,
    fontSize: FONTSIZE,
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

export default AccountScreen;

// import React, { useEffect, useState } from "react";
// import {
//   Button,
//   Keyboard,
//   KeyboardAvoidingView,
//   Platform,
//   StyleSheet,
//   SafeAreaView,
//   Text,
//   TextInput,
//   TouchableWithoutFeedback,
//   View,
//   TouchableOpacity,
//   Image,
//   Dimensions,
// } from "react-native";
// import { MaterialIcons } from "@expo/vector-icons";

// import Header from "../../components/Header";

// const WIDTH = Dimensions.get("window").width;
// const HEIGHT = Dimensions.get("window").height;
// const FONTSIZE = Math.floor((HEIGHT * 0.1) / 3);

// const AccountScreen = (props) => {
//   const [name, setName] = useState();
//   const [email, setEmail] = useState();
//   const [password, setPassword] = useState();
//   const [country, setCountry] = useState();
//   const [state, setState] = useState();
//   const [city, setCity] = useState();
//   const [address, setAddress] = useState();
//   const [number, setNumber] = useState();
//   //
//   const [editable, setEditable] = useState(true);
//   const [lock, setLock] = useState(true);
//   const [textColor, setTextColor] = useState("#990000");
//   const [lockColor, setLockColor] = useState("#990000");

//   useEffect(() => {
//     console.log("AccountScreen loaded");
//   }, []);

//   useEffect(() => {
//     setEditable(!editable);
//     lock ? setTextColor("#990000") : setTextColor("black");
//     lock ? setLockColor("#990000") : setLockColor("black");
//   }, [lock]);

//   return (
//     <KeyboardAvoidingView
//       behavior={Platform.OS == "ios" ? "padding" : null}
//       style={{ flex: 1 }}
//     >
//       <View style={styles.container}>
//         <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
//           <View style={styles.inner}>
//             <Header openDrawer={props.navigation.openDrawer} name="account" />

// <TouchableOpacity
//   style={[styles.lockButton, { backgroundColor: lockColor }]}
//   onPress={() => setLock(!lock)}
// >
//   {lock ? (
//     <MaterialIcons name="lock" size={50} color="white" />
//   ) : (
//     <MaterialIcons name="lock-open" size={50} color="white" />
//   )}
// </TouchableOpacity>

//             <View style={styles.formContainer}>

// <View style={styles.title_InputContainer}>
//   <Text style={[styles.inputTitle, { color: textColor }]}>
//     Name
//   </Text>

//   <TextInput
//     editable={editable}
//     value={name}
//     onChangeText={(name) => setName(name)}
//     placeholder=" Name"
//     style={styles.inputBox}
//   />
// </View>

// <View style={styles.title_InputContainer}>
//   <Text style={[styles.inputTitle, { color: textColor }]}>
//     Email
//   </Text>
//   <TextInput
//     editable={editable}
//     value={email}
//     onChangeText={(email) => setEmail(email)}
//     placeholder=" Email"
//     style={styles.inputBox}
//   />
// </View>

// <View style={styles.title_InputContainer}>
//   <Text style={[styles.inputTitle, { color: textColor }]}>
//     Number
//   </Text>
//   <TextInput
//     editable={editable}
//     value={number}
//     onChangeText={(number) => setNumber(number)}
//     placeholder=" Number"
//     style={styles.inputBox}
//   />
// </View>

// <View style={styles.title_InputContainer}>
//   <Text style={[styles.inputTitle, { color: textColor }]}>
//     Country
//   </Text>
// </View>

// <View style={styles.title_InputContainer}>
//   <Text style={[styles.inputTitle, { color: textColor }]}>
//     State
//   </Text>
// </View>

// <View style={styles.title_InputContainer}>
//   <Text style={[styles.inputTitle, { color: textColor }]}>
//     City
//   </Text>
// </View>

// <View style={styles.title_InputContainer}>
//   <Text style={[styles.inputTitle, { color: textColor }]}>
//     Address
//   </Text>
//   <TextInput
//     editable={editable}
//     value={name}
//     onChangeText={(address) => setAddress(address)}
//     placeholder=" Address"
//     style={styles.inputBox}
//   />
// </View>
//             </View>
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
//     paddingBottom: 24,
//     flex: 1,
//     justifyContent: "flex-end",
//   },
//   formContainer: {
//     backgroundColor: "white",
//     borderColor: "white",
//     borderWidth: 1,
//     borderRadius: 15,
//     margin: WIDTH * 0.06,
//     padding: 10,
//     width: WIDTH * 0.88,
//   },
//   title_InputContainer: {
//     marginTop: 10,
//     marginBottom: 10,
//   },
//   inputTitle: {
//     marginBottom: 5,
//     fontSize: FONTSIZE,
//     fontWeight: "bold",
//     // color:'red'
//   },
//   inputBox: {
//     width: "100%",
//     // height: 45,
//     borderColor: "#d3d3d3",
//     borderWidth: 1,
//     borderRadius: 5,
//     paddingLeft: 7,
//     fontSize: FONTSIZE,
//   },
//   lockContainer: {
//     width: WIDTH,
//     // backgroundColor: "red",
//     alignItems: "center",
//   },
//   lockButton: {
//     position: "absolute",
//     alignItems: "center",
//     justifyContent: "center",
//     right: 0,
//     top: HEIGHT * 0.1,
//     zIndex: 2,
//     height: 80,
//     width: 80,
//     borderRadius: 80,
//     backgroundColor: "black",
//   },
// });

// export default AccountScreen;
