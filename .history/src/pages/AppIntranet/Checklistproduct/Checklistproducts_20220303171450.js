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
  Alert,
  KeyboardAvoidingView,
} from 'react-native';

import IconMaterialIcons from 'react-native-vector-icons/MaterialIcons';
import IconEntypo from 'react-native-vector-icons/Ionicons';
//chevron-small-right

import Carousel from 'react-native-snap-carousel';
import {COLORS} from '../../../css/Allcolors';
import {fontSizes} from '../../../css/Allsizefont';
import LinearGradient from 'react-native-linear-gradient';
import Headerscreen from '../Header/Headerscreen';

import Styles from './Styles';
import Dataproducts from './Dataproducts';

// css sizescreen
const windowns = Dimensions.get('window');
const {height, width} = Dimensions.get('window');
const screen = Dimensions.get('screen');
const SLIDER_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.9);
const ITEM_HEIGHT = Math.round((ITEM_WIDTH * 3) / 4);

//  datamenu

const Checklistproducts = () => {
  useEffect(() => {
    Alerttextscan();
  }, []);

  // setstate
  const [OpenDetail, setOpenDetail] = useState();
  const [BTNShown, setBTNShown] = useState(true);
  ///////////////////
  ///////// function ///////

  const Alerttextscan = () => {
    Alert.alert(
      'สแกนรายการ',
      'ต้องการสร้างรอบนับใหม่หรือบันทึกรายการเพิ่ม ?',
      [
        {
          text: 'สร้างรอบนับใหม่',
          onPress: () => {},
        },
        {
          text: 'บันทึกรายการเพิ่ม',
          onPress: async () => {},
        },
        {
          text: 'ยกเลิก',
          onPress: async () => {
            console.log('false');
          },
          style: 'cancel',
        },
      ],
      {cancelable: false},
    );
  };

  const Checkopendetail = (item, index) => {
    // alert(JSON.stringify(index))
    setOpenDetail(index);
  };

  ///////// end function ///////

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
            <IconEntypo
              name="chevron-forward-sharp"
              size={15}
              color={COLORS.bglinearblue}
            />
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
        <View style={{}}>
          <View style={{marginHorizontal: 10, marginTop: 15, marginBottom: 5}}>
            <Text style={Styles.texttile}>{'ตรวจนับพัสดุ'}</Text>
          </View>
          <View style={{marginHorizontal: 10, flexDirection: 'row'}}>
            <View style={{flex: 1}}>
              <Text
                style={{
                  color: COLORS.bglinearblue,
                  fontSize: fontSizes.TittleSize,
                }}>
                {'ตรวจเช็คสภาพ 2564'}
              </Text>
            </View>
            <TouchableOpacity style={{}}>
              <IconMaterialIcons
                name="search"
                size={25}
                color={COLORS.bglinearblue}
              />
            </TouchableOpacity>
          </View>
          <View
            style={{
              marginHorizontal: 10,
              flexDirection: 'row',
              marginBottom: 20,
            }}>
            <View style={{}}>
              <Text style={Styles.texttile}>{'ประเภท : '}</Text>
            </View>

            <View style={{justifyContent: 'center'}}>
              <Text
                style={{
                  fontWeight: 'bold',
                  color: COLORS.bglinearblue,
                  fontSize: fontSizes.labelSize,
                }}>
                {'Computer'}
              </Text>
            </View>
          </View>
        </View>

        <View style={Styles.Vtable}>
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
          data={Dataproducts}
          style={{}}
          renderItem={listCheckproducts}
          keyExtractor={item => item.IDCode}
        />
      </View>
      <View style={{flex: 0.19, marginHorizontal: 10}}>
        <View style={{flexDirection: 'row'}}>
          <LinearGradient
            start={{x: 0.5, y: 1}}
            end={{x: -0.4, y: 3}}
            // end={{x: 1, y: 1}}

            colors={[COLORS.white, COLORS.white]}
            style={{borderWidth:1, marginHorizontal: 5, height: 35, borderRadius: 7, flex: 1}}>
            <TouchableOpacity
              onPress={() => {}}
              style={{
                height: 35,
                borderRadius: 7,
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  fontWeight: 'bold',
                  fontSize: fontSizes.labelSize,
                  color: COLORS.bglinearblue,
                  textAlign: 'center',
                }}>
                {'LOGIN'}
              </Text>
            </TouchableOpacity>
          </LinearGradient>

          <LinearGradient
            start={{x: 0.5, y: 1}}
            end={{x: -0.4, y: 3}}
            // end={{x: 1, y: 1}}

            colors={[COLORS.bglinearblue, COLORS.bglinearbluedrak]}
            style={{marginHorizontal: 5, height: 35, borderRadius: 7, flex: 1}}>
            <TouchableOpacity
              onPress={() => {}}
              style={{
                height: 35,
                borderRadius: 7,
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  fontWeight: 'bold',
                  fontSize: fontSizes.labelSize,
                  color: COLORS.white,
                  textAlign: 'center',
                }}>
                {'LOGIN'}
              </Text>
            </TouchableOpacity>
          </LinearGradient>
        </View>
      </View>
    </View>
  );
};

export default Checklistproducts;
