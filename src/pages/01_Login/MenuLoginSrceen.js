import React, { useEffect, useState, useRef } from 'react';

// import type {Node} from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TextInput,
  Image,
  TouchableOpacity,
  FlatList,
  Dimensions,
  Animated,
  ImageBackground,
} from 'react-native';


import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import LinearGradient from 'react-native-linear-gradient';
import { IconBGChange24, IconChange24, IconFackbook, IconGoogle, IconMessage } from '../../Icon/Customs';
import { FONTFAMILY_ } from '../../css/Allfontfamily';
import { TextCSS } from '../../css/Font_Text';
// import {fontSizes} from '../../../css/Allsizefont';
// import Spinner from 'react-native-loading-spinner-overlay';

// css sizescreen
const windowns = Dimensions.get('window');
const { height, width } = Dimensions.get('window');
const screen = Dimensions.get('screen');
const SLIDER_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.9);
const ITEM_HEIGHT = Math.round((ITEM_WIDTH * 3) / 4);

//  value

// const Dataproducts = [
//   {
//     key: 1,
//     title: 'All Your favorites foods',
//     price: '$19.99',
//     image: require('../../image/img11.jpeg'),
//   },
//   {
//     key: 2,
//     title: 'Get delivery at your \n doorstep',
//     price: '$19.99',
//     image: require('../../image/img22.jpeg'),
//   },
//   {
//     key: 3,
//     title: 'Get delivery at your \n doorstep',
//     price: '$19.99',
//     image: require('../../image/foodskip.png'),
//   },
//   {
//     key: 4,
//     title: 'Get delivery at your \n doorstep',
//     price: '$19.99',
//     image: require('../../image/foodskip.png'),
//   },
// ];

const MenuLoginSrceen = () => {

  const [spinner, setspinner] = useState(false)

  useEffect(() => {
    return () => {

      // setspinner(!spinner)

    };
  }, [])


  return (
    <ImageBackground
      source={require('../../images/Bglogin.png')}
      resizeMode={'cover'}
      style={{ height: '100%', backgroundColor: '#181920' }}>

      <View style={{ marginTop: 100, alignSelf: 'center' }}>
        <IconChange24 />
      </View>
      <View style={{ flex: 1, backgroundColor: null }}>

      </View>

      <View style={{ flex: 1, backgroundColor: null, marginHorizontal: 15 }}>
        <TouchableOpacity style={[styles.Btncss, { backgroundColor: '#F3F5F6' }]}>
          <View style={{ justifyContent: 'center', marginHorizontal: 10 }}>
            <IconGoogle />
          </View>
          <View style={{ justifyContent: 'center' }}>
            <Text style={TextCSS.Text16Black_IBM_Regular}>{'เข้าสู่ระบบผ่าน Google'}</Text>
          </View>
        </TouchableOpacity>


        <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
          colors={['#0125E1', '#2084FC']}
          style={styles.Btncss}>
          <TouchableOpacity style={[{ width: '50%', backgroundColor: null, flexDirection: 'row' }]}>
            <View style={{ justifyContent: 'center', marginHorizontal: 10 }}>
              <IconFackbook />
            </View>
            <View style={{ justifyContent: 'center' }}>
              <Text style={[TextCSS.Text16White_IBM_Regular,]} >{'เข้าสู่ระบบผ่าน Facebook'}</Text>
            </View>
          </TouchableOpacity>

        </LinearGradient>

        <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
          colors={['rgba(49, 51, 64, 0.7)', 'rgba(36, 37, 45, 0.7)']}
          style={styles.Btncss}>
          <TouchableOpacity style={[{ width: '50%', backgroundColor: null, flexDirection: 'row' }]}>
            <View style={{ justifyContent: 'center', marginHorizontal: 10 }}>
              <IconMessage />
            </View>
            <View style={{ justifyContent: 'center' }}>
              <Text style={[TextCSS.Text16White_IBM_Regular,]} >{'เข้าสู่ระบบผ่านอีเมล'}</Text>
            </View>
          </TouchableOpacity>

        </LinearGradient>

        <TouchableOpacity style={{ marginTop: 36, paddingVertical: 5 }}>
          <Text style={[TextCSS.Text16blue02_IBM_Regular,{textAlign:'center'}]} >
            {'สมัครสมาชิก'}
          </Text>
        </TouchableOpacity>

      </View>

    </ImageBackground>
  );
};

export default MenuLoginSrceen;
const styles = StyleSheet.create({
  spinnerTextStyle: {
    color: 'red'
  },
  carouselContainer: {
    marginTop: 20,
  },
  itemContainer: {
    width: ITEM_WIDTH,
    height: ITEM_HEIGHT,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'dodgerblue',
  },
  itemLabel: {
    color: 'white',
    fontSize: 24,
  },
  counter: {
    marginTop: 25,
    fontSize: 30,
    fontWeight: 'Regular',
    textAlign: 'center',
  },
  title: {
    fontSize: 38,
    backgroundColor: 'transparent'
  },
  Btncss: {
    height: 48,
    borderRadius: 12,
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 24
  },
  
});
