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
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import Header from "../../components/Header";

const WIDTH = Dimensions.get("window").width;
const HEIGHT = Dimensions.get("window").height;
const FONTSIZE = Math.floor((HEIGHT * 0.1) / 3);

const AccountScreen = (props) => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [country, setCountry] = useState();
  const [state, setState] = useState();
  const [city, setCity] = useState();
  const [address, setAddress] = useState();
  const [number, setNumber] = useState();
  //
  const [editable, setEditable] = useState(true);
  const [lock, setLock] = useState(true);
  const [textColor, setTextColor] = useState("#990000");
  const [lockColor, setLockColor] = useState("#990000");

  useEffect(() => {
    console.log("AccountScreen loaded");
  }, []);

  useEffect(() => {
    setEditable(!editable);
    lock ? setTextColor("#990000") : setTextColor("black");
    lock ? setLockColor("#990000") : setLockColor("black");
  }, [lock]);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == "ios" ? "padding" : null}
      style={{ flex: 1 }}
    >
      <View style={styles.container}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.inner}>
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

            <View style={styles.formContainer}>
              
              <View style={styles.title_InputContainer}>
                <Text style={[styles.inputTitle, { color: textColor }]}>
                  Name
                </Text>

                <TextInput
                  editable={editable}
                  value={name}
                  onChangeText={(name) => setName(name)}
                  placeholder=" Name"
                  style={styles.inputBox}
                />
              </View>

              <View style={styles.title_InputContainer}>
                <Text style={[styles.inputTitle, { color: textColor }]}>
                  Email
                </Text>
                <TextInput
                  editable={editable}
                  value={email}
                  onChangeText={(email) => setEmail(email)}
                  placeholder=" Email"
                  style={styles.inputBox}
                />
              </View>

              <View style={styles.title_InputContainer}>
                <Text style={[styles.inputTitle, { color: textColor }]}>
                  Number
                </Text>
                <TextInput
                  editable={editable}
                  value={number}
                  onChangeText={(number) => setNumber(number)}
                  placeholder=" Number"
                  style={styles.inputBox}
                />
              </View>

              <View style={styles.title_InputContainer}>
                <Text style={[styles.inputTitle, { color: textColor }]}>
                  Country
                </Text>
              </View>

              <View style={styles.title_InputContainer}>
                <Text style={[styles.inputTitle, { color: textColor }]}>
                  State
                </Text>
              </View>

              <View style={styles.title_InputContainer}>
                <Text style={[styles.inputTitle, { color: textColor }]}>
                  City
                </Text>
              </View>

              <View style={styles.title_InputContainer}>
                <Text style={[styles.inputTitle, { color: textColor }]}>
                  Address
                </Text>
                <TextInput
                  editable={editable}
                  value={name}
                  onChangeText={(address) => setAddress(address)}
                  placeholder=" Address"
                  style={styles.inputBox}
                />
              </View>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </View>
    </KeyboardAvoidingView>
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
