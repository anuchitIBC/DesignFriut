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

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {CurvedBottomBar} from 'react-native-utils-navigation-bar';

// import screen //////

import Homescreen from '../pages/AppIntranet/Home/Homescreen';
import Checklistproducts from '../pages/AppIntranet/Checklistproduct/Checklistproducts';

import IconEntypo from 'react-native-vector-icons/Entypo';
import {COLORS} from '../css/Allcolors';
import {fontSizes} from '../css/Allsizefont';
import { IconChange24, IconCheckSucess } from '../Icon/Customs';
import { FONTFAMILY_ } from '../css/Allfontfamily';
import LoginWithEmail from '../pages/01_Login/LoginWithEmailScreen';
import MenuLoginSrceen from '../pages/01_Login/MenuLoginSrceen'
import SkinSrceen from '../pages/01_Login/SkinSrceen'
import MenuRegisterScreen from '../pages/02_Register/MenuRegisterScreen'
import OtpScreen from '../pages/02_Register/OtpScreen'
import RegisterProfileScreen from '../pages/02_Register/RegisterProfileScreen'
import ConsentScreen from '../pages/03_ConsentPersonal/ConsentScreen';
import ComponentResetpassSucess from '../pages/04_PIN/ComponentResetpassSucessScreen'
import LoginPinScreen from '../pages/04_PIN/LoginPinScreen'
import MenuFingerprintScanScreen from '../pages/04_PIN/MenuFingerprintScanScreen'
import CarInfoemation from '../pages/05_CarInformation/CarInfoemationScreen';
import HomeEV from '../pages/06_Home/HomeScreen'
import MapsSrceen from '../pages/06_Home/MapsSrceen'



// css sizescreen
const windowns = Dimensions.get('window');
const {height, width} = Dimensions.get('window');
const screen = Dimensions.get('screen');
const SLIDER_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.9);
const ITEM_HEIGHT = Math.round((ITEM_WIDTH * 3) / 4);

const Tabs = createBottomTabNavigator();

//  datamenu

///////// function ///////

///////// end function ///////

const RouterEvChange = () => {
  return (

    <>
   {/* <IconCheckSucess/> */}
   {/* <LoginWithEmail/> */}
   {/* <MenuLoginSrceen/> */}
   {/* <SkinSrceen/> */}
   {/* <MenuRegisterScreen/> */}
   {/* <OtpScreen/> */}
   {/* <RegisterProfileScreen/> */}
   {/* <ConsentScreen/> */}
   {/* <ComponentResetpassSucess/> */}
   {/* <LoginPinScreen/> */}
   {/* <MenuFingerprintScanScreen/> */}
   {/* <CarInfoemation/> */}
   {/* <HomeEV/> */}
   <MapsSrceen/>
  
   
   
    
    </>


    // <NavigationContainer screenOptions={{tabBarVisible: false}}>
    //   <Tabs.Navigator
    //     //  showLabel={true}
    //     sceneContainerStyle={{}}
    //     screenOptions={{
    //       tabBarLabelStyle: {fontSize: fontSizes.labelSize},
    //       headerShown: false,
    //       showLabel: true,

    //       tabBarStyle: {
    //         borderTopLeftRadius: 20,
    //         borderTopRightRadius: 20,
    //         shadowColor: '#000',
    //         shadowOffset: {
    //           width: 0,
    //           // height: 2,
    //           height: Platform.OS === 'ios' ? -3 : 10,
    //         },
    //         shadowOpacity: Platform.OS === 'ios' ? 0.06 : 0.25,

    //         shadowRadius: 3.84,
    //       },
    //     }}
    //     backBehavior="none">
    //     <Tabs.Screen
    //       name="Homescreen"
    //       component={Homescreen}
    //       options={{
    //         tabBarLabel: ({tintColor, focused}) => (
    //           <View>
    //             <Text
    //               style={{
    //                 color: focused
    //                   ? COLORS.bglinearblue
    //                   : COLORS.placeholderTextColor,
    //               }}>
    //               {'หน้าแรก'}
    //             </Text>
    //           </View>
    //         ),
    //         tabBarIcon: () => (
    //           <View>
    //             <Image
    //               style={{resizeMode: 'contain', width: 30, height: 30}}
    //               source={require('../../src/pages/image/home.png')}
    //             />
    //           </View>
    //         ),
    //       }}
    //     />
    //     <Tabs.Screen
    //       name="Homescreen1"
    //       component={Homescreen}
    //       options={{
    //         tabBarLabel: () => <View />,
    //         tabBarIcon: ({tintColor, focused}) => (
    //           <View
    //             style={focused? {
    //               justifyContent: 'center',
    //               marginTop: -40,
    //               borderRadius: 50,
    //               height: 80,
    //               width: 80,
    //               backgroundColor: COLORS.bggray,
    //               shadowColor:COLORS.bglinearblue,
    //               shadowOffset:
    //               Platform.OS ==='ios'?
    //                {
    //                 width: 0,
    //                 height: 0,
    //               }:{
    //                 width:0,
    //                 height: 1
    //               },
    //               shadowOpacity: 0.58,
    //               shadowRadius: 6.00,
                  
    //               elevation: 24,
    //             }:{
    //               justifyContent: 'center',
    //               marginTop: -40,
    //               borderRadius: 50,
    //               height: 80,
    //               width: 80,
    //               backgroundColor: COLORS.bggray,
    //               shadowColor:COLORS.bglinearblue,
               
    //             }}>
    //             <View
    //               style={{
    //                 alignSelf: 'center',
    //                 justifyContent: 'center',
    //                 backgroundColor: COLORS.bglinearblue,
    //                 borderRadius: 50,
    //                 height: 65,
    //                 width: 65,
                   
    //               }}>
    //               <Image
    //                 style={{
    //                   alignSelf: 'center',
    //                   resizeMode: 'contain',
    //                   width: 30,
    //                   height: 30,
    //                 }}
    //                 source={require('../../src/pages/image/qrcode.png')}
    //               />
    //             </View>
    //           </View>
    //         ),
    //       }}
    //     />
    //     <Tabs.Screen
    //       name="Checklistproducts"
    //       component={Checklistproducts}
    //       options={{
    //         tabBarLabel: ({tintColor, focused}) => (
    //           <View>
    //             <Text
    //               style={{
    //                 color: focused
    //                   ? COLORS.bglinearblue
    //                   : COLORS.placeholderTextColor,
    //               }}>
    //               {'ประวัติ'}
    //             </Text>
    //           </View>
    //         ),
    //         tabBarIcon: () => (
    //           <View>
    //             <Image
    //               style={{resizeMode: 'contain', width: 30, height: 30}}
    //               source={require('../../src/pages/image/history.png')}
    //             />
    //           </View>
    //         ),
    //       }}
    //     />
    //   </Tabs.Navigator>
    // </NavigationContainer>
  );
};

export default RouterEvChange;
const styles = StyleSheet.create({});
