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
  FlatList,
  Share,
  Dimensions,
} from "react-native";
const WIDTH = Dimensions.get("window").width;
const HEIGHT = Dimensions.get("window").height;

import GlobalStyles from "../../components/GlobalStyles";
import Header from "../../components/Header";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "First Item",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Second Item",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Third Item",
  },
];
const SHADOW = {
  shadowColor: "#000",
  shadowOffset: { width: 1, height: 1 },
  shadowOpacity: 0.4,
  shadowRadius: 3,
  elevation: 5,
};

const ReferralScreen = (props) => {
  const [code, setCode] = useState("dummyCode");
  const [email, setEmail] = useState();

  useEffect(() => {
    console.log("Referral screen loaded");
  }, []);

  const onShare = async () => {
    // NOTE: SOMETHING IS WRONG WITH HOW THE LINK DISPLAYS ON THE TEXT MESSAGE :(
    try {
      const result = await Share.share({
        message: `Try Laundr, an app for on-demand laundry service. https://www.laundr.io
          Use this promo code to get a $5 discount on your first order:
          "jcasasmail646"`,
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <SafeAreaView style={GlobalStyles.droidSafeArea}>
      <Header openDrawer={props.navigation.openDrawer} name="Referrals" />
      <View style={styles.formContainer}>
        <Text style={styles.titleText}>Share your referral code!</Text>
        <Text style={styles.bodyText}>
          Both you and your friend get a $10 off coupon when they use your promo
          code at sign up and place their first Laundr order!
        </Text>

        <Text style={{ textAlign: "center" }}>Your code</Text>

        <View style={styles.code_ButtonContainer}>
          <View style={styles.codeTextContainer}>
            <Text style={styles.codeText}>{code}</Text>
          </View>
          <TouchableOpacity style={styles.copyCodeButton}>
            <Text>Copy code</Text>
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity onPress={onShare} style={styles.copyCodeButton}>
        <Text style={{ color: "white", fontWeight: "bold" }}>
          Share code with more humans!
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

// styles.codeTextContainer

const styles = StyleSheet.create({
  formContainer: {
    backgroundColor: "white",
    borderColor: "white",
    borderWidth: 1,
    borderRadius: 15,
    margin: WIDTH * 0.06,
    padding: 10,
    width: WIDTH * 0.88,
  },
  headerText: {
    fontWeight: "bold",
    fontSize: 20,
  },
  bodyText: {
    marginTop: 10,
    marginBottom: 10,
  },
  code_ButtonContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ededed",
    borderColor: "#ededed",
    borderWidth: 1,
    borderRadius: 15,
  },
  codeTextContainer: {
    marginRight: 20,
    marginLeft: 5,
    justifyContent: "center",
    backgroundColor: "white",
    borderColor: "white",
    borderRadius: 15,
    borderWidth: 1,
    padding: 4,
  },
  codeText: {
    fontWeight: "bold",
  },
  copyCodeButton: {
    backgroundColor: "#5bcae2",
    borderColor: "#5bcae2",
    borderWidth: 1,
    padding: 10,
    borderRadius: 15,
    alignItems: "center",
    margin: WIDTH * 0.06,
    ...SHADOW,
  },
});
export default ReferralScreen;
