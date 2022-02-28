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
import IconMaterialIcons from 'react-native-vector-icons/MaterialIcons';
import IconEntypo from 'react-native-vector-icons/Ionicons';
//chevron-small-right

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
      Harddisk: '2 TB',
    },
  },
];

///////// function ///////

///////// end function ///////

const Checklistproducts = () => {
  // setstate
  const [OpenDetail, setOpenDetail] = useState();
  ///////////////////

  const Checkopendetail = (item, index) => {
    // alert(JSON.stringify(index))
    setOpenDetail(index);
  };

  //componetlist
  const listCheckproducts = ({item, index}) => {
    return (
      <View
        style={{
          marginVertical: 10,
          marginHorizontal: 10,

          flex: 1,
        }}>
        {/* {index === 0 && ( */}
        <TouchableOpacity
          onPress={() => {
            Checkopendetail(item, index);
          }}
          style={{
            marginHorizontal: 5,
            flex: 1,
            flexDirection: 'row',
            marginBottom: 10,
          }}>
          <View style={{width: '6%'}}>
            <Text style={{textAlign: 'left', color: COLORS.bglinearblue}}>
              {index + 1}
            </Text>
          </View>
          <View style={{width: '43%'}}>
            <Text
              numberOfLines={2}
              style={{textAlign: 'left', color: COLORS.bglinearblue}}>
              {item.IDCode}
            </Text>
          </View>
          <View style={{width: '30%'}}>
            <Text style={{textAlign: 'center', color: COLORS.bglinearblue}}>
              {item.SN}
            </Text>
          </View>
          <View style={{width: '15%'}}>
            <Text style={{textAlign: 'center', color: COLORS.bglinearblue}}>
              {item.Brandname}
            </Text>
          </View>
          <View style={{width: '6%'}}>
            <IconEntypo name='chevron-forward-sharp' size={15} color={COLORS.bglinearblue} /> 
          </View>
        </TouchableOpacity>
        {OpenDetail === index && (
          <View
            style={{
              borderRadius: 7,
              backgroundColor: COLORS.bgfrom,
              marginBottom: 5,
            }}>
            <View style={{marginHorizontal: 20, marginVertical: 10}}>
              <Text
                style={{
                  marginBottom: 10,
                  fontWeight: 'bold',
                  color: COLORS.textcolorintable,
                }}>
                {'Detail :'}
              </Text>
              <View style={{marginBottom: 10, flexDirection: 'row'}}>
                <View style={{flex: 1.2, flexDirection: 'row'}}>
                  <View>
                    <Text style={{color: COLORS.textcolorintable}}>
                      {'Model : '}
                    </Text>
                  </View>
                  <View style={{marginHorizontal: 15}}>
                    <Text style={{color: COLORS.bglinearblue}}>
                      {item.Datail.Model}
                    </Text>
                  </View>
                </View>
                <View style={{flex: 1, flexDirection: 'row'}}>
                  <View>
                    <Text style={{color: COLORS.textcolorintable}}>
                      {'Type : '}
                    </Text>
                  </View>
                  <View style={{marginHorizontal: 15}}>
                    <Text style={{color: COLORS.bglinearblue}}>
                      {item.Datail.Type}
                    </Text>
                  </View>
                </View>
              </View>

              <View style={{marginBottom: 10, flexDirection: 'row'}}>
                <View style={{flex: 1.2, flexDirection: 'row'}}>
                  <View>
                    <Text style={{color: COLORS.textcolorintable}}>
                      {'CPU : '}
                    </Text>
                  </View>
                  <View style={{marginHorizontal: 15}}>
                    <Text style={{color: COLORS.bglinearblue}}>
                      {item.Datail.CPU}
                    </Text>
                  </View>
                </View>
                <View style={{flex: 1, flexDirection: 'row'}}>
                  <View>
                    <Text style={{color: COLORS.textcolorintable}}>
                      {'Memory : '}
                    </Text>
                  </View>
                  <View style={{marginHorizontal: 15}}>
                    <Text style={{color: COLORS.bglinearblue}}>
                      {item.Datail.Memory}
                    </Text>
                  </View>
                </View>
              </View>

              <View style={{flexDirection: 'row'}}>
                <View>
                  <Text style={{color: COLORS.textcolorintable}}>
                    {'Harddisk : '}
                  </Text>
                </View>
                <View style={{marginHorizontal: 15}}>
                  <Text style={{color: COLORS.bglinearblue}}>
                    {item.Datail.Harddisk}
                  </Text>
                </View>
              </View>
            </View>
          </View>
        )}
        <View
          style={{
            borderColor: COLORS.placeholderTextColor,
            borderStyle: 'dashed',
            borderWidth: 0.5,
          }}></View>
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
        <View style={{flex: 1,borderWidth:1}}>
        <View style={{marginHorizontal:10,marginTop:15,marginBottom:5}}>
          <Text>
            {'ตรวจนับพัสดุ'}
          </Text>
        </View>
        <View style={{marginHorizontal:10,}}>
          <Text>
            {'ตรวจนับพัสดุ'}
          </Text>
        </View>
        </View>

        <View
          style={{
            marginHorizontal: 10,
            borderTopWidth: 1,
            paddingVertical: 5,
            borderBottomWidth: 1,
            borderColor: COLORS.bglinearblue,
            flexDirection: 'row',
            marginBottom: 10,
          }}>
          <View style={{width: '8%'}}>
            <Text
              style={{
                color: COLORS.bglinearblue,
                fontWeight: 'bold',
                textAlign: 'center',
              }}>
              {'No.'}
            </Text>
          </View>
          <View style={{width: '40%'}}>
            <Text
              style={{
                color: COLORS.bglinearblue,
                fontWeight: 'bold',
                textAlign: 'center',
              }}>
              {'ID'}
            </Text>
          </View>
          <View style={{width: '30%'}}>
            <Text
              style={{
                color: COLORS.bglinearblue,
                fontWeight: 'bold',
                textAlign: 'center',
              }}>
              {'S/N'}
            </Text>
          </View>
          <View style={{width: '15%'}}>
            <Text
              style={{
                color: COLORS.bglinearblue,
                fontWeight: 'bold',
                textAlign: 'center',
              }}>
              {'Brand'}
            </Text>
          </View>
          <View style={{width: '7%'}}>
            <Text
              style={{
                color: COLORS.bglinearblue,
                fontWeight: 'bold',
                textAlign: 'center',
              }}>
              {''}
            </Text>
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
