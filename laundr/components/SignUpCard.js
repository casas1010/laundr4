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


//*
// note 1: discuss how to use auto size text: https://stackoverflow.com/questions/5033012/auto-scale-textview-text-to-fit-within-bounds
//*

const WIDTH = Dimensions.get("window").width;
const HEIGHT = Dimensions.get("window").height;

const SignUpCard = (props) => {
  useEffect(() => {
    console.log(`card "${props.title}" loaded`);
  }, []);

  return (
    <View style={styles.formContainer}>
      {/* note 1 */}
      <Text style={styles.text}>{props.title}</Text>
      <TextInput
        style={styles.inputBox}
        onChangeText={(text) => props.callBack(text)}
        placeholder={props.placeHolder}
        textContentType={props.textContentType}
        autoCompleteType={props.autoCompleteType}
        autoCorrect={false}
        keyboardType={props.keyboardType}
        secureTextEntry={props.secureTextEntry}
      />
    </View>
  );
};

// default properties
SignUpCard.defaultProps = {
  textContentType: "none",
  autoCompleteType: "off",
  keyboardType: "default",
  secureTextEntry: false,
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
    fontSize: 45,
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

export default SignUpCard;
