import { Dimensions } from "react-native";

export const HEIGHT = Dimensions.get("window").height;
export const FIELD_NAME_FONT_SIZE = Math.floor((HEIGHT * 0.1) / 2);
export const FIELD_VALUE_FONT_SIZE = Math.floor((HEIGHT * 0.1) / 3);
export const WIDTH = Dimensions.get("window").width;

export const INPUT_TITLE = {
  fontSize: FIELD_NAME_FONT_SIZE,
  fontWeight: "bold",
};

export const INPUT_BOX = {
  width: "100%",
  borderColor: "#d3d3d3",
  borderWidth: 1,
  borderRadius: 5,
  padding: 7,
  fontSize: FIELD_VALUE_FONT_SIZE,
};
