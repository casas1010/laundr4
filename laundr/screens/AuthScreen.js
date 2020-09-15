import React, { Component, useState } from "react";
import {
  Button,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
  TouchableOpacity,
  Image,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import RNPickerSelect from "react-native-picker-select";

const ITEMS = [
  { label: "User", value: "User" },
  { label: "Washer", value: "Washer" },
  { label: "Driver", value: "Driver" },
];

const AuthScreen = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState();

  const logInFlow = () => {
    console.log(`login initiated with the following:`);
    console.log(`email: ${email}`);
    console.log(`password: ${password}`);
    console.log(`userType: ${userType}`);

    // PERFORM API CALL
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : null}
      style={{ flex: 1 }}
    >
      <View style={styles.masterContainer}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.inner}>
            <Image style={styles.logo} source={require("../assets/logo.png")} />

            <RNPickerSelect
              placeholder={{}}
              onValueChange={(value) => setUserType(value)}
              items={ITEMS}
              style={pickerSelectStyles}
            />

            <View style={styles.formContainer}>
              <View style={styles.emailContainer}>
                <MaterialIcons
                  name="person"
                  size={24}
                  color="black"
                  style={[styles.icon, { paddingTop: 3 }]}
                />
                <TextInput
                  value={email}
                  onChangeText={(email) => setEmail(email)}
                  placeholder=" Email"
                  style={styles.inputBox}
                />
              </View>

              <View style={styles.passwordContainer}>
                <FontAwesome5
                  name="unlock-alt"
                  size={18}
                  color="black"
                  style={[styles.icon, { paddingLeft: 3, paddingTop: 5 }]}
                />
                <TextInput
                  value={password}
                  onChangeText={(password) => setPassword(password)}
                  secureTextEntry={true}
                  placeholder=" Password"
                  style={styles.inputBox}
                />
              </View>
            </View>
            <View style={styles.buttonsContainer}>
              <TouchableOpacity style={styles.button} onPress={logInFlow}>
                <Text style={styles.buttonText}>LOG IN</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.button}
                onPress={() => console.log(props.navigation.navigate("signUp"))}
              >
                <Text style={styles.buttonText}>SIGN UP</Text>
              </TouchableOpacity>

              <TouchableOpacity>
                <Text style={styles.buttonText}>Forgot Password?</Text>
              </TouchableOpacity>
            </View>

            <View style={{ flex: 1 }} />
          </View>
        </TouchableWithoutFeedback>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  masterContainer: {
    flex: 1,
    backgroundColor: "#f9f9f9",
  },
  inner: {
    padding: 24,
    flex: 1,
    justifyContent: "flex-end",
  },
  logo: {
    marginTop: 35,
    marginBottom: 30,
  },
  formContainer:{
    borderColor: "white",
    backgroundColor: 'white',
    borderWidth: 1,
    borderRadius: 15,
    paddingTop: 20,
    paddingBottom:20

  },
  userTypeBox: {
    borderColor: "red",
    borderWidth: 1,
    width: 57,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  emailContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  inputBox: {
    width: 110,
    height: 45,
    borderColor: "#d3d3d3",
    borderWidth: 1,
    borderRadius: 5,
    width: 200,
  },

  icon: {
    height: 30,
    width: 30,
  },
  passwordContainer: {
    padding: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonsContainer: {
    alignItems: "center",
  },
  button: {
    alignItems: "center",
    backgroundColor: "#01c9e2",
    margin: 10,
    // height: 20,
    width: 250,
    borderRadius: 10,
  },
  buttonText: {
    padding: 10,
    fontSize: 15,
  },
});

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: "#ebebeb",
    borderRadius: 4,
    color: "black",
    width: 80,
    marginBottom: 5,
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderColor: "#ebebeb",
    borderRadius: 8,
    color: "black",
    width: 80,
    marginBottom: 5,
  },
});

export default AuthScreen;
