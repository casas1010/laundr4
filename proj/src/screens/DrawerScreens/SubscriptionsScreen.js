import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
  Image,
  Dimensions,
  FlatList,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import {connect} from 'react-redux';
import * as actions from '../../actions';

import Header from '../../components/Header';
import GlobalStyles from '../../components/GlobalStyles';
import {
  WIDTH,
  FIELD_VALUE_TEXT,
  FIELD_NAME_TEXT,
} from '../../components/Items/';
import Container from '../../components/Container';
import {
  BUTTON,
  FIELD_VALUE_FONT_SIZE,
  FIELD_NAME_FONT_SIZE,
} from '../../components/Items/';
import {PLANS} from '../../components/Data';

const SubscriptionsScreen = (props) => {
  const [plan, setPlan] = useState(false);

  useEffect(() => {
    console.log('SubscriptionsScreen loaded');
    console.log('props:  ', props);
  }, []);

  const toggleItemInCart = (item) => {
    if (!props.cart.length) {
      console.log('first item in the cart');
      props.addItemToCart(item);
      return;
    }

    if (item.name === props.cart[0].name) {
      console.log('item is duplicate, removing item from cart');
    }

    console.log('Cart: ', props.cart);
  };

  const checkout = () => {
    if (props.cart.length) {
      return (
        <View style={{alignItems: 'center', justifyContent: 'center'}}>
          <BUTTON
            style={{backgroundColor: 'green'}}
            onPress={props.navigation.openDrawer}
            text="Proceed to checkout"
          />
        </View>
      );
    }
    return null;
  };

  return (
    <SafeAreaView style={GlobalStyles.droidSafeArea}>
      <Header openDrawer={props.navigation.openDrawer} name="Subscriptions" />
      <Text>length of cart items:{props.cart.length}</Text>
      <Icon name="check" color={'black'} size={36} />

      <FlatList
        horizontal={false}
        data={PLANS}
        ListFooterComponent={checkout}
        keyExtractor={(item) => item.name}
        renderItem={({item}) => {
          if (item.name !== 'Student') {
            return (
              <TouchableOpacity onPress={() => toggleItemInCart(item)}>
                <Container
                  style={{alignItems: 'center', justifyContent: 'center'}}>
                  <Text style={FIELD_NAME_TEXT}>{item.name}</Text>
                  <Text
                    style={[
                      FIELD_VALUE_TEXT,
                      {textAlign: 'center', color: '#01c9e2'},
                    ]}>
                    {item.price} /Week
                  </Text>
                  <Text style={styles.cardDetails}>
                    {item.weight} lbs monthly
                  </Text>
                </Container>
              </TouchableOpacity>
            );
          }
          return (
            <TouchableOpacity
              style={styles.studentCardContainer}
              onPress={() => toggleItemInCart(item)}>
              <View>
                <Text style={styles.footerTitle}>The Student Plan!</Text>
                <Text style={styles.footerDetails}>
                  {item.price}/wk with valid student ID
                </Text>
              </View>

              <View style={styles.studentImageContainer}>
                <Image
                  style={styles.studentImage}
                  resizeMode="contain"
                  source={require('../../assets/Minimalist.png')}
                />
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  cardPrice: {
    fontWeight: 'bold',
    color: '#01c9e2',
    fontSize: 15,
  },
  cardDetails: {},
  studentCardContainer: {
    backgroundColor: '#01c9e2',
    borderColor: '#01c9e2',
    borderWidth: 1,
    borderRadius: 15,
    margin: WIDTH * 0.06,
    width: WIDTH * 0.88,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  innerFooter: {},
  footerTitle: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 20,
  },
  footerDetails: {},
  studentImageContainer: {
    width: '30%',
    height: 90,
  },
  studentImage: {
    height: '100%',
    width: '100%',
  },
  checkoutButton: {
    backgroundColor: 'red',
    height: 80,
    width: 80,
    borderRadius: 80,
    backgroundColor: 'green',
  },
});

// export default SubscriptionsScreen;

function mapStateToProps({cart}) {
  return {cart: cart};
}

export default connect(mapStateToProps, actions)(SubscriptionsScreen);
