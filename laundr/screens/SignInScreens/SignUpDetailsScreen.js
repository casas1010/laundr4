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
  Image,
  Dimensions,
  Alert,
} from "react-native";

import City from "./City.js";
import SignUpCard from "../../components/SignUpCard";
import Password from "./Password.js";

const WIDTH = Dimensions.get("window").width;
const HEIGHT = Dimensions.get("window").height;

const signUpDetailsScreen = (props) => {
  const [index, setIndex] = useState(0);
  const [city, setCity] = useState(""); //
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const [referralCode, setReferralCode] = useState("");

  const singUpAPI = () => {
    console.log("API SignUp initiated");
  };

  // contains information about signup in order of appearance
  const ITEMS = [
    { element: <City callBack={setCity} city={city} />, value: "City" },
    {
      element: (
        <SignUpCard
          callBack={setName}
          title={"Name:"}
          placeHolder="SkyWalker"
          textContentType="name"
          autoCompleteType="name"
        />
      ),
      value: "Name",
    },
    {
      element: (
        <SignUpCard
          callBack={setEmail}
          title={"Email:"}
          placeHolder="dirty@laundry.com"
          textContentType="emailAddress"
          autoCompleteType="email"
          keyboardType="email-address"
        />
      ),
      value: "Email",
    },
    {
      element: (
        <SignUpCard
          callBack={setPhone}
          title={"Phone Number:"}
          placeHolder="xxx-xxx-xxxx"
          textContentType="telephoneNumber"
          autoCompleteType="tel"
          keyboardType="number-pad"
        />
      ),
      value: "PhoneNumber",
    },
    {
      element: (
        <Password setPassword1={setPassword1} setPassword2={setPassword2} />
      ),
      value: "Password",
    },
    {
      element: (
        <SignUpCard
          callBack={setReferralCode}
          title={"ReferralCode:"}
          placeHolder="code"
        />
      ),
      value: "ReferralCode",
    },
  ];

  // main function
  const next = () => {
    if (index === 5) {
      singUpAPI();
      return;
    }
    if (ITEMS.length > index + 1) {
      console.log(index);
      setIndex(index + 1);
      flatListRef.scrollToIndex({ animated: true, index: index + 1 });
    }
  };

  // nextHelper() verifies the forms fields are not empty
  // aswell as stats password logic flow
  // returns true if all requirements of password are met
  const nextHelper = () => {
    console.log("current card:", index + 1);
    if (index + 1 === 1 && city === "Narnia") {
      Alert.alert("Narnia does not exist, please select a real city");
      return;
    }
    if (index + 1 === 2 && name === "") {
      Alert.alert("Please enter your name");
      return;
    }
    if (index + 1 === 3 && email === "") {
      Alert.alert("Please enter your email");
      return;
    }
    if (index + 1 === 4 && phone === "") {
      Alert.alert("Please enter your phone");
      return;
    }

    // PASSWORD LOGIC
    if (index + 1 === 5) {
      passwordLogic();
      return;
    } else {
      next();
      console.log("new card: ", index + 2);
    }
  };

  //password logic helper methods
  const isItALetter = (char) => {
    if (
      (char.charCodeAt(0) >= 65 && 90 >= char.charCodeAt(0)) ||
      (char.charCodeAt(0) >= 97 && char.charCodeAt(0) <= 122)
    ) {
      return true;
    }
    return false;
  };
  function specialCharValidation(str) {
    var iChars = "~`!#$%^@&*+=-[]\\';,/{}|\":<>?";
    for (var i = 0; i < str.length; i++) {
      if (iChars.indexOf(str.charAt(i)) != -1) {
        return true;
      }
    }
    return false;
  }
  function checkForCapitals(string) {
    // console.log("string: ", string);
    for (character of string) {
      // console.log("character.charCodeAt(0):  ", character.charCodeAt(0));
      // console.log("character: ", character);
      // console.log("character.toUpperCase(): ", character.toUpperCase());
      // console.log(
      //   "character == character.toUpperCase():  ",
      //   character == character.toUpperCase()
      // );
      if (character == character.toUpperCase() && isItALetter(character)) {
        return true;
      }
    }
    return false;
  }
  const passwordLogic = () => {
    if (password1 !== password2) {
      Alert.alert("Your passwords need to match!");
      return;
    }
    if (password2 === "" && password1 === "") {
      Alert.alert("Please enter your password");
      return;
    }
    if (password1 === password2) {
      if (password2.length < 5) {
        Alert.alert("Your password needs to be at least 6 characters long");
        return;
      }
      if (!specialCharValidation(password2)) {
        Alert.alert("Your password needs to have at least 1 special character");
        return;
      }
      console.log("password2: ", password2);
      if (!checkForCapitals(password2)) {
        Alert.alert("Your password needs to have at least 1 capital letter ");
        return;
      }
    }
    next();
    // PASSWORD LOGIC
  };
  //password logic helper methods

  const previous = () => {
    if (index === 0) {
      console.log("props.navigate: ", props.navigation.navigate("auth"));
      return;
    }
    if (0 < index) {
      console.log(index);
      setIndex(index - 1);
      flatListRef.scrollToIndex({ animated: true, index: index - 1 });
    }
  };

  return (
    <View style={styles.masterContainer}>
      <View style={{ height: 250, marginBottom: 10 }}>
        <FlatList
          data={ITEMS}
          scrollEnabled={false}
          horizontal
          extraData={index}
          pagingEnabled={true}
          showsHorizontalScrollIndicator={false}
          ref={(ref) => {
            flatListRef = ref;
          }}
          keyExtractor={(item) => item.value}
          renderItem={({ item, index }) => {
            return <>{item.element}</>;
          }}
        />
      </View>

      <View style={styles.masterButtonContainer}>
        <View style={styles.buttonContainer}>
          <Button
            onPress={previous}
            title={index == 0 ? "Return" : "Previous"}
            color="darkblue"
          />
        </View>

        <View style={styles.indexCounterContainer}>
          <Text>
            {index + 1} / {ITEMS.length}
          </Text>
        </View>

        <View style={styles.buttonContainer}>
          <Button
            onPress={() => {
              console.log(index);
              nextHelper();
            }}
            title={index == 5 ? "Submit" : "Next"}
            color="darkblue"
          />
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
    borderColor: "white",
    borderWidth: 1,
    borderRadius: 15,
  },
  indexCounterContainer: {
    width: WIDTH * 0.2,
    // backgroundColor: "red",
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default signUpDetailsScreen;
