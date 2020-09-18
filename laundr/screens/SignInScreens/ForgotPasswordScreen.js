import React, { useState, useEffect } from "react";
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  Dimensions,
  Alert,
} from "react-native";
import RNPickerSelect from "react-native-picker-select";

const WIDTH = Dimensions.get("window").width;
const USERTYPES = [
  { label: "User", value: "User" },
  { label: "Washer", value: "Washer" },
  { label: "Driver", value: "Driver" },
];

const ForgotPasswordScreen = (props) => {
  const [email, setEmail] = useState("");
  const [userType, setUserType] = useState("");

  const forgotPasswordAPI = () => {
    console.log("API SignUp initiated");
  };

  return (
    <View style={styles.masterContainer}>
      <View style={styles.formContainer}>
        <Text style={styles.text}>Email:</Text>

        <TextInput
          style={styles.inputBox}
          onChangeText={(text) => setEmail(text)}
          placeholder="dirty@laundry.com"
          textContentType="emailAddress"
          autoCompleteType="email"
          autoCorrect={false}
          keyboardType="email-address"
        />

        <RNPickerSelect
          placeholder={{}}
          onValueChange={(value) => setUserType(value)}
          items={USERTYPES}
          style={pickerSelectStyles}
        />
      </View>

      <View style={styles.masterButtonContainer}>
        <View style={styles.buttonContainer}>
          <Button
            onPress={() => props.navigation.navigate("auth")}
            title="Return"
            color="darkblue"
          />
        </View>

        <View style={styles.buttonContainer}>
          <Button onPress={forgotPasswordAPI} title="Submit" color="darkblue" />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  masterContainer: {
    backgroundColor: "#f4f4f4",
    flex: 1,
  },
  formContainer: {
    backgroundColor: "white",
    borderColor: "white",
    height: 180,
    marginBottom: 10,
    borderWidth: 1,
    borderRadius: 15,
    margin: WIDTH * 0.06,
    padding: 5,
    width: WIDTH * 0.88,
  },
  text: {
    fontSize: 45,
  },
  inputBox: {
    width: "100%",
    height: 45,
    borderColor: "#d3d3d3",
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 2,
    marginBottom: 5,
  },
  masterButtonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor:'blue'
  },
  buttonContainer: {
    backgroundColor: "#5bcae2",
    height: 40,
    width: WIDTH * 0.4,
    marginLeft:15,
    marginRight:15,
    borderColor: "white",
    borderWidth: 1,
    borderRadius: 15,
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

export default ForgotPasswordScreen;
