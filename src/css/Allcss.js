import {StyleSheet, Dimensions, Platform} from 'react-native';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import {COLORS, COLORSFont} from '../css/Allcolors'

const windowns = Dimensions.get('window');
const {height, width} = Dimensions.get('window');
const screen = Dimensions.get('screen');

export default StyleSheet.create({
  colorbg: {
    backgroundColor:COLORS.bgGrreen
  },
  ViewBgcolor: {
    backgroundColor: COLORSFont.bgColor, flex: 1,
},

 
});
