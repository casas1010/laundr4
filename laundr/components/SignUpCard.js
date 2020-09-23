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

import {
  HEIGHT,
  FIELD_NAME_FONT_SIZE,
  FIELD_VALUE_FONT_SIZE,
  WIDTH,
  INPUT_TITLE,
  INPUT_BOX,
} from "./Items/";

//*
// note 1: discuss how to use auto size text: https://stackoverflow.com/questions/5033012/auto-scale-textview-text-to-fit-within-bounds
//*

const SignUpCard = (props) => {
  useEffect(() => {
    console.log(`card "${props.title}" loaded`);
  }, []);

  return (
    <>
      {/* note 1 */}
      <Text style={INPUT_TITLE}>{props.title}</Text>
      <TextInput
        style={INPUT_BOX}
        onChangeText={(text) => props.callBack(text)}
        placeholder={props.placeHolder}
        textContentType={props.textContentType}
        autoCompleteType={props.autoCompleteType}
        autoCorrect={false}
        keyboardType={props.keyboardType}
        secureTextEntry={props.secureTextEntry}
      />
    </>
  );
};

// default properties
SignUpCard.defaultProps = {
  textContentType: "none",
  autoCompleteType: "off",
  keyboardType: "default",
  secureTextEntry: false,
};

export default SignUpCard;
