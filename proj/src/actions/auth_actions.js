import { AsyncStorage } from "react-native";
import { EMAIL_LOGIN_SUCCESS, EMAIL_LOGIN_FAIL, LOG_OUT } from "./types";


// regular syntax
export const emailLogOut = () => {
  // perform action
  return {
      type: LOG_OUT,
   
  };
};

// async syntax using redux thunk
export const actionName2 = () => async (dispatch) => {
  // perform action
  dispatch({
    // type: ,
    // payload:
  });
};


export const emailLogin = () => async (dispatch) => {
  // get the fb token if it is there
let token = await AsyncStorage.getItem("email_token");

// check the value of that token
if (token) {
  dispatch({ type: EMAIL_LOGIN_SUCCESS, payload: token });
} else {
  doEmailLogin(dispatch);
  console.log("start email login");
}
};

const doEmailLogin = async (dispatch) => {
  // Facebook.initializeAsync("300020044475971", "ScanApp");

  // let { type, token } = await Facebook.logInWithReadPermissionsAsync(
  //   "300020044475971",
  //   {
  //     permissions: ["public_profile"],
  //   }
  // );

  // if (type === "cancel") {
  //   return dispatch({ type: FACEBOOK_LOGIN_FAIL });
  // }
  // // if it makes it this far, it means that you have login succesfully
  // await AsyncStorage.setItem("fb_token", token);

  // dispatch({ type: FACEBOOK_LOGIN_SUCCESS, payload: token });
};




// starts facebooklogin flow
// const doFacebookLogin = async (dispatch) => {
//   Facebook.initializeAsync("300020044475971", "ScanApp");

//   let { type, token } = await Facebook.logInWithReadPermissionsAsync(
//     "300020044475971",
//     {
//       permissions: ["public_profile"],
//     }
//   );

//   if (type === "cancel") {
//     return dispatch({ type: FACEBOOK_LOGIN_FAIL });
//   }
//   // if it makes it this far, it means that you have login succesfully
//   await AsyncStorage.setItem("fb_token", token);

//   dispatch({ type: FACEBOOK_LOGIN_SUCCESS, payload: token });
// };
