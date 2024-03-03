import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { RFPercentage } from "react-native-responsive-fontsize";

const COLORS = {
  white: '#fff',
  black: '#000',
  shadowColor: '#171717',
  transparentBlack: 'rgba(0, 0, 0, 0.3)',
};

const styles = StyleSheet.create({
  button: {
    borderRadius: hp('5%'),
    marginHorizontal: hp(0.5),
    marginVertical: hp(2),
  },
  buttonText: {
    color: COLORS.white,
    fontSize: RFPercentage(1.8),
    fontWeight: 'bold',
  },
  container: {
    backgroundColor: COLORS.white,
    flex: 1,
    paddingHorizontal: '3%',
  },
  image: {
    borderRadius: hp(1),
    height: '100%',
    width: '100%',
  },
  loader: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: hp(2)
  },
  plusIcon: {
    color: COLORS.white,
    fontSize: RFPercentage(5)
  },
  plusIconStyling: {
    alignItems: "center",
    backgroundColor: COLORS.black,
    borderRadius: wp(10),
    bottom: "2%",
    elevation: 5,
    height: "10%",
    justifyContent: "center",
    position: "absolute",
    right: "4%",
    shadowColor: COLORS.shadowColor,
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    width: "20%",
    zIndex: 1
  },
  productContainer: {
    height: hp(20),
  },
  productText: {
    ...StyleSheet.absoluteFill,
    backgroundColor: COLORS.transparentBlack,
    borderRadius: hp(1),
  },
  text: {
    color: COLORS.white,
    fontSize: RFPercentage(2.5),
    fontWeight: '700',
    marginTop: hp(9),
    paddingHorizontal: hp(3),
    paddingVertical: hp(1),
  } 
});

export default styles;