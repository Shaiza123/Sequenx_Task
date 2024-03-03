import { StyleSheet } from "react-native";
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { RFPercentage } from "react-native-responsive-fontsize";

const COLORS = {
  white: '#fff',
  black: '#000',
};

const styles = StyleSheet.create({
  container:{
    flex: 1,
  },
  description: {
    color: COLORS.black,
    fontSize: RFPercentage(2),
    fontWeight:'600',
  },
  header:{
    alignItems:'center', 
    flexDirection:'column',
    justifyContent:'center',
    marginVertical:hp(5)
  },
  image: {
    height: hp(12),
    width: hp(12),
  },
  mainContainer: {
    backgroundColor:COLORS.white,
    flex: 1,
    gap: 5,
    paddingBottom: '35%',
    paddingHorizontal: '3%'
  },
  scrollViewContent:{
    flexGrow: 1,
  }
});

export default styles;