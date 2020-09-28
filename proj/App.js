import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import store from "./src/store";

// import DrawerNavigator from "./navigation/DrawerNavigator";
import TabNavigator from "./src/navigation/TabNavigator";


// not sure if this is going to work
const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <TabNavigator />
      </NavigationContainer>
    </Provider>
  );
};

export default App;











// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  * @flow strict-local
//  */

// import React,{PureComponent} from 'react';
// import {
//   SafeAreaView,
//   StyleSheet,
//   ScrollView,
//   View,
//   Text,
//   StatusBar,
// } from 'react-native';

// import Button from './components/Button'
// // 

// import stripe from 'tipsi-stripe';
// stripe.setOptions({
//   publishableKey:
//     'pk_test_51HTrdNKvlLDAjAUzb0c9zHwvq0wAcXOTWThrIscZMRVTc9xcfmqcFm4nLUjij9ZUcwgaewsQuNpBWak2KDQo1p4A00mFA5hRXA',
// });

// export default class CardFormScreen extends PureComponent {
//   static title = 'Card Form'

//   state = {
//     loading: false,
//     token: null,
//   }

//   handleCardPayPress = async () => {
//     try {
//       this.setState({ loading: true, token: null })
//       const token = await stripe.paymentRequestWithCardForm({
//         // Only iOS support this options
//         smsAutofillDisabled: true,
//         requiredBillingAddressFields: 'full',
//         prefilledInformation: {
//           billingAddress: {
//             name: 'Gunilla Haugeh',
//             line1: 'Canary Place',
//             line2: '3',
//             city: 'Macon',
//             state: 'Georgia',
//             country: 'US',
//             postalCode: '31217',
//             email: 'ghaugeh0@printfriendly.com',
//           },
//         },
//       })

//       this.setState({ loading: false, token })
//     } catch (error) {
//       this.setState({ loading: false })
//     }
//   }

//   render() {
//     const { loading, token } = this.state

//     return (
//       <View style={styles.container}>
//         <Text style={styles.header}>
//           Card Form Example
//         </Text>
//         <Text style={styles.instruction}>
//           Click button to show Card Form dialog.
//         </Text>
//         <Button
//           text="Enter you card and pay"
//           loading={loading}
//           onPress={this.handleCardPayPress}
//           // {...testID('cardFormButton')}
//         />
//         <View
//           style={styles.token}
//           // {...testID('cardFormToken')}
//           >
//           {token &&
//             <Text style={styles.instruction}>
//               Token: {token.tokenId}
//             </Text>
//           }
//         </View>
//       </View>
//     )
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   header: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instruction: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
//   token: {
//     height: 20,
//   },
// })
