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
import { createStackNavigator } from '@react-navigation/stack';
import {CurvedBottomBar} from 'react-native-utils-navigation-bar';

// import screen //////

import Homescreen from '../pages/AppIntranet/Home/Homescreen';
import Checklistproducts from '../pages/AppIntranet/Checklistproduct/Checklistproducts';

import IconEntypo from 'react-native-vector-icons/Entypo';
import {COLORS} from '../css/Allcolors';
import {fontSizes} from '../css/Allsizefont';

// css sizescreen
const windowns = Dimensions.get('window');
const {height, width} = Dimensions.get('window');
const screen = Dimensions.get('screen');
const SLIDER_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.9);
const ITEM_HEIGHT = Math.round((ITEM_WIDTH * 3) / 4);

const Stack = createStackNavigator();

//  datamenu

///////// function ///////

///////// end function ///////

const Routermenu = () => {
  return (
  <View>
      <Text>{'menu'}</Text>
  </View>
  );
};

export default Routermenu;
const styles = StyleSheet.create({});
