import React, {useEffect, useState, useRef} from 'react';

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
} from 'react-native';
import Style from './Styles';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon1 from 'react-native-vector-icons/MaterialIcons';
import react from 'react';
import Header from './../Componetheader/Header';

import Carousel from 'react-native-snap-carousel';
import {COLORS} from '../../../css/Allcolors';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

// css sizescreen
const windowns = Dimensions.get('window');
const {height, width} = Dimensions.get('window');
const screen = Dimensions.get('screen');
const SLIDER_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.9);
const ITEM_HEIGHT = Math.round((ITEM_WIDTH * 3) / 4);

//  value

const Datamenu = [
  {
    menu: '',
    id: 1,
    icon: require('../../image/12.png'),
  },
  {
    menu: 'Vegetable',
    id: 2,
    icon: require('../../image/13.png'),
  },
  {
    menu: 'Fruit',
    id: 3,
    icon: require('../../image/15.png'),
  },
];

const Homekupascreen = () => {
  // _renderItem = ({item, index}) => {
  //   return (
  //     <View style={{borderRadius: 10, backgroundColor: COLORS.bgGreennew}}>
  //       <View style={{}}>
  //         {/* <Image
  //           resizeMode="contain"
  //           style={[Style.viewtop1, {width: '100%'}]}
  //           source={item.icon}
  //         /> */}
  //       </View>
  //       {/* <View>
  //         <Text style={{}}>{item.menu}</Text>
  //       </View> */}
  //     </View>
  //   );
  // };

  return (
    <View style={{flex: 1, backgroundColor: COLORS.white}}>
      <Header />
      <ScrollView>
        <View
          style={{
            marginTop: 10,
            borderWidth: 1,
            flexDirection: 'row',
            height: 45,
            marginHorizontal: 20,
            borderRadius: 10,
            borderColor: COLORS.colortext,
            backgroundColor: COLORS.bgcolortext,
            marginBottom: 20,
          }}>
          <View style={{justifyContent: 'center', marginHorizontal: 10}}>
            <Icon name="search" size={24} color={COLORS.colortext} />
          </View>
          <View
            style={{justifyContent: 'center', marginHorizontal: 10, flex: 1}}>
            <TextInput placeholder="Search on product" />
          </View>
        </View>

        <View style={{marginHorizontal: 20}}>
          <View>
            <View
              style={{height:  hp('20%'), borderRadius: 10, backgroundColor: COLORS.bgGreennew}}>
              <View style={{}}>

              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Homekupascreen;
const styles = StyleSheet.create({
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
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
