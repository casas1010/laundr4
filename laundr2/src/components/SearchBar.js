import React from "react";
import { View, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
  return (
    <View style={styles.backgroundStyle}>
      <Feather name="search" style={styles.iconStyle} />
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        style={styles.inputStyle}
        placeholder="Search History"
        placeholderTextColor="#e0eff2"
        value={term}
        onChangeText={(term) => {
          onTermChange(term);
          // onTermSubmit(term);
        }}
        onEndEditing={onTermSubmit}
      />
      <TouchableOpacity
        style={{ alignItems: "center", justifyContent: "center" }}
        onPress={() => {
          onTermChange("");
        }}
      >
        <Feather
          name="x"
          size={24}
          color="#e0eff2"
          style={{  paddingRight: 10 }}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    marginTop: 10,
    backgroundColor: "#21D0E5",
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15,
    flexDirection: "row",
    marginBottom: 10,
  },
  inputStyle: {
    width: "70%",
    fontSize: 18,
    fontWeight:'bold',
    color: "#e0eff2",
  },
  iconStyle: {
    fontSize: 35,
    alignSelf: "center",
    marginHorizontal: 15,
    color:'#e0eff2'
  },
});

export default SearchBar;
