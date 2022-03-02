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



import Routers from './Routers';
import Homefresh from '../pages/Home/Homefresh';
import Homekupascreen from '../pages/AppKupa/Homescreen/HomeKupascreen';
import {fontSizes} from '../css/Allsizefont';
import {COLORS} from '../css/Allcolors';

// css sizescreen
const windowns = Dimensions.get('window');
const {height, width} = Dimensions.get('window');
const screen = Dimensions.get('screen');
const SLIDER_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.9);
const ITEM_HEIGHT = Math.round((ITEM_WIDTH * 3) / 4);

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import { createStackNavigator } from '@react-navigation/stack';




//  datamenu

///////// function ///////

///////// end function ///////
const RouterAppKup= ({})=> {

const Stack = createStackNavigator();
const DitpStack = createStackNavigator();
const Tabs = createBottomTabNavigator();
    return (
      <NavigationContainer screenOptions={{tabBarVisible: false}}>
   
    </NavigationContainer>
    );
  }


export default RouterAppKup;
const styles = StyleSheet.create({});
