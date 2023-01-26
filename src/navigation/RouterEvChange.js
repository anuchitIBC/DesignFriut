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
  Platform,
  KeyboardAvoidingView,
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { CurvedBottomBar } from 'react-native-utils-navigation-bar';

// import screen //////

import Homescreen from '../pages/AppIntranet/Home/Homescreen';
import Checklistproducts from '../pages/AppIntranet/Checklistproduct/Checklistproducts';

import IconEntypo from 'react-native-vector-icons/Entypo';
import { COLORS } from '../css/Allcolors';
import { fontSizes } from '../css/Allsizefont';
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
const { height, width } = Dimensions.get('window');
const screen = Dimensions.get('screen');
const SLIDER_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.9);
const ITEM_HEIGHT = Math.round((ITEM_WIDTH * 3) / 4);

const Tabs = createBottomTabNavigator();
import {createStackNavigator} from '@react-navigation/stack';
//  datamenu

///////// function ///////

///////// end function ///////

const RouterEvChange = () => {

  const AppStack = createStackNavigator();

  function AppSkipscreen() {
    return (
      <AppStack.Navigator initialRouteName="SkinSrceen" headerMode="none">
        <AppStack.Screen name='SkinSrceen' component={SkinSrceen} />
        <AppStack.Screen name='MenuLoginSrceen' component={MenuLoginSrceen} />




      </AppStack.Navigator>
    )


  }







  return (
    <NavigationContainer

      screenOptions={{ tabBarVisible: false }}>
        {/* <MenuLoginSrceen/> */}
      <AppSkipscreen />
    </NavigationContainer>
  )
};

export default RouterEvChange;
const styles = StyleSheet.create({});
