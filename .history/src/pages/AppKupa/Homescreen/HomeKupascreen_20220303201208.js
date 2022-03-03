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
import { fontSizes } from '../../../css/Allsizefont';

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
    text: 'Description.Say something cool, Description.Say something cool,',
    image: require('../../image/foodskip.png'),
   
  },
  {
    key: 2,
    title: 'Get delivery at your \n doorstep',
    text: 'Other cool stuff',
    image: require('../../image/foodskip.png'),
  
  },
  {
    key: 3,
    title: 'Get delivery at your \n doorstep',
    text: 'Other cool stuff',
    image: require('../../image/img22.jpeg'),
  
  },
  {
    key: 4,
    title: 'Get delivery at your \n doorstep',
    text: 'Other cool stuff',
    image: require('../../image/img11.jpeg'),
  
  },
];


const Homekupascreen = () => {
  const renderItem = ({item, index}) => {
    return (
      <View style={{marginHorizontal:10,borderRadius: 10, backgroundColor: COLORS.bgGreennew}}>
        <View style={{ borderWidth:1,width:wp('50%'),height:hp('30%')}}>
          <Image
            resizeMode="contain"
            style={{ width:wp('50%') ,height:hp('30%')}}
            source={item.image}
          />
        </View>
        {/* <View>
          <Text style={{}}>{item.menu}</Text>
        </View> */}
      </View>
    );
  };

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

        <View style={{marginHorizontal: 20,marginBottom:20}}>
          <View style={{marginBottom:25}}>
            <View
              style={{height:  hp('15%'), borderRadius: 10, backgroundColor: COLORS.bgGrreen}}>
              <View style={{}}>

              </View>
            </View>
          </View>
          <View>
            <View
              style={{height:  hp('20%'), borderRadius: 10, backgroundColor: COLORS.bgGreennew}}>
              <View style={{}}>

              </View>
            </View>
          </View>
        </View>
        <View style={{marginHorizontal: 20}} >
          <Text style={{fontWeight:'bold', fontSize:fontSizes.TittleSize,marginBottom:15}}>
            {'Top of Week'}
          </Text>

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
