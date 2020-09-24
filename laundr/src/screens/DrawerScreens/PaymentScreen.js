import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  SafeAreaView,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { connect } from "react-redux";
import * as actions from "../../actions";

import Header from "../../components/Header";
import MenuModal from "../../components/MenuModal";
import GlobalStyles from "../../components/GlobalStyles";
import {
  FIELD_NAME_TEXT,
  FIELD_VALUE_TEXT,
  FIELD_VALUE_CONTAINER,
} from "../../components/Items/";
import { CARDS, MONTHS, YEARS } from "../../components/Data/";
import Container from "../../components/Container";

const PaymentScreen = (props) => {
  const [cardHName, setCardHName] = useState("");
  const [cardNum, setCardNum] = useState("");
  const [cardType, setCardType] = useState("Visa");
  const [ccvNum, setccvNum] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");

  // modal variables
  const [cardModalView, setCardModalView] = useState(false);
  const [monthModalView, setMonthModalView] = useState(false);
  const [yearModalView, setYearModalView] = useState(false);

  useEffect(() => {
    console.log("AccountScreen loaded");
  }, []);

  //  MODAL VARIABLES
  // card type modal
  const setCardHelper = (item) => {
    setCardType(item);
    showModalCard();
  };
  const showModalCard = () => {
    console.log("showModalCard()");
    setCardModalView(!cardModalView);
  };
  const modalCardButtonHelper = () => {
    showModalCard();
  };
  //
  // month modal
  const setMonthHelper = (item) => {
    setMonth(item);
    showModalMonth();
  };
  const showModalMonth = () => {
    console.log("showModalMonth()");
    setMonthModalView(!monthModalView);
  };
  const modalMonthButtonHelper = () => {
    showModalMonth();
  };
  //
  // year modal
  const setYearHelper = (item) => {
    setYear(item);
    showModalYear();
  };
  const showModalYear = () => {
    console.log("showModalYear()");
    setYearModalView(!yearModalView);
  };
  const modalYearButtonHelper = () => {
    showModalYear();
  };
  //
  return (
    <SafeAreaView style={GlobalStyles.droidSafeArea}>
      <Header openDrawer={props.navigation.openDrawer} name="Payment" />
      <KeyboardAwareScrollView
        resetScrollToCoords={{ x: 0, y: 0 }}
        contentContainerStyle={styles.container}
      >
        <ScrollView>
          <Container>
            {/*  */}
            {/*  */}
            <View style={styles.container_Title_Input}>
              <Text style={FIELD_NAME_TEXT}>Card Holder Name</Text>
              <View style={FIELD_VALUE_CONTAINER}>
                <TextInput
                  value={cardHName}
                  onChangeText={(txt) => setCardHName(txt)}
                  placeholder="Card Holder Name"
                  style={FIELD_VALUE_TEXT}
                />
              </View>
            </View>
            {/*  */}
            {/*  */}
            <View style={styles.container_Title_Input}>
              <Text style={FIELD_NAME_TEXT}>Card Number</Text>
              <View style={FIELD_VALUE_CONTAINER}>
                <TextInput
                  value={cardHName}
                  onChangeText={(txt) => setCardNum(txt)}
                  placeholder="Card Number"
                  style={FIELD_VALUE_TEXT}
                />
              </View>
            </View>
            <View>
              {/*  */}
              {/*  */}
              <View style={styles.container_Title_Input}>
                <TouchableOpacity onPress={modalCardButtonHelper}>
                  <Text style={FIELD_NAME_TEXT}>Card Type</Text>

                  <View style={FIELD_VALUE_CONTAINER}>
                    <Text style={FIELD_VALUE_TEXT}>{cardType}</Text>
                  </View>
                </TouchableOpacity>
                <MenuModal
                  setCardTypeHelper={setCardHelper}
                  showModal={showModalCard}
                  modalView={cardModalView}
                  data={CARDS}
                />
              </View>
              {/*  */}
              {/*  */}
              <View style={styles.container_Title_Input}>
                <Text style={FIELD_NAME_TEXT}>CCV</Text>
                <View style={FIELD_VALUE_CONTAINER}>
                  <TextInput
                    value={ccvNum}
                    onChangeText={(txt) => setccvNum(txt)}
                    placeholder="CCV"
                    style={FIELD_VALUE_TEXT}
                  />
                </View>
              </View>
              {/*  */}
              {/*  */}
              <View style={styles.container_Title_Input}>
                <TouchableOpacity onPress={modalMonthButtonHelper}>
                  <Text style={FIELD_NAME_TEXT}>Month</Text>
                  <View style={FIELD_VALUE_CONTAINER}>
                    <Text style={FIELD_VALUE_TEXT}>{month}</Text>
                  </View>
                </TouchableOpacity>
                <MenuModal
                  setCardTypeHelper={setMonthHelper}
                  showModal={showModalMonth}
                  modalView={monthModalView}
                  data={MONTHS}
                />
              </View>
              {/*  */}
              {/*  */}
              <View style={styles.container_Title_Input}>
                <TouchableOpacity onPress={modalYearButtonHelper}>
                  <Text style={FIELD_NAME_TEXT}>Year</Text>
                  <View style={FIELD_VALUE_CONTAINER}>
                    <Text style={FIELD_VALUE_TEXT}>{year}</Text>
                  </View>
                </TouchableOpacity>
                <MenuModal
                  setCardTypeHelper={setYearHelper}
                  showModal={showModalYear}
                  modalView={yearModalView}
                  data={YEARS}
                />
              </View>
              {/*  */}
              {/*  */}
            </View>
          </Container>
        </ScrollView>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  container_Title_Input: {
    marginTop: 10,
    marginBottom: 10,
  },
});

function mapStateToProps({ auth }) {
  return { token: auth.token };
}

export default connect(mapStateToProps, actions)(PaymentScreen);
