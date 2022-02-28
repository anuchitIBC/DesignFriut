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
  Platform,
  KeyboardAvoidingView,
} from 'react-native';
import Style from './Styles';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon1 from 'react-native-vector-icons/MaterialIcons';

import Carousel from 'react-native-snap-carousel';
import {COLORS} from '../../../css/Allcolors';

import LinearGradient from 'react-native-linear-gradient';
import Headerscreen from '../Header/Headerscreen';
import {fontSizes} from '../../../css/Allsizefont';



// css sizescreen
const windowns = Dimensions.get('window');
const {height, width} = Dimensions.get('window');
const screen = Dimensions.get('screen');
const SLIDER_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.9);
const ITEM_HEIGHT = Math.round((ITEM_WIDTH * 3) / 4);

//  datamenu

const Datamenu = [
  {
    IDCode: '0005-026-00056015',
    SN: 'SGH250SPPG',
    Brandname: 'HP',
    Datail: {
      Model: '6300 Pro MT',
      CPU: 'Core i5',
      Harddisk: '2 TB',
      Type: 'Computer',
      Memory: '4 GB',
    },
  },
  {
    IDCode: '0005-026-00056015',
    SN: 'SGH250SPPG',
    Brandname: 'HP',
    Datail: {
      Model: '6300 Pro MT',
      CPU: 'Core i5',
      Harddisk: '2 TB',
      Type: 'Computer',
      Memory: '4 GB',
    },
  },
  {
    IDCode: '0005-026-00056015',
    SN: 'SGH250SPPG',
    Brandname: 'HP',
    Datail: {
      Model: '6300 Pro MT',
      CPU: 'Core i5',
      Harddisk: '2 TB',
      Type: 'Computer',
      Memory: '4 GB',
    },
  },
  {
    IDCode: '0005-026-00056015',
    SN: 'SGH250SPPG',
    Brandname: 'HP',
    Datail: {
      Model: '6300 Pro MT',
      CPU: 'Core i5',
      Harddisk: '2 TB',
      Type: 'Computer',
      Memory: '4 GB',
    },
  },
  {
    IDCode: '0005-026-00056015',
    SN: 'SGH250SPPG',
    Brandname: 'HP',
    Datail: {
      Model: '6300 Pro MT',
      CPU: 'Core i5',
      Harddisk: '2 TB',
      Type: 'Computer',
      Memory: '4 GB',
    },
  },
  {
    IDCode: '0005-026-00056015',
    SN: 'SGH250SPPG',
    Brandname: 'HP',
    Datail: {
      Model: '6300 Pro MT',
      CPU: 'Core i5',
      Harddisk: '2 TB',
      Type: 'Computer',
      Memory: '4 GB',
    },
  },
];

///////// function ///////

const ChoosMenu = index => {
  setChoose(index);
};

///////// end function ///////

const Checklistproducts = () => {
  // setstate
  const [choose, setChoose] = useState();
  ///////////////////

  //componetlist
  const listCheckproducts = ({item, index}) => {
    return (
      <View
        style={{
          marginVertical: 10,
          marginHorizontal: 10,
        }}>
        <TouchableOpacity
          onPress={() => {
            setChoose(index);
          }}
          style={{
            backgroundColor:
              choose === index ? COLORS.bgfrom : COLORS.menucolor,
            flex: 1,
            height: 197,
            width: 160,
            borderRadius: 20,
          }}>
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              marginHorizontal: 10,
              marginVertical: 10,
            }}>
            <View style={{alignSelf: 'center', marginBottom: 10}}>
              <Image style={styles.imglogo} source={item.icon} />
            </View>
            <View style={{}}>
              <Text
                style={{
                  textAlign: 'center',
                  color:
                    choose === index
                      ? COLORS.bglinearblue
                      : COLORS.placeholderTextColor,
                  fontWeight: 'bold',
                  fontSize: fontSizes.TittleSize,
                }}>
                {item.namemenu}
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    );
  };
  ///////////////////

  return (
    <View style={{flex: 1, backgroundColor: COLORS.white}}>
      <Headerscreen />

      <FlatList
          horizontal={false}
          numColumns={{}}
          data={Datamenu}
          style={{}}
          renderItem={listCheckproducts}
          keyExtractor={item => item.id}
        />

      <View
        style={{
          flex: 1,
          marginVertical: 20,
          alignSelf: 'center',
        }}>
       
      </View>
    </View>
  );
};

export default Checklistproducts;
const styles = StyleSheet.create({
  View1css: {marginHorizontal: 50},
  imglogo: {resizeMode: 'contain', width: 70, height: 70},
  LIcssview1: {
    flex: 1,
    justifyContent: 'center',
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
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
