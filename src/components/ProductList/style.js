import { StyleSheet } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

const COLORS = {
  white: '#fff',
  black: '#000',
  backgroundColor: '#9cb8c5',
  borderColor: '#ccc',
};

const styles = StyleSheet.create({
  card: {
    alignItems: 'center',
    backgroundColor: COLORS.white,
    height: hp(25),
    justifyContent: 'center',
    marginVertical: hp(1)
  },
  cardMaterial: {
    backgroundColor: COLORS.backgroundColor,
    borderRadius: hp(1),
    color: COLORS.white,
    fontSize: RFPercentage(2.2),
    paddingHorizontal: hp(2.5),
    paddingVertical: hp(1.5),
  },
  cardName: {
    color: COLORS.black,
    fontSize: RFPercentage(2.8),
    fontWeight: '600'
  },
  cardPrice: {
    color: COLORS.black,
    fontSize: RFPercentage(2.8),
    fontWeight: '400'
  },
  line: {
    borderColor: COLORS.borderColor,
    borderTopWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: hp(1),
    padding: hp(1),
  }
});

export default styles;