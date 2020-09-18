import React, { useEffect, useState } from "react";
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
  Dimensions,
} from "react-native";

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
  const [editable, setEditable] = useState(false);
  const [number, setNumber] = useState();
  useEffect(() => {
    console.log("AccountScreen loaded");
  }, []);

  return (
    <View style={styles.container}>
      <Header openDrawer={props.navigation.openDrawer} name="account" />
      <View style={styles.formContainer}>
        <View style={styles.title_InputContainer}>
          <Text style={styles.inputTitle}>Name</Text>

          <TextInput
            editable={editable}
            value={name}
            onChangeText={(name) => setName(name)}
            placeholder=" Name"
            style={styles.inputBox}
          />
        </View>

        <View style={styles.title_InputContainer}>
          <Text style={styles.inputTitle}>Email</Text>
          <TextInput
            editable={editable}
            value={name}
            onChangeText={(email) => setEmail(email)}
            placeholder=" Email"
            style={styles.inputBox}
          />
        </View>

        <View style={styles.title_InputContainer}>
          <Text style={styles.inputTitle}>Number</Text>
          <TextInput
            editable={editable}
            value={number}
            onChangeText={(number) => setNumber(number)}
            placeholder=" Number"
            style={styles.inputBox}
          />
        </View>

        <View style={styles.title_InputContainer}>
          <Text style={styles.inputTitle}>Country</Text>
        </View>

        <View style={styles.title_InputContainer}>
          <Text style={styles.inputTitle}>State</Text>
        </View>

        <View style={styles.title_InputContainer}>
          <Text style={styles.inputTitle}>City</Text>
        </View>

        <View style={styles.title_InputContainer}>
          <Text style={styles.inputTitle}>Address</Text>
          <TextInput
            editable={editable}
            value={name}
            onChangeText={(address) => setAddress(address)}
            placeholder=" Address"
            style={styles.inputBox}
          />
        </View>
      </View>
      <View style={styles.lockContainer}>
        <TouchableOpacity style={styles.lockButton}></TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f4f4f4",
    flex: 1,
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
    height: 80,
    width: 80,
    borderRadius: 80,
    backgroundColor: "green",
  },
});

export default AccountScreen;
