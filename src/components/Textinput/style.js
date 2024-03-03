import { StyleSheet } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const COLORS = {
    white: '#fff',
    black: '#000',
    backgroundColor: 'transparent',
    borderColor: '#ccc',
    error: '#ff0000',
};

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        borderRadius: hp('5%'),
        marginTop: hp('2%'),
        width: '100%',
    },
    buttonText: {
        color: COLORS.white,
        fontSize: RFPercentage(2),
        fontWeight: 'bold',
    },
    errorText: {
        color: COLORS.error,
        fontSize: RFPercentage(1.8),
        marginBottom: hp('1%'),
    },
    input: {
        backgroundColor:COLORS.backgroundColor,
        fontSize: RFPercentage(2),
        marginBottom: hp('2%'),
        paddingHorizontal: wp('4%'),
        width: '100%',
    },
    label: {
        fontSize: RFPercentage(2),
        fontWeight: 'bold',
        marginBottom: hp('1%'),
    },
    picker: {
        borderColor: COLORS.borderColor,
        borderRadius: hp('1%'),
        borderWidth: 1,
        marginBottom: hp('2%'),
        width: '100%',
    },
  });

export default styles;