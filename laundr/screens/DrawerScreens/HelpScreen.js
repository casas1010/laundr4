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
  Modal,
  Picker,
  Dimensions,
  ScrollView,
  FlatList,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import Header from "../../components/Header";

const WIDTH = Dimensions.get("window").width;
const HEIGHT = Dimensions.get("window").height;
const FONTSIZE = Math.floor((HEIGHT * 0.1) / 3);

const HelpScreen = (props) => {
  const [issue, setIssue] = useState();

  const submitFunction = () => {
    console.log("submit press");
  };

  //   const instaFunction =()=>{
  //       console.log('instagram')
  //   }

  return (
    <>
      <Header openDrawer={props.navigation.openDrawer} name="Help" />
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.formContainer}>
          <View style={styles.headerTextContainer}>
            <Text style={{ fontWeight: "bold", color: "#585858" }}>
              Report an Issue
            </Text>
          </View>
          <TextInput
            value={issue}
            maxLength={500}
            multiline={true}
            onChangeText={(txt) => setIssue(txt)}
            //   placeholder=" Name"
            style={styles.inputBox}
          />
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              onPress={submitFunction}
              style={styles.submitButton}
            >
              <Text>Submit</Text>
            </TouchableOpacity>

            {/* <Text> OR </Text>
            <TouchableOpacity
              onPress={instaFunction}
              style={styles.submitButton}
            >
              <Text>DM us on the gram</Text>
            </TouchableOpacity> */}
          </View>
        </View>
      </TouchableWithoutFeedback>
    </>
  );
};

const styles = StyleSheet.create({
  formContainer: {
    backgroundColor: "white",
    borderColor: "white",
    borderWidth: 1,
    borderRadius: 15,
    margin: WIDTH * 0.06,
    marginBottom: 15,
    padding: 10,
    width: WIDTH * 0.88,
    marginTop: 20,
    // paddingBottom: 100,
  },
  headerTextContainer: {
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 10,
  },
  inputBox: {
    width: "100%",
    height: HEIGHT * 0.26,
    borderColor: "#d3d3d3",
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 7,
    fontSize: FONTSIZE,
  },
  buttonContainer: {
    alignItems: "center",
    justifyContent: "center",
    // flexDirection: "row",
  },
  submitButton: {
    height: 40,
    width: "80%",
    backgroundColor: "#3dd7e9",
    borderWidth: 1,
    borderRadius: 15,
    borderColor: "#3dd7e9",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 13,
    marginBottom: 13,
  },
});

export default HelpScreen;
