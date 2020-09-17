import React, { Component, useState, useEffect } from "react";
import {
  Button,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  FlatList,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
  TouchableOpacity,
  Dimensions,
  Image,
} from "react-native";
import RNPickerSelect from "react-native-picker-select";
import { Picker } from "@react-native-community/picker";

//*
// note 1: discuss how to use auto size text: https://stackoverflow.com/questions/5033012/auto-scale-textview-text-to-fit-within-bounds
//*

const WIDTH = Dimensions.get("window").width;
const HEIGHT = Dimensions.get("window").height;

const Password = (props) => {
  // const [password1, setPassword1] = useState("");
  // const [password2, setPassword2] = useState("");
  // const [passwordMatch, setPasswordMatch] = useState(false);

  useEffect(() => {
    console.log(`card Password loaded`);
  }, []);

  // useEffect(() => {
  //   verifyPasswords();
  //   console.log("password1: ", password1);
  //   console.log("password2: ", password2);
  //   console.log("passwordMatch: ", passwordMatch);
  //   if (passwordMatch) {
  //     props.callBack(password2);
  //   } else {
  //     props.callBack("");
  //   }
  // }, [password2]);

  // const verifyPasswords = () => {
  //   console.log("password1 == password2", password1 == password2);
  //   if (password1 == password2 && password1 != "" && password2 != "") {
  //     console.log("password success");
  //     setPasswordMatch(true);
  //   }
  //   setPasswordMatch(false);
  //   console.log("password failed");
  // };

  return (
    <View style={styles.formContainer}>
      <Text style={styles.text}>Create a Password</Text>

      <TextInput
        onChangeText={(text) => props.setPassword1(text)}
        placeholder="Password"
        textContentType="password"
        autoCompleteType="password"
        autoCorrect={false}
        secureTextEntry={true}
        style={[styles.inputBox, { marginBottom: 10 }]}
      />
      <TextInput
        style={[styles.inputBox, { marginBottom: 10 }]}
        onChangeText={(text) => {
          props.setPassword2(text);
        }}
        placeholder="Confirm Password"
        textContentType="password"
        autoCompleteType="password"
        autoCorrect={false}
        secureTextEntry={true}
      />
      <Text>Password requirements:</Text>
      <Text>6 characters, 1 capital letter, and 1 special character</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  formContainer: {
    backgroundColor: "white",
    borderColor: "white",
    borderWidth: 1,
    borderRadius: 15,
    flex: 1,
    margin: WIDTH * 0.06,
    padding: 5,
    width: WIDTH * 0.88,
  },
  text: {
    fontSize: 32,
  },

  inputBox: {
    width: "100%",
    height: 45,
    borderColor: "#d3d3d3",
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 2,
  },
});

export default Password;
