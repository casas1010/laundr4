import { StyleSheet, Platform } from 'react-native';
export default StyleSheet.create({
    droidSafeArea: {
        flex: 1,
        // backgroundColor: 'orange',
        paddingTop: Platform.OS === 'android' ? 25 : 0
    },
});