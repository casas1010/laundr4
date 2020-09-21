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

import { Ionicons } from "@expo/vector-icons";

const WIDTH = Dimensions.get("window").width;
const HEIGHT = Dimensions.get("window").height;

const Header = (props) => {
  const [iconHeight, SetIconHeight] = useState(
    Math.floor((HEIGHT * 0.13) / 1.5)
  );

  useEffect(() => {
    console.log("Header loaded");
  }, []);
  return (
    <View style={styles.headerContainer}>
      <View style={styles.button_TextContainer}>
        <TouchableOpacity onPress={() => props.openDrawer()}>
          <Ionicons
            name="ios-arrow-back"
            size={iconHeight}
            color="black"
            style={styles.icon}
          />
        </TouchableOpacity>

        <View style={styles.textContainer}>
          <Text style={styles.textStyle}>{props.name}</Text>
        </View>
      </View>
    </View>
  );
};
Header.defaultProps = {
  name: "default",
};

const styles = StyleSheet.create({
  headerContainer: {
    height: HEIGHT * 0.13,
    width: WIDTH,
    // backgroundColor: "red",
    position: "relative",
  },
  button_TextContainer: {
    position: "absolute",
    bottom: 0,
    // backgroundColor: "green",
    width: WIDTH,
    flexDirection: "row",
  },
  icon: {
    // backgroundColor: "blue",
    width: WIDTH * 0.14,
    paddingLeft: 10,
  },
  textContainer: {
    justifyContent: "center",
    marginRight: WIDTH * 0.14,
    width: WIDTH * (1 - 0.28),
    alignItems: "center",
  },
  textStyle: {
    fontSize: 30,
    textAlign: "auto",
    // backgroundColor: "yellow",
  },
});

export default Header;
