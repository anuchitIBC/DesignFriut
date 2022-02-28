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
          borderWidth:1,
           
          flex:1
        }}>
        {/* {index === 0 && ( */}
          <TouchableOpacity style={{ flex:1,   flexDirection: 'row',marginBottom:10}}>
            <View style={{ width:'10%', }}>
              <Text>{index+1}</Text>
            </View>
            <View style={{ width:'40%', }}>
              <Text>{item.IDCode}</Text>
            </View>
            <View style={{ width:'30%', }}>
              <Text>{item.SN}</Text>
            </View>
            <View style={{ width:'20%', }}>
              <Text>{item.Brandname}</Text>
            </View>
          </TouchableOpacity>
        {/* )} */}


        {/* <View>
          <Text>{index}</Text>
        </View> */}
      </View>
    );
  };
  ///////////////////

  return (
    <View style={{flex: 1, backgroundColor: COLORS.white}}>
      <Headerscreen />

      <View
        style={{
          flex: 1,
          marginVertical: 0,
          alignSelf: 'center',
        }}>
          <View style={{flex:1}}>
            <Text>{'jjj'}</Text>
          </View>

 
        <View style={{  marginHorizontal:10, borderWidth: 1, flexDirection: 'row',marginBottom:10}}>
            <View style={{width:'8%', borderWidth:1 }}>
              <Text style={{textAlign:'center'}} >{'No'}</Text>
            </View>
            <View style={{width:'40%', borderWidth:1 }}>
              <Text style={{textAlign:'center'}} >{'ID'}</Text>
            </View>
            <View style={{width:'30%', borderWidth:1 }}>
              <Text style={{textAlign:'center'}} >{'S/N'}</Text>
            </View>
            <View style={{width:'15%', borderWidth:1 }}>
              <Text style={{textAlign:'center'}} >{'Brand'}</Text>
            </View>
            <View style={{width:'7%', borderWidth:1 }}>
              <Text style={{textAlign:'center'}} >{''}</Text>
            </View>
          </View>
      
        <FlatList
          horizontal={false}
          
          data={Datamenu}
          style={{}}
          renderItem={listCheckproducts}
          keyExtractor={item => item.id}
        />
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
