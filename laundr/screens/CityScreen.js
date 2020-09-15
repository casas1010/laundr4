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
import RNPickerSelect from "react-native-picker-select";

const ITEMS = [
  { label: "Gainsville", value: "Gainsville" },
  { label: "Orlando", value: "Orlando" },
];

const CityScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState("user");

  return (
    <View style={styles.masterContainer}>

      <View style={styles.formContainer}>
          
        <Text style={styles.text}>Select Your City:</Text>

        <View style={styles.menuContainer}>
          <RNPickerSelect
            placeholder={{}}
            onValueChange={(value) => setUserType(value)}
            items={ITEMS}
            style={pickerSelectStyles}
          />
          <View style={{backgroundColor:'green',height:30, width:30}}></View>
        </View>

      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  masterContainer: {},
  text: {
    fontSize: 40,
  },
  formContainer: {
    borderColor: "white",
    backgroundColor: "white",
    borderWidth: 1,
    borderRadius: 15,
    marginTop: 100,
    marginLeft:20,
    marginRight:20
  },
  menuContainer: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: 'red'
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
    width: 120,
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderColor: "#ebebeb",
    borderRadius: 8,
    color: "black",
    width: 120,
    marginBottom: 5,
  },
});

export default CityScreen;
