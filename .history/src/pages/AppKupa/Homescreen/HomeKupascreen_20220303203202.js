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
import {fontSizes} from '../../../css/Allsizefont';

// css sizescreen
const windowns = Dimensions.get('window');
const {height, width} = Dimensions.get('window');
const screen = Dimensions.get('screen');
const SLIDER_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.9);
const ITEM_HEIGHT = Math.round((ITEM_WIDTH * 3) / 4);

//  value

const Dataproducts = [
  {
    key: 1,
    title: 'All Your favorites foods',
    price: '$19.99',
    image: require('../../image/img11.jpeg'),
  },
  {
    key: 2,
    title: 'Get delivery at your \n doorstep',
    price: '$19.99',
    image: require('../../image/img22.jpeg'),
  },
  {
    key: 3,
    title: 'Get delivery at your \n doorstep',
    price: '$19.99',
    image: require('../../image/foodskip.png'),
  },
  {
    key: 4,
    title: 'Get delivery at your \n doorstep',
    price: '$19.99',
    image: require('../../image/foodskip.png'),
  },
];

const Homekupascreen = () => {
  const renderItem = ({item, index}) => {
    return (
      <TouchableOpacity
        style={{
          marginHorizontal: 5,
          borderRadius: 10,
          backgroundColor: COLORS.white,
        }}>
        <View style={{ height: hp('20%'),marginBottom:5}}>
          <Image
            resizeMode="contain"
            style={{width: '40%', height: hp('20%')}}
            source={item.image}
          />
        </View>
        <View style={{ marginBottom: 5}}>
          <Text numberOfLines={1} style={{}}>
            {item.title}
          </Text>
        </View>
        <View style={{ marginBottom: 10}}>
          <Text style={{fontWeight:'bold'}}>{item.price}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={{flex: 1, backgroundColor: COLORS.white}}>
      <Header />
      <ScrollView style={{}}>
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

        <View style={{marginHorizontal: 20, marginBottom: 20}}>
          {/* <View style={{marginBottom: 25}}>
            <View
              style={{
                height: hp('15%'),
                borderRadius: 10,
                backgroundColor: COLORS.bgGrreen,
              }}>
              <View style={{}}></View>
            </View>
          </View> */}
          <View>
            <View
              style={{
                height: hp('20%'),
                borderRadius: 10,
                backgroundColor: COLORS.bgGreennew,
              }}>
              <View style={{}}></View>
            </View>
          </View>
        </View>
        <View style={{marginHorizontal: 20, marginBottom: 20}}>
          <View style={{flexDirection: 'row'}}>
            <View style={{flex: 1, justifyContent: 'center'}}>
              <Text
                style={{
                  fontWeight: 'bold',
                  fontSize: fontSizes.TittleSize,
                  marginBottom: 15,
                }}>
                {'Top of Week'}
              </Text>
            </View>
            <TouchableOpacity style={{justifyContent: 'center'}}>
              <Text
                style={{
                  fontSize: fontSizes.labelSize,
                  marginBottom: 15,
                }}>
                {'Viewmore'}
              </Text>
            </TouchableOpacity>
          </View>

          <FlatList
            horizontal={true}
            data={Dataproducts}
            style={{}}
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />
        </View>
        <View style={{marginHorizontal: 20, marginBottom: 20}}>
          <View style={{flexDirection: 'row'}}>
            <View style={{flex: 1, justifyContent: 'center'}}>
              <Text
                style={{
                  fontWeight: 'bold',
                  fontSize: fontSizes.TittleSize,
                  marginBottom: 15,
                }}>
                {'Top  recommend'}
              </Text>
            </View>
            <TouchableOpacity style={{justifyContent: 'center'}}>
              <Text
                style={{
                  fontSize: fontSizes.labelSize,
                  marginBottom: 15,
                }}>
                {'Viewmore'}
              </Text>
            </TouchableOpacity>
          </View>

          <FlatList
            horizontal={true}
            data={Dataproducts}
            style={{}}
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />
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
