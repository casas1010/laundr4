import React, { useState, useRef, useEffect } from "react";
import {
  Keyboard,
  KeyboardAvoidingView,
  SafeAreaView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
  TouchableOpacity,
  Dimensions,
  Image,
  Animated,
  AsyncStorage,
} from "react-native";
// import jwtDecode from "jwt-decode";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import GlobalStyles from "../../components/GlobalStyles";
import Container from "../../components/Container";
import MenuModal from "../../components/MenuModal";

import axios from "axios";

import {
  HEIGHT,
  FIELD_NAME_FONT_SIZE,
  FIELD_VALUE_FONT_SIZE,
  WIDTH,
  INPUT_TITLE,
  INPUT_CONTAINER,
  BUTTON_CONTAINER,
} from "../../components/Items/";

import { USERTYPES } from "../../components/Data/";

// NOTES
// not sure how to add font Calmer Bold

const AuthScreen = (props) => {
  const [email, setEmail] = useState("jcasasmail@gmail.com");
  const [password, setPassword] = useState("yCxGRcgJ7C9JdY2");
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

  // ANIMATION
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const fadeIn = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1900,
      useNativeDriver: true,
    }).start();
  };
  useEffect(() => {
    fadeIn();
  }, []);
  // ANIMATION

  // LOG IN FLOW
  const handleLogin = async (event) => {
    // console.log(`login initiated with the following:`);
    // console.log(`email: ${email}`);
    // console.log(`password: ${password}`);
    // console.log(`userType: ${userType}`);

    // this.handleInputValidation()
    if (true) {
      try {
        const response = await axios.post("/api/user/login", {
          email: email.toLowerCase(),
          password: password,
        });

        if (response.data.success) {
          const token = response.data.token;
          await AsyncStorage.setItem("email_token", token);

          localStorage.setItem("email_token", token);

          const data = jwtDecode(token);

          setIsWasher(data.isWasher);
          setIsDriver(data.isDriver);
          setIsAdmin(data.isAdmin);
        } else {
          // this.context.showAlert(response.data.message);
          console.log("else:(");
        }
      } catch (error) {
        // showConsoleError("logging in", error);
        // this.context.showAlert(caughtError("logging in", error, 99));
        console.log("error!");
      }
    }
  };
  // LOG IN FLOW

  return (
    <SafeAreaView style={GlobalStyles.droidSafeArea}>
      <KeyboardAwareScrollView
        resetScrollToCoords={{ x: 0, y: 0 }}
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.logo}>
          <Image
            style={{ height: HEIGHT * 0.15, width: WIDTH * 0.85 }}
            resizeMode="contain"
            source={require("../../assets/Launch_Logo.png")}
          />
        </View>
        <Animated.View
          style={{
            opacity: fadeAnim,
            alignItems: "center",
          }}
        >
          <Text style={styles.animatedText}>Explore More. Stress Less</Text>
        </Animated.View>

        <Container>
          <TouchableOpacity
            onPress={modalButtonHelper}
            style={[INPUT_CONTAINER, { width: 65,marginBottom:5 }]}
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

          <View style={[styles.container_Email_Password, { marginBottom: 5 }]}>
            <MaterialIcons
              name="person"
              size={24}
              color="black"
              style={[styles.icon, { paddingTop: 3 }]}
            />
            <TextInput
              value={email}
              onChangeText={(email) => setEmail(email)}
              placeholder=" Email"
              style={[INPUT_CONTAINER, { width: "80%" }]}
            />
          </View>

          <View style={styles.container_Email_Password}>
            <FontAwesome5
              name="unlock-alt"
              size={18}
              color="black"
              style={[styles.icon, { paddingLeft: 4, paddingTop: 5 }]}
            />
            <TextInput
              value={password}
              onChangeText={(password) => setPassword(password)}
              secureTextEntry={true}
              placeholder=" Password"
              style={[INPUT_CONTAINER, { width: "80%" }]}
            />
          </View>
        </Container>
        <View style={styles.buttonsContainer} >
          <TouchableOpacity style={BUTTON_CONTAINER} onPress={handleLogin}>
            <Text style={styles.buttonText}>LOG IN</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={BUTTON_CONTAINER}
            onPress={() => props.navigation.navigate("signUpDetails")}
          >
            <Text style={styles.buttonText}>SIGN UP</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => props.navigation.navigate("forgotPassword")}
          >
            <Text style={styles.buttonText}>Forgot Password?</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  logo: {
    marginTop: 10,
    alignItems: "center",
  },
  animatedText: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 5,
    // fontFamily:'Calmer Bold'
  },
  container_Email_Password: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    height: 30,
    width: 30,
    // backgroundColor: "red",
  },
  buttonsContainer: {
    alignItems: "center",
  },
  button: {
    alignItems: "center",
    backgroundColor: "#01c9e2",
    margin: 10,
    // height: 20,
    width: 250,
    borderRadius: 10,
  },
  buttonText: {
    padding: 10,
    fontSize: 15,
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

export default AuthScreen;
