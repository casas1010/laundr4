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

import {
  HEIGHT,
  FIELD_NAME_FONT_SIZE,
  FIELD_VALUE_FONT_SIZE,
  WIDTH,
  INPUT_TITLE,
  INPUT_BOX,
} from "../../components/Items/";

//*
// note 1: discuss how to use auto size text: https://stackoverflow.com/questions/5033012/auto-scale-textview-text-to-fit-within-bounds
//*

const Password = (props) => {
  useEffect(() => {
    console.log(`card Password loaded`);
  }, []);

  return (
    <>
      <Text style={INPUT_TITLE}>Create a Password</Text>

      <TextInput
        onChangeText={(txt) => props.setPassword1(txt)}
        placeholder="Password"
        textContentType="password"
        autoCompleteType="password"
        autoCorrect={false}
        secureTextEntry={true}
        style={[INPUT_BOX, { marginBottom: 10 }]}
      />
      <TextInput
        style={[INPUT_BOX, { marginBottom: 10 }]}
        onChangeText={(txt) => {
          props.setPassword2(txt);
        }}
        placeholder="Confirm Password"
        textContentType="password"
        autoCompleteType="password"
        autoCorrect={false}
        secureTextEntry={true}
      />
      <Text>Password requirements:</Text>
      <Text>6 characters, 1 capital letter, and 1 special character</Text>
    </>
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
