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
  Clipboard,
} from "react-native";

import GlobalStyles from "../../components/GlobalStyles";
import Container from "../../components/Container";
import Header from "../../components/Header";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

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




const ReferralScreen = (props) => {
  const [code, setCode] = useState("dummyCode");
  const [email, setEmail] = useState();

  const copyToClipboard = () => {
    Clipboard.setString(code);
  };

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
      <Container>
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
          <BUTTON
            text="Copy Code"
            onPress={copyToClipboard}
            style={{ width: "40%" }}
            textStyle={{ fontSize: FIELD_NAME_FONT_SIZE * 0.5 }}
          />
        </View>
      </Container>
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <BUTTON text="Share code with more humans!" onPress={onShare} />
      </View>
    </SafeAreaView>
  );
};

// styles.codeTextContainer

const styles = StyleSheet.create({

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
