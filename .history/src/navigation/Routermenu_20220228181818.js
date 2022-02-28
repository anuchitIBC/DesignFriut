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

import { createStackNavigator } from '@react-navigation/stack';

import Routers from './Routers';
import Homefresh from '../pages/Home/Homefresh';

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
function Routermenu() {
    return (
        <View></View>
    //   <Stack.Navigator>
    //     <Stack.Screen name="Home" component={Homefresh} />
        
    //   </Stack.Navigator>
    );
  }

// const Routermenu = () => {
//   return (
//       <View></View>
//     // <Stack.Navigator>
//     //   {/* <Stack.Screen name="Routers" component={Routers} /> */}
//     //   {/* <Stack.Screen name="Notifications" component={Notifications} />
//     //   <Stack.Screen name="Profile" component={Profile} />
//     //   <Stack.Screen name="Settings" component={Settings} /> */}
//     // </Stack.Navigator>
//   );
// };

export default Routermenu;
const styles = StyleSheet.create({});
