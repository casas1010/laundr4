import React, { useState, useEffect } from "react";
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  Dimensions,
  TouchableOpacity,
  Alert,
} from "react-native";


import {
  WIDTH,
  HEIGHT,
  FIELD_NAME_TEXT,
  FIELD_VALUE_TEXT,
  FIELD_VALUE_CONTAINER,
  BUTTON_CONTAINER,
  BUTTON,
  FIELD_NAME_FONT_SIZE,
  SHADOW,
} from "../../components/Items/";

import { USERTYPES } from "../../components/Data/";
import Container from "../../components/Container";
import MenuModal from "../../components/MenuModal";

const ForgotPasswordScreen = (props) => {
  const [email, setEmail] = useState("");
  const [userType, setUserType] = useState("User");
  const [userModalView, setUserModalView] = useState(false);

  //  MODAL VARIABLE
  const setUserHelper = (item) => {
    setUserType(item);
    showModalUser();
  };
  const showModalUser = () => {
    console.log("showModalUser()");
    setUserModalView(!userModalView);
  };
  const modalButtonHelper = () => {
    showModalUser();
  };
  //  MODAL VARIABLE

  const forgotPasswordAPI = () => {
    console.log("API SignUp initiated");
  };

  return (
    <>
      <Container>
        <Text style={FIELD_NAME_TEXT}>Email</Text>

        <TextInput
          style={FIELD_VALUE_CONTAINER}
          onChangeText={(text) => setEmail(text)}
          placeholder="dirty@laundry.com"
          textContentType="emailAddress"
          autoCompleteType="email"
          autoCorrect={false}
          keyboardType="email-address"
        />

        <TouchableOpacity
          onPress={showModalUser}
          style={[FIELD_VALUE_CONTAINER, { width: 65, marginBottom: 5 }]}
        >
          <Text>{userType}</Text>
        </TouchableOpacity>
        <MenuModal
          title="Select User Type"
          setCardTypeHelper={setUserHelper}
          showModal={showModalUser}
          modalView={userModalView}
          data={USERTYPES}
        />
      </Container>
      <View style={styles.masterButtonContainer}>
        <BUTTON
          onPress={() => props.navigation.navigate("auth")}
          text="Return"
          style={{ width: WIDTH * 0.35 }}
        />
        <BUTTON
          onPress={forgotPasswordAPI}
          text="Submit"
          style={{ width: WIDTH * 0.35 }}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  masterButtonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor:'blue'
  },
});

export default ForgotPasswordScreen;
