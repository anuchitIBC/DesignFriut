import { StyleSheet, Dimensions, Platform } from "react-native";
import { COLORSFont } from "./Allcolors";
import { FONTFAMILY_ } from "./Allfontfamily";


const width1 = Dimensions.get("screen").width;
const height1 = Dimensions.get("screen").height;
const { height, width } = Dimensions.get("window");

export default StyleSheet.create({});

export const TextCSS = {


  //////////////// 12 //////////////
  Text12Gray01500_IBM_Regular: {
    color: COLORSFont.Gray01,
    fontFamily: FONTFAMILY_.IBMPlexSansThaiMedium,
    fontSize: 12,
    fontWeight: '500',
  },
  Text12blue02500_IBM_Regular: {
    color: COLORSFont.blue02,
    fontFamily: FONTFAMILY_.IBMPlexSansThaiMedium,
    fontSize: 12,
    fontWeight: '500',
  },
  Text12Gray02400_IBM_Regular: {
    color: COLORSFont.Gray02,
    fontFamily: FONTFAMILY_.IBMPlexSansThaiMedium,
    fontSize: 12,
    fontWeight: '400',
  },
  
  //////////////// 14 //////////////
  Text14White_IBM_Regular: {
    color: COLORSFont.white,
    fontFamily: FONTFAMILY_.IBMPlexSansThaiMedium,
    fontSize: 15,
    fontWeight: '400',
  },
  Text14White500_IBM_Regular: {
    color: COLORSFont.white,
    fontFamily: FONTFAMILY_.IBMPlexSansThaiMedium,
    fontSize: 15,
    fontWeight: '500',
  },
  Text14green500_IBM_Regular: {
    color: COLORSFont.green,
    fontFamily: FONTFAMILY_.IBMPlexSansThaiMedium,
    fontSize: 15,
    fontWeight: '500',
  },

  // 12C576
  Text14Gray_IBM_Regular: {
    color: COLORSFont.Gray,
    fontFamily: FONTFAMILY_.IBMPlexSansThaiRegular,
    fontSize: 15,
    fontWeight: '400',
  },
  Text14Gray01_IBM_Regular: {
    color: COLORSFont.Gray01,
    fontFamily: FONTFAMILY_.IBMPlexSansThaiRegular,
    fontSize: 15,
    fontWeight: '400',
  },
  Text14blue02_IBM_Regular: {
    color: COLORSFont.blue02,
    fontFamily: FONTFAMILY_.IBMPlexSansThaiRegular,
    fontSize: 15,
    fontWeight: '400',
  },

  Text14black01_IBM_Regular: {
    color: COLORSFont.black01,
    fontFamily: FONTFAMILY_.IBMPlexSansThaiRegular,
    fontSize: 15,
    fontWeight: '500',
  },


  //////////////// 16 //////////////
  Text16White_IBM_Regular: {
    color: COLORSFont.white,
    fontFamily: FONTFAMILY_.IBMPlexSansThaiRegular,
    fontSize: 16,
    fontWeight: '500',
  },
  Text16Black_IBM_Regular: {
    color: COLORSFont.Black,
    fontFamily: FONTFAMILY_.IBMPlexSansThaiRegular,
    fontSize: 16,
    fontWeight: '500',
  },
  Text16blue02_IBM_Regular: {
    color: COLORSFont.blue02,
    fontFamily: FONTFAMILY_.IBMPlexSansThaiRegular,
    fontSize: 16,
    fontWeight: '500',

  },
  Text16Gray_IBM_Regular: {
    color: COLORSFont.Gray01,
    fontFamily: FONTFAMILY_.IBMPlexSansThaiRegular,
    fontSize: 16,
    fontWeight: '400',
  },

  /////////////// 18 ////////////////

  Text16white_IBM_Regular: {
    color: COLORSFont.white,
    fontFamily: FONTFAMILY_.IBMPlexSansThaiRegular,
    fontSize: 18,
    fontWeight: '600',
  },
  Text16white400_IBM_Regular: {
    color: COLORSFont.white,
    fontFamily: FONTFAMILY_.IBMPlexSansThaiRegular,
    fontSize: 18,
    fontWeight: '400',
  },

  ////////////////////20//////////////
  Text20White600_IBM_Regular: {
    color: COLORSFont.white,
    fontFamily: FONTFAMILY_.IBMPlexSansThaiRegular,
    fontSize: 20,
    fontWeight: '600',
  },
  Text20White500_IBM_Regular: {
    color: COLORSFont.white,
    fontFamily: FONTFAMILY_.IBMPlexSansThaiRegular,
    fontSize: 20,
    fontWeight: '500',
  },
  ////////////////////24//////////////
  Text24White_IBM_Regular: {
    color: COLORSFont.white,
    fontFamily: FONTFAMILY_.IBMPlexSansThaiRegular,
    fontSize: 24,
    fontWeight: '600',
  },
  Text24White700_IBM_Regular: {
    color: COLORSFont.white,
    fontFamily: FONTFAMILY_.IBMPlexSansThaiRegular,
    fontSize: 24,
    fontWeight: '700',
  },






};
